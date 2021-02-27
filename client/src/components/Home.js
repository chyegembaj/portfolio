import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Sofware development and Test Automation</h1>

        <Typed
          className="typed-text"
          strings={["Software Development", "Agile Scrum", "Test Automation"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="/contact" className="btn-main-offer">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default Home;
