import React, { Component } from 'react';
import '../../stylesheets/navbars/landingPageNav.css';
class LandingNavbar extends Component {
    constructor(props) {
        super(props);
        this.hamburgerMenuToggle = this.hamburgerMenuToggle.bind(this);
    }
    hamburgerMenuToggle() {
        var bars = document.getElementsByClassName("bar");
        var list = document.getElementsByClassName("navList")[0];
        console.log("hamburger toggle has fired")
        for (var i = 0; i < bars.length; i++) {
            console.log("this is current i: ", bars[i])
            bars[i].classList.toggle("change")
        }
        if(list.classList.contains("toggleList")){
            list.classList.remove("toggleList");
            return;
        }else{
            list.classList.add("toggleList")
        }
  
    }
    render() {
        return (
            <div className="landingNavContainer">
                <div className="iconContainer">
                    <div className="icon">Zenith</div>
                </div>
                <div className="hamburgerMenu" onClick={this.hamburgerMenuToggle}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className="navList">
                    <li>Home</li>
                    <li>Next</li>
                    <li>Another One</li>
                    <li>About Us</li>
                </div>
            </div>
        )
    }
}

export default LandingNavbar;