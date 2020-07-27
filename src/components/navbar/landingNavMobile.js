import React, { Component } from 'react';

import '../../stylesheets/navbars/landingPageNav.css';
class LandingNavbar extends Component {
    constructor(props) {
        super(props);
        this.hamburgerMenuToggle = this.hamburgerMenuToggle.bind(this);
        this.myFunction = this.myFunction.bind(this);
    }

    // Toggles the nav bar when hamburger menu is clicked
    hamburgerMenuToggle() {
        this.myFunction();
        var bars = document.getElementsByClassName("bar");
        for(var i = 0; i < bars.length; i++){
            if(bars[i].classList.contains("change")){
                bars[i].classList.remove("change");
            }
            else{
                bars[i].classList.add("change");
            }
        }

        var list = document.getElementsByClassName("navList")[0];
        var listItems = document.getElementsByClassName("navListContainer")[0];
        //Conditional for toggling the nav menu (mobile)
        if (list.classList.contains("fadeInList")) {
            listItems.classList.remove("slide-in")
            list.classList.remove("fadeInList")
            listItems.classList.add("slide-out");
            return;
        } else {
            listItems.classList.remove("slide-out");
            list.classList.add("fadeInList");
            listItems.classList.add("slide-in");
        }

    }
    myFunction() {
        var bar1 = document.getElementsByClassName("bar1")[0];
        var bar2 = document.getElementsByClassName("bar2")[0];
        var bar3 = document.getElementsByClassName("bar3")[0];

        if(bar1.classList.contains("change")){
            bar1.classList.remove("change");
            bar2.classList.remove("change2");
            bar3.classList.remove("change3");
            return;
        }
        else{
            bar1.classList.add("change");
            bar2.classList.add("change2");
            bar3.classList.add("change3");
        }
      }

    //Note: Need to make Nav List its own Component. When done with the functionality, transfer to its own component
    render() {
        return (
            <div className="landingNavContainer">
                <div className="iconContainer">
                    <div className="icon">Zenith</div>
                </div>
                <div className="hamburgerMenu" onClick={this.hamburgerMenuToggle}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                {/* This is the beginning of the nav list */}
                {/* This is supposed to grey out the main mobile area when nav is activated */}
                {/* <div className="navListBackDrop"> 
                    <div className="navList">
                        <div className="navListHeader">
                            <div className="navListIcon"></div>
                            <div className="navListCloseButton"></div>
                        </div>
                        <li>Home</li>
                        <li>Next</li>
                        <li>Another One</li>
                        <li>About Us</li>
                    </div>
                </div> */}

            </div>
        )
    }
}

export default LandingNavbar;