import React, { Component } from "react";

class Header extends Component {
    render() {
        return (<div className="file">
            <div className="heading">
                <div className="left">
                    <p className="name">{this.props.personInfo.name}</p>
                    <p>{this.props.personInfo.occupation}</p>
                </div>
                <div className="right">
                    <div>
                        <p>Email: <a href="mailto:abc@gmail.com">{this.props.contactInfo.email}</a></p>
                        <p>Web: {this.props.contactInfo.web}</p>
                        <p>Mobile: {this.props.contactInfo.mobile}</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header;