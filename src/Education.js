import React, { Component } from "react";

class Education extends Component {
    render() {
        return (<div className="file">
            <div className="profile">
                <div class="item1">Education</div>
                <div class="item2">New Jersey Institute of Technology
                    <p class="desc">BS in Computer Science</p>
                    <p class="desc">2018-2022</p>
                    <p class="desc">GPA:3.9</p>
                </div>
            </div>
            <div className="profile">
                <div class="item1"></div>
                <div class="item2">New Jersey Institute of Technology
                    <p class="desc">MS in Data Science</p>
                    <p class="desc">2022-2023</p>
                    <p class="desc">GPA:4.0</p>
                </div>
            </div>
        </div>)
    }
}

export default Education;