
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "react-circular-progressbar/dist/styles.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
function Intro() {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Arvind Resume.pdf";
        link.download = "Arvind Resume.pdf";
        link.click();
    };

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "React Developer", "Web Designer"],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
  <>
        <div className="scroll-up-btn">
          <i className="fas fa-angle-up"></i>
        </div>
      
       
        <nav className="navbar">
          <div className="max-width">
            <div className="logo"><a href="#"><span>Arvind's</span><span> Portfolio</span></a></div>
            <ul className="menu">
              <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
              <li><a href="#about" className="menu-btn"><strong>About</strong></a></li>
               <li><a href="#education" className="menu-btn"><strong>Education</strong></a></li>
              <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
              <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
              <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
           <li> <a id="openDocBtn" className="btn" onClick={handleDownload} >Downlode Resume</a>  </li>
            </ul>
            <div className="menu-btn">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      
        
        <section className="home" id="home">
          <div className="max-width">
            <div className="home-content">
              <div className="text-1">Hello, This is</div>
              <div className="text-2">Arvind Silswal</div>
              <div className="text-3">And I'm a <span ref={el} ></span></div>
              
            </div>
          </div>
        </section>
      
      <About/>  
    <Education/>
      <Skills/>
      <Projects/>
       <Contact/>
        
      </>
    )
}
export default Intro;