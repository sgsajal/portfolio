import React from 'react';
import './AboutMe.css'; // Create or im

const AboutMe = () => {
  return (
    <section id="about-me" className="section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <div className="about-me-image">
            <img src={"haha"} alt="Saksham" />
          </div>
        <div className="about-me-content">
          <div className="about-me-text">
            <p>
              Hello! I'm Saksham, a passionate Web Developer with a strong
              interest in frontend Development. I have no experience in the
              field and a deep love for react.
            </p>
            <p>
            Feel free to explore my portfolio to see some of the projects I've
              worked on. If you'd like to connect or collaborate, please don't
              hesitate to Contact me.
              I'm constantly seeking new challenges and opportunities to expand my knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
