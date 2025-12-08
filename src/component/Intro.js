
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
        <div class="scroll-up-btn">
          <i class="fas fa-angle-up"></i>
        </div>
      
       
        <nav class="navbar">
          <div class="max-width">
            <div class="logo"><a href="#"><span>Arvind's</span><span> Portfolio</span></a></div>
            <ul class="menu">
              <li><a href="#home" class="menu-btn"><strong>Home</strong></a></li>
              <li><a href="#about" class="menu-btn"><strong>About</strong></a></li>
               <li><a href="#education" class="menu-btn"><strong>Education</strong></a></li>
              <li><a href="#skills" class="menu-btn"><strong>Skills</strong></a></li>
              <li><a href="#projects" class="menu-btn"><strong>Projects</strong></a></li>
              <li><a href="#contact" class="menu-btn"><strong>Contact</strong></a></li>
           <li> <a id="openDocBtn" class="btn" onClick={handleDownload} >Downlode Resume</a>  </li>
            </ul>
            <div class="menu-btn">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </nav>
      
        
        <section class="home" id="home">
          <div class="max-width">
            <div class="home-content">
              <div class="text-1">Hello, This is</div>
              <div class="text-2">Arvind Silswal</div>
              <div class="text-3">And I'm a <span ref={el} ></span></div>
              
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