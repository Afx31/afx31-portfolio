import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  // const test = document.querySelector(".nav-links li");
  // test.addEventListener('click', () => {
  //   // Upon clicking Nav Link
  //   // Collapse menu
  //   nav.classList.toggle('nav-active');
  //   // Burger Animation
  //   burger.classList.toggle("toggle");
  // });

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

function App() {
  useEffect(() => {
    navSlide();
  });

  return (
    <div class="app-container">
      <Navbar cards={5} />
      <Home card="home" />
      <About card="about" />
      <Skills card="skills" />
      <Projects card="projects" />
      <Contact card="contact" />
      <Footer />
    </div>
  );
}

export default App;
