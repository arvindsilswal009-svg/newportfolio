function Contact(){
    return(
        
       
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Get in Touch</div>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
                <div className="icons">
      
                 
                    <div className="row">
                        <div className="info">
                      <i className="fa-solid fa-user-large"></i>
                      
                        
                        <div className="sub-title"><a style={{textdecoration:" none", color: "#333"}}> Arvind Silswal</a></div>
                      </div>
                    </div>
                  <div className="row">
                     <div className="info">
                    <i className="fa-solid fa-phone"></i>
                   
                     
                      <div className="sub-title"><a href="mailto:arvindsilswal009@gmail.com" style={{textdecoration: "none", color:" #333"}}>+91-7018924210</a></div>
                    </div>
                  </div>
               
                 
                <a href="mailto:arvindsilswal009@gmail.com"> </a>

                  <div className="row">
                     <div className="info">
                    <i className="fa-solid fa-envelope"></i>
                   
                     
                      <div className="sub-title"><a href="mailto:arvindsilswal009@gmail.com" style={{textdecoration: "none", color:" #333"}}>arvindsilswal009@gmail.com</a></div>
                    </div>
                  </div>
               
      
                 
                  <br/>
      
                 
                  <div className="social-menu">
                    <ul>
                      <li><a href="https://github.com/arvindsilswal009-svg"><i className="fa-brands fa-github"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/arvind-silswal-76b8b436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "><i className="fa-brands fa-linkedin-in"></i></a></li>
                      </ul>
                  </div>
                </div>
              </div>
      
              
              <div className="column right">
                <div className="text">Message me</div>
                <form action="#">
                  <div className="fields">
                    <div className="field name">
                      <input type="text" placeholder="Your Name" required />
                    </div>
                    <div className="field email">
                      <input type="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject" required />
                  </div>
                  <div className="field textarea">
                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                  </div>
                  <div className="button-area">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      
    )

}
export default Contact;