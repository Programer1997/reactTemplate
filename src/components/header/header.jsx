import React from "react";
import "./header.scss";

const Nav = ()=>{
    return (
        <nav>
            <ul>
                <h1>React</h1>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );

};

export default Nav;