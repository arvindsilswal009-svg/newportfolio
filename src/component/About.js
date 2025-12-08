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
         <section class="about" id="about">
          <div class="max-width">
            <h2 class="title">About Me</h2>
            <div class="about-content">
              <div class="column left ">
                <img src="two.jpg" alt=""/>
              </div>
              <div class="column right mt-5">
                <div class="text">I'm Arvind Silswal and I'm a <span class="typing-2" ref={el}>Web developer</span></div>
                <p>Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills & enhance learning in the field of work. Capable of mastering new technologies.</p>
                <br/>
                <div class="text">Why Work With Me</div>
                <p>I'm a great communicator & love to invest the necessary time to understand the customer's problem very well.</p>
      
                
              </div>
            </div>
          </div>
        </section>
    
            
            </>
    )
    }
    export default About;
    
