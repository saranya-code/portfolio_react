import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from "../Header";
import Footer from "../Footer";
import AboutDescription from "./AboutDescription";

const About = (props) =>{
    return(
        <div>
            <Header />
            <AboutDescription />
            <Footer />
        
        </div>
    );
};

export default About;