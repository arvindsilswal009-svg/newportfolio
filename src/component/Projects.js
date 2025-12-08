import react from "react";
 function Projects(){
    return(
         <section className="projects" id="projects">
          <div className="max-width">
            <h1 className="title">My Projects</h1>
            <div className="carousel owl-carousel">
              <div className="card">
                <div className="box">
                  <img src="src\weatherapp.jpg" alt=""/>
                  <div className="  text">Calculator</div>
                  <p>This is a Calculator app for calculating mathematical calculations .
                    technologies used in developing the calculator are html, css, Bootstrap,JavaScript, react.js .
                    </p>
                   <a className="btn" href=" https://arvindsilswal009-svg.github.io/calculator/">Live Link</a>&emsp;&emsp;
                             <a className="btn" href=" https://github.com/arvindsilswal009-svg/calculator">Code Link</a>
                      </div>
              </div>
                <div className="card">
                <div className="box">
                  <img src="" alt=""/>
                  <p>This is a weather app website developed using Html , css , bootstrap ,javascript ,and with library like React .js . we can know teh weather conditions of any city just by searching the city name,it shows current weather condition with the help of weather api</p>
                   <a className="btn" href=" https://arvindsilswal009-svg.github.io/Weatherapp/">Live Link</a>&emsp;&emsp;
                            <a className="btn" href="https://github.com/arvindsilswal009-svg/Weatherapp">Code Link</a>
                     
                </div>
              </div>
              <div className="card">
                <div className="box">
                  <img src="/images/portfolio.jpg" alt=""/>
                  <div className="text">Portfolio</div>
                  <p>Here is my portfolio.</p>
                   <a className="btn" href=" https://arvindsilswal009-svg.github.io/MYportfolio/">Live Link</a>&emsp;&emsp;
                              <a className="btn" href=" https://github.com/arvindsilswal009-svg/MYportfolio">Code Link</a>
                     
                </div>
              </div>

            </div>
          </div>
        </section>
    )
}
export default Projects;