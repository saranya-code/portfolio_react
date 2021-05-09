import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) =>{
    return(<header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Saranya Dayalan</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              
                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                  <ul class="navbar-nav mt-2 mt-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link" href="#aboutUs">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  href="#portFolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="https://docs.google.com/document/d/1iTXkBHDMUbAZORL74VQvgxjeg9w0U9lKUHB2kYV2uOg/edit">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contactMe">Contact Me</a>
                        </li>
                  </ul>
                </div>
              </nav>
        </header>
    );
};

export default Header;