import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (<div className="file">
            <div className="profile">
                <div className="item1">{this.props.workExperience.title}</div>
                <div className="item2">{this.props.workExperience.job1}
                    <p className="desc">{this.props.workExperience.job1Content}</p>
                </div>
            </div>
            <div className="profile">
                <div className="item1"></div>
                <div className="item2">{this.props.workExperience.job2}
                    <p className="desc">{this.props.workExperience.job2Content}</p>
                </div>
            </div>
        </div>)
    }
}

export default WorkExperience;