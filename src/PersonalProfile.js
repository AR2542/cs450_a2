import React, { Component } from "react";

class PersonalProfile extends Component {
    render() {
        return (<div className="file">
            <div className="profile">
                <div className="item1">{this.props.profile.title}</div>
                <div className="prof">{this.props.profile.content}</div>
            </div>
        </div>
        );
    }
}

export default PersonalProfile;