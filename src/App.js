import React, { Component } from "react";
import "./App.css";
import FileUpload from "./FileUpload";
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected_data: [],
      sentimentColors: { positive: "green", negative: "red", neutral: "gray" }
    };
  }
  componentDidMount() {
    this.renderChart()
  }
  componentDidUpdate() {
    this.renderChart()
  }
  set_data = (csv_data) => {
    this.setState({ data: csv_data });
  }
  renderChart = () => {

    const { data, sentimentColors } = this.state; //Assigns data and sentiment colours based on the file sent to the variables
    if (!data.length) return; //Returns nothing if file is empty or no file uploaded

    var margin = { left: 50, right: 150, top: 10, bottom: 10 }, width = 500, height = 300;
    var innerWidth = width - margin.left - margin.right
    var innerHeight = height - margin.top - margin.bottom

    d3.select("svg").selectAll("*").remove(); //Removes previous data to avoid overriding
    const svg = d3.select("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${margin.left}, ${margin.top})`); 

    //Using of legend component to make a chart that shows what the coloured circles represent (in this case, sentiments)
    const legend = svg.append("g").attr("transform", `translate(${innerWidth + 20}, 20)`);
    const sentiments = Object.keys(sentimentColors);
    sentiments.forEach((sentiment, i) => { //Sentiment is the 3 sentiments, and i is iterating the index of sentiment in the array
      legend.append("circle").attr("cx", 0).attr("cy", i * 20).attr("r", 6).attr("fill", sentimentColors[sentiment]); //The coloured circles will be displayed in a line 20 pixels below the previous
      legend.append("text").attr("x", 15).attr("y", i * 20).text(sentiment).attr("alignment-baseline", "middle").attr("font-size", "12px"); //Shows the texts besides the circles in the same order
    });

    //Determing the scale based on the innerWidth and assigning fields from the graph to axes
    const xAxisScale = d3.scaleLinear().domain(d3.extent(data, d => d["Dimension 1"])).range([0, innerWidth]);
    const yAxisScale = d3.scaleLinear().domain(d3.extent(data, d => d["Dimension 2"])).range([innerHeight, 0]);

    //Now we plot the points as small circles and first plot them based on the assigned Dimension Field values, and color them based on the sentiments and its corresponding colors
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx", d => xAxisScale(d["Dimension 1"])).attr("cy", d => yAxisScale(d["Dimension 2"])).attr("r", 5).attr("fill", d => sentimentColors[d.PredictedSentiment] || "gray").attr("opacity", 0.7);

    //The brush allows us to drag and select points to see the tweets
    const tweetsbrush = d3.brush().extent([[0, 0], [innerWidth, innerHeight]]).on('end', ({ selection }) => {
        if (!selection) return;
        const [[x0, y0], [x1, y1]] = selection; //Gets the coordinates of the brush, from where you start and where you end
        const points = data.filter(d =>
          x0 <= xAxisScale(d["Dimension 1"]) && xAxisScale(d["Dimension 1"]) <= x1 && y0 <= yAxisScale(d["Dimension 2"]) && yAxisScale(d["Dimension 2"]) <= y1); //Makes sure the brush size is less than the graph size
        this.setState({ selected_data: points });
      });

    //Call the brush to enable the above functionality
    svg.append("g").call(tweetsbrush);
  };

  render() {
    return (
      <div>
        <FileUpload set_data={this.set_data}></FileUpload>
        <div className="parent">
          <div className="child1 item">
            <h2>Projected Tweets</h2>
            <svg> </svg>
          </div>
          <div className="child2 item">
            <h2>Selected Tweets</h2>
            <ul>
              {this.state.selected_data.map((d, i) => (
                <li key={i} style={{ color: this.state.sentimentColors[d.PredictedSentiment] }}> 
                  {d.Tweets}</li>))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;