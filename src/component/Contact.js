
 function Contact(){
    return( 
        <section className="contact" id="contact">
          <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">

                <div className="contactcard">
                 <div className="row">
                        <div className="info">
                    <div className="icons">   
                     <ul style={{display:"flex", listStyle:"none" }}><li><i className="fa-solid fa-user-large"></i></li>
                      <li>
                        <div className="sub-title"><a style={{textdecoration:" none", color: "#333"}}> Arvind Silswal</a></div>
                     </li></ul>
                      </div>
                    </div>
                  <div className="row">
                     <div className="info">
                      <ul style={{display:"flex",listStyle:"none"}}><li> <i className="fa-solid fa-phone"></i></li>
                      <li> <div className="sub-title"><a href="tel:+917018924210" style={{textdecoration: "none", color:" #333"}}>+91-7018924210</a></div>
               </li></ul>
                  
                          </div>
                  </div>   
            <div className="row">
                     <div className="info">
                      <ul style={{display:"flex" , listStyle:"none"}}>
                        <li> <i className="fa-solid fa-envelope"></i></li>
                      <li><div className="sub-title"><a href="mailto:arvindsilswal009@gmail.com" style={{textdecoration: "none", color:" #333"}}>arvindsilswal009@gmail.com</a></div>
                 </li>
                      </ul>
                   
                   
                         </div>
                  </div>
      </div>
      </div>
      <br/>
      <hr style={{height:"5px" ,backgroundColor:"black"}}/>
      <br/>
      <div style={{textAlign:"center", padding:"30px"}}>
        <h3>Thank You for Visiting My Portfolio!</h3>
        <p>I appreciate your time and interest in exploring my work. If you have any questions, feedback, or would like to connect, please feel free to reach out to me through the contact information provided above. I'm always open to new opportunities and collaborations. Looking forward to hearing from you!</p>
               </div>  
              </div>
             
           </div>
        </section>
      
    )

}
export default Contact;