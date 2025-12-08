import { useRef } from "react";
import { useEffect } from "react"; 
import Typed from "typed.js";
function About(){
       
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
            return(
            <>
         <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">About Me</h2>
            <div className="about-content">
              <div className="column left ">
                 <img src="./images/aboutpic.jpg"/>
              </div>
              <div className="column right mt-5">
                <div className="text">I'm Arvind Silswal and I'm a <span className="typing-2" ref={el}>Web developer</span></div>
                <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
                <br/>
                <div className="text">Why Work With Me</div>
                <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>
      
                
              </div>
            </div>
          </div>
        </section>
    
            
            </>
    )
    }
    export default About;
    
