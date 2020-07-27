import React, { Component } from 'react';
import '../../stylesheets/navbars/mobileNavList.css';
class MobileNavList extends Component {
    constructor(props) {
        super(props);
        this.hamburgerMenuToggle = this.hamburgerMenuToggle.bind(this);
    }

    hamburgerMenuToggle(e) {
        var list = document.getElementsByClassName("navList")[0];
        var listItems = document.getElementsByClassName("navListContainer")[0];

        if(e.target.className == list.className){

            //Conditional for toggling the nav menu (mobile) if user touches anything but nav menu

                if (list.classList.contains("fadeInList")) {
                    listItems.classList.remove("slide-in")
                    list.classList.remove("fadeInList")
                    listItems.classList.add("slide-out");
                    return;
                } else {
                    listItems.classList.remove("slide-out");
                    list.classList.add("fadeInList");
                    listItems.classList.add("slide-in");
                    return;
                }
            }
        
        return

    }

    //Note: Need to make Nav List its own Component. When done with the functionality, transfer to its own component
    render() {
        return (
            <div onClick={this.hamburgerMenuToggle} className="navList">
                <div className="navListContainer">
                    <div className="navListHeader">
                        <div className="navListIcon"></div>
                        <div className="navListCloseButton"></div>
                    </div>
                    <li>Home</li>
                    <li>Next</li>
                    <li>Another One</li>
                    <li>About Us</li>
                </div>

            </div>
        )
    }
}

export default MobileNavList;