
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Nav from "./Nav";
function Intro() {
   

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
        <Nav/>
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