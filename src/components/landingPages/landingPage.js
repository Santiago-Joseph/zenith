import React, { Component } from 'react';
import '../../stylesheets/landingPage/landingPage.css';

class LandingPages extends Component {
    constructor(props) {
        super(props);
        this.toggleButton = this.toggleButton.bind(this);
    }
    toggleButton() {
        console.log("The button has been pressed");
    }
    render() {
        return (
            <div className="container">
                <h1>This is going to be the landing page.</h1>
                <button onClick={this.toggleButton}>Press me</button>
            </div>

        )
    }
}

export default LandingPages;