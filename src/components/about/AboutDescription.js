
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutDescription = (props) =>{
    return(
         <section className="page-section bg-primary text-white mb-0 mt-5" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col-lg-4 ml-auto"><p className="lead">Hi I am Saranya Dayalan,currently I am located in Minnesota. I completed my graduation in 2010 , and I am doing full stack development course in University of Minnesota. </p></div>
                    <div className="col-lg-4 mr-auto"><p className="lead"> I have some testing knowledge experience. I would like to learn new technologies and implementing in projects. I am good team player with analytical and problem solving skills.</p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download mr-2"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutDescription;
// Hi I am Saranya Dayalan,currently I am located in Minnesota. I completed my graduation in 2010 , and I am doing full stack development course in University of Minnesota. 
//                     I have some testing knowledge experience. I would like to learn new technologies and implementing in projects. I am good team player with analytical and problem solving skills.
//                     Abiliity to learn quickly and proven to deliver against time effectively. I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. 
//                     I am looking for career opportunities.