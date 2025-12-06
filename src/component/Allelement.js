
import Nav from "./Nav";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "react-circular-progressbar/dist/styles.css";
function Allelement() {
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

            <div className="container">
                <Nav />
                <div id="first" className="first">
                    <div className="left"> <p className="smalltext">Hi I am </p> <b>Arvind Silswal </b> <br />

                        <span ref={el}></span>
                        <br /><br />
                        <p className="smalltext">You can download my resume from here :</p>
                        <button className="resume" onClick={handleDownload}>Download Resume</button>

                        <center>
                            <ul >
                                <li><a className="lo" href="http://linkedin.com/in/arvind-silswal-76b8b436a"><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a className="lo" href="https://github.com/arvindsilswal009-svg"><i class="fa-brands fa-github"></i></a></li>

                            </ul>
                        </center>
                    </div>
                    <div className="right">
                        <img className="logo" src="first.png" alt=""></img>
                    </div>

                </div>
                <hr className="hr" />
                 <center><h1>About me</h1></center>
                <div className="second">
                   
                    <br/>
                    <p style={{ width: "1000px" }}>
                        I’m a passionate frontend developer who loves creating modern and responsive websites.
                        Currently, I’m improving my skills in React.js, JavaScript, and UI design.
                        I enjoy building projects, learning new technologies, and solving real-world problems.
                        <br /><br />

                        I am looking for an internship or entry-level frontend developer role where I can grow and contribute to real projects.
                    </p>
                </div>
                <hr className="hr" />
                <center><h1>Education</h1></center>
                <div className="third">

                    <div className="left1">
                        <h4> School Education</h4>
                        <br />
                        <div className="educationcard" >

                           <i class="fa-solid fa-book"></i> &emsp; 10th - S.M.V. Sr. Sec. Public School <br/>&emsp;&emsp; &emsp;&emsp;&emsp; Jakhera(HP) <br />
                         <i class="fa-sharp-duotone fa-solid fa-marker"></i>&emsp;  61.5%  <br />
                          <i class="fa-regular fa-calendar"></i>&emsp;  ( 2018-19 )
                        </div>
                        <br />
                        <div className="educationcard" >

                         <i class="fa-solid fa-book"></i>  &emsp; 12th -  S.M.V. Sr. Sec. Public School <br/>&emsp;&emsp;&emsp;&emsp;&emsp; Jakhera(HP) <br />
                          <i class="fa-sharp-duotone fa-solid fa-marker"></i>&emsp; 84.5%  <br />
                         <i class="fa-regular fa-calendar"></i>  &emsp; ( 2020-21 )
                        </div>
                    </div>
                    <div className="right1">
                        <h4>college Education</h4><br /><br />
                        <div className="educationcard1" >

                         <i class="fa-solid fa-graduation-cap"></i>   Bachelor of Computer Applications (BCA)<br />
                          <i class="fa-solid fa-building-columns"></i> &emsp;&emsp; Himachal Pradesh University (HPU)<br />
                          <i class="fa-regular fa-calendar"></i>&emsp;&emsp;(2021–2024)<br />
                          <i class="fa-sharp-duotone fa-solid fa-marker"></i> &emsp;&emsp; CGPA: 7.37
                        </div>

                    </div>

                </div>





                <hr className="hr" />
                <center><h1 style={{ color: "white" }}>Skills</h1></center>
                <div className="fourth">

                    <br />

                    <div className="left1" >
<h5>Front End Developement :</h5>  <br/><br/>
<div className="cards">
    <div>
                 
<a className="incards"><i class="fa-brands fa-html5 fa-1.2x"></i> HTML</a>   <br/><br/>
<a className="incards"><i class="fa-brands fa-css3"></i> CSS</a>   <br/>        <br/>
<a className="incards"><i class="fa-brands fa-bootstrap"> </i> Bootstrap</a> <br/>  <br/>
<a className="incards"><i class="fa-brands fa-js"></i>  javascript</a>         <br/><br/>
</div>
<div style={{marginLeft:"52%" ,marginTop:"-71%"}}>
    
<a className="incards"><i class="fa-brands fa-react"></i> React.js</a>        <br/><br/>
<a className="incards"><i class="fa-brands fa-node-js"></i> Node.js</a>       <br/><br/>
<a  className="incards"><i class="fa-solid fa-code "></i>  MySql</a>    


</div>
</div>
                    </div>

                    <div className="right1">
                        <h5>Tools and Platform :</h5>
                        <br/><br/>
                        <div className="cards">
<a className="incards1"><i class="fa-brands fa-git-alt fa-2x">git</i></a> <br/><br/>
<a className="incards1"><i class="fa-brands fa-github fa-2x">github</i></a><br/><br/>
<a className="incards1"><label style={{fontSize:"30px"}}>vs code</label></a>
</div>
                    </div>

                </div>
<br/>
                <hr className="hr" />
                <center><h1 style={{ color: "white" }}>My projects</h1></center>
                <div id="third" className="third">

                    <div className="project" >
                        <img className="projects" src="" alt=""/>
                        <br /><br />
                        <label>Project Name : calculator</label><br /><br />
                        <p>This is a calculator app . created by using HTML , CSS , javascript and react.js .<br /> we can perrform multiple mathmatical operations in it.</p>
                        <center>Visit the Calculator app :</center>
                        <center>
                            <a className="btn" href=" https://arvindsilswal009-svg.github.io/calculator/">Live Link</a>
                        </center>  </div>

                    <div className="project" >
                        <img className="projects" src="" alt="" /><br /><br />
                        <label>Project Name : Weatherapp</label><br /><br />
                        <p>This is a Weather app . created by using HTML , CSS , javascript and react.js .<br /> we can search and get live weather details of any city </p>
                        <center>Visit the Weatherapp :</center>
                        <center>
                            <a className="btn" href=" https://arvindsilswal009-svg.github.io/Weatherapp/" >Live Link</a>
                        </center>
                    </div>

                    <div className="project" >
                        <img className="projects" src="" alt="" /><br /><br />
                        <label>Project Name : My Portfolio</label><br /><br />
                        <p>This is a calculator app . created by using HTML , CSS , javascript and react.js .<br /> we can perrform multiple mathmatical operations in it.</p>
                        <center>Visit my Portfolio :</center>
                        <center>
                            <button className="btn">Live Link</button>
                        </center> </div>
                </div>
<hr className="hr" />
                <div style={{justifyContent:"center", height: "280px", border: "1px solid white",width: "40%",
                  padding: "10px", borderRadius: "10px", boxShadow: "0px 10px 8px 0px black",marginLeft:"35%" }}>
                    <center><h3 style={{ color: "white" }}>contact me</h3></center>
                    <label><i class="fa-solid fa-phone"></i> Phone No.</label>
                    <a href="tel:+917018924210">+91-7018924210</a>
                    <br/><br/>
                     <label><i class="fa-solid fa-envelope"></i> Email :</label>
                    <a href="mailto:arvindsilswal009@gmail.com">arvindsilswal009@gmail.com</a>
<br/><br/>
 <label><i class="fa-brands fa-linkedin"></i> Linkedin :</label>
                    <a href="https://www.linkedin.com/in/arvind-silswal-76b8b436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ">https://www.linkedin.com/in/arvind-silswal</a>
<br/><br/>
 <label><i class="fa-brands fa-github"></i> github :</label>
                    <a href="https://github.com/arvindsilswal009-svg">https://github.com/arvindsilswal009-svg</a>
                </div>


            </div>
        </>
    )
}
export default Allelement;