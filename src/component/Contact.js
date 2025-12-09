
 function Contact(){
    return( 
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">

                <div className="contactcard">
                 <div className="row">
                        <div className="info">
                    <div className="icons">   <i className="fa-solid fa-user-large"></i>

                        <div className="sub-title"><a style={{textdecoration:" none", color: "#333"}}> Arvind Silswal</a></div>
                      </div>
                    </div>
                  <div className="row">
                     <div className="info">
                    <i className="fa-solid fa-phone"></i>

                      <div className="sub-title"><a href="tel:+917018924210" style={{textdecoration: "none", color:" #333"}}>+91-7018924210</a></div>
                    </div>
                  </div>   
            <div className="row">
                     <div className="info">
                    <i className="fa-solid fa-envelope"></i>
                   
                      <div className="sub-title"><a href="mailto:arvindsilswal009@gmail.com" style={{textdecoration: "none", color:" #333"}}>arvindsilswal009@gmail.com</a></div>
                    </div>
                  </div>
      </div>
      </div>
               </div>  
              </div>
             
           
        </section>
      
    )

}
export default Contact;