import React from "react";
import "./styles.scss";
import Nav from "./components/header/header.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/footer/footer.jsx";

function App() {
  return (
    <div>
        <Nav />
        <About />
        <Contact />
    
    </div>
  
  );
}

export default App;