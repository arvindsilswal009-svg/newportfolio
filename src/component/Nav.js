import { useEffect } from "react";
import { useRef } from "react";
function Nav(){
     const handleDownload = () => {
            const link = document.createElement("a");
            link.href = "/arvind-cv.pdf";
            link.download = "arvind-cv.pdf";
            link.click();
        };
      const menuRef = useRef(null);
const hamburgerRef = useRef(null);

useEffect(() => {
  const menu = menuRef.current;
  const hamburger = hamburgerRef.current;

  const toggleMenu = () => {
    menu.classList.toggle("active");
  };

  hamburger.addEventListener("click", toggleMenu);

  return () => {
    hamburger.removeEventListener("click", toggleMenu);
  };
}, []);

    return(
         
        <nav className="navbar">
          <div className="max-width">
            <div className="logo"><a href="#"><span>Arvind's</span><span> Portfolio</span></a></div>
            <ul className="menu" ref={menuRef}>
              <li><a href="#home" className="menu-btn"><strong>Home</strong></a></li>
              <li><a href="#about" className="menu-btn"><strong>About</strong></a></li>
               <li><a href="#education" className="menu-btn"><strong>Education</strong></a></li>
              <li><a href="#skills" className="menu-btn"><strong>Skills</strong></a></li>
              <li><a href="#projects" className="menu-btn"><strong>Projects</strong></a></li>
              <li><a href="#contact" className="menu-btn"><strong>Contact</strong></a></li>
           <li> <a  className="btn" onClick={handleDownload} style={{backgroundColor:"lightgreen"}} >Downlode CV</a>  </li>
            </ul>
           <div className="hamburger" ref={hamburgerRef} id="hamburger">
          <i className="fas fa-bars"></i>
            </div>
          </div>
        </nav>
    )
}
export default Nav;