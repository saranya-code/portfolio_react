import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutDescription = (props) => {
  return (
    <section
      className="page-section bg-primary text-white mb-0 mt-5"
      id="about"
    >
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <div className="text-center">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>
        </div>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- About Section Content--> */}
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Hello, I am Saranya Dayalan,located in Minneapolis completed my
              graduation in Master's and I am doing full stack development
              course in University of Minnesota.{" "}
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              {" "}
              Trained full-stack JavaScript developer with experience using
              React, Node & Express, and NoSQL to build web apps. Passionate
              about all things UX/UI and front-end. Background in QA testing
            </p>
          </div>
        </div>
        {/* <!-- About Section Button--> */}
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://drive.google.com/drive/folders/1bMqMfF1ZZzZ6C1hIPXYNrwwxJF8vnXb9"
          >
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
