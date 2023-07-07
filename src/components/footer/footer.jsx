import React from "react";
import "./footer.scss"

const Contact = ()=>{
    return (
        <div>
            <h1>Contact</h1>
            <form action="">
                <input type="text" placeholder="Write your name..."/>
                <input type="text" placeholder="wirte your email..." />
                <textarea name="" id="" cols="30" rows="10" placeholder="some concern .... ?"></textarea>
                <button>Send</button>
            </form>
        </div>
    );

};

export default Contact;