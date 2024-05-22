import React from 'react'
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Home from "../components/Home";

function HomeScreen() {
  return (
    <div> 
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <SocialLinks/>
    </div>
  )
}

export default HomeScreen