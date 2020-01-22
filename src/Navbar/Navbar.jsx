import React from "react";
import ScrollTo from "react-scroll-into-view";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <ScrollTo selector={`#card${"home"}`}>
          <h4>WILL MITCHELL</h4>
        </ScrollTo>
      </div>
      <ul class="nav-links">
        <li>
          <ScrollTo selector={`#card${"about"}`}>
            <p>ABOUT</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"skills"}`}>
            <p>SKILLS</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"projects"}`}>
            <p>PROJECTS</p>
          </ScrollTo>
        </li>
        <li>
          <ScrollTo selector={`#card${"contact"}`}>
            <p>CONTACT</p>
          </ScrollTo>
        </li>
      </ul>
      {/* <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div> */}
    </nav>
  );
};

export default Navbar;
