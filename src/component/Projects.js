import react from "react";
 function Projects(){
    return(
         <section class="projects" id="projects">
          <div class="max-width">
            <h1 class="title">My Projects</h1>
            <div class="carousel owl-carousel">
              <div class="card">
                <div class="box">
                  <img src="" alt=""/>
                  <div class="  text">Calculator</div>
                  <p>This is a Calculator app for calculating mathematical calculations .
                    technologies used in developing the calculator are html, css, Bootstrap,JavaScript, react.js .
                    </p>
                   <a className="btn" href=" https://arvindsilswal009-svg.github.io/calculator/">Live Link</a>&emsp;&emsp;
                             <a className="btn" href=" https://github.com/arvindsilswal009-svg/calculator">Code Link</a>
                      </div>
              </div>
                <div class="card">
                <div class="box">
                  <img src="weatherapp.jpg" alt="weatherapp.jpg"/>
                  <div class="text">Weather App</div>
                  <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                   <a className="btn" href=" https://arvindsilswal009-svg.github.io/Weatherapp/">Live Link</a>&emsp;&emsp;
                            <a className="btn" href="https://github.com/arvindsilswal009-svg/Weatherapp">Code Link</a>
                     
                </div>
              </div>
              <div class="card">
                <div class="box">
                  <img src="/public/portfolio.jpg" alt=""/>
                  <div class="text">Portfolio</div>
                  <p>#Project Details:- Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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