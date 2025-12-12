import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/arvind-cv.pdf";
    link.download = "arvind-cv.pdf";
    link.click();
  };

  const handleMenuClick = () => {
    setMenuOpen(false); // closes menu when selecting a link
  };

  return (
    <nav className="navbar">
      <div className="max-width">

        {/* Logo */}
        <div className="logo">
          <a href="#"><span>Arvind's</span> <span>Portfolio</span></a>
        </div>

        {/* MENU LIST */}
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li><a onClick={handleMenuClick} href="#home"><strong>Home</strong></a></li>
          <li><a onClick={handleMenuClick} href="#about"><strong>About</strong></a></li>
          <li><a onClick={handleMenuClick} href="#education"><strong>Education</strong></a></li>
          <li><a onClick={handleMenuClick} href="#skills"><strong>Skills</strong></a></li>
          <li><a onClick={handleMenuClick} href="#projects"><strong>Projects</strong></a></li>
          <li><a onClick={handleMenuClick} href="#contact"><strong>Contact</strong></a></li>

          <li>
            <a className="btn" onClick={() => { handleDownload(); handleMenuClick(); }} style={{ backgroundColor: "lightgreen" }}>
              Download CV
            </a>
          </li>

          <li><a onClick={handleMenuClick} href="https://github.com/arvindsilswal009-svg">
            <i className="fa-brands fa-github fa-2x"></i>
          </a></li>

          <li><a onClick={handleMenuClick} href="https://www.linkedin.com/in/arvind-silswal-76b8b436a">
            <i className="fa-brands fa-linkedin-in fa-2x"></i>
          </a></li>
        </ul>

        {/* HAMBURGER ICON */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
