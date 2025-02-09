import React, { Component } from "react";

class Skills extends Component {
    render() {
        return(<div className="file">
            <div className="skill">
                <div className="item3">{this.props.keySkills.title}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item3"></div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item3"></div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
                <div className="item4">{this.props.keySkills.content1}</div>
            </div>
        </div>)
    }
}

export default Skills;