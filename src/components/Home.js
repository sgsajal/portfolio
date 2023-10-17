import React from 'react';
import './Home.css';
import ProjectCarousel from './ProjectCarousel'
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="profile-image">
          <img src={"something"} alt="Saksham" />
        </div>
        <div className="intro">
          <h1>Hello, I'm Saksham Tiwari</h1>
          <p>Web Developer | Designer</p>
          <p>
            Welcome to my portfolio. I create web applications with a passion for clean, elegant, and user-friendly design.
          </p>
          <p>
            Explore my work, and feel free to get in touch.
          </p>
        </div>
      </div>
      <ProjectCarousel></ProjectCarousel>
      {/* <AboutMe></AboutMe> */}
      <Contact></Contact>
    </div>
  );
};

export default Home;
