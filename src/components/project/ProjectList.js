
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectList = (props) =>{
    return(
        <div className="col-lg-6 col-sm-12 col-md-6 p-2">
            <div className="card h-100">
                <img src="assets/image/DemoURL.gif" className="card-img-top" alt="workdayschedular" />
                <div className="card-body">
                    <h5 className="card-title">Workday Scheduler</h5>
                    <p className="card-text">A simple calendar application that allows a user to save events for each hour of the day. It runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                </div>
                <div className="card-footer">
                    <a href="https://saranya-code.github.io/Work_Day_Scheduler/" className="card-link">Demo</a>
                    <a href="https://github.com/saranya-code/Work_Day_Scheduler" className="card-link">GitHub</a>
                </div>
            </div>
        </div>
        
    );
};

export default ProjectList;