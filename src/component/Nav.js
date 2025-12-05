
import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <div className="containernav">
     
     <div className='paragraph'> Arvind's portfolio</div>

<div>
  <ul >
    <li><a className="na" href="#first">Home</a></li>
    <li><a className="na" href="#second">About</a></li>
    <li><a className="na" href="#third">Projects</a></li>
    <li><a className="na" href="#fourth">Contact Me</a></li>
  </ul>
</div>
    </div>
  );
}

export default Nav;