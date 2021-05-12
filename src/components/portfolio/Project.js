
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ProjectList from "./ProjectList"
import Seeds from "../../data/seed.json"

const Project = (props) =>{
    return(
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 mt-5">Portfolio</h2>
                </div>
                {/* <!-- Icon Divider--> */}

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FontAwesomeIcon icon={faStar} /></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                  
                  {Seeds.map(seed => 
                    <ProjectList portfolio={seed}/>)
                    }
                </div>
            </div>
        </section>
        
    );
};

export default Project;