import React from "react";
// import Home from "./Home";
// import Chat from "./Chat";
// import Profile from "./Profile";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div className="NavBar">
            <span id="navSpan">
                <NavLink to="/chat">
                    <img src="https://i.imgur.com/Q8KNgQa.png" id="navIcon"></img>
                </NavLink>
            </span>
            <span id="navSpan">
                <NavLink to="/">
                    <img src="https://i.imgur.com/sKMfQ0g.png" id="navIcon"></img>
                </NavLink>
            </span>
            <span id="navSpan">
                <NavLink to="/profile">
                    <img src="https://i.imgur.com/xgw6bM2.png" id="navIcon"></img>
                </NavLink>
            </span>
        </div>
    )
}

export default NavBar;