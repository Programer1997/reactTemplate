import React from "react";
import "./about.scss";


const About = ()=>{
    return (
        <div class="about">
            <img  class="imgAbout" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            
            <div class="itemsAbout">
                <h1 class="textAbout">Welcome to React</h1>
                <button class="buttonAbout">Press</button>
            </div>

        </div>
    );

};

export default About;