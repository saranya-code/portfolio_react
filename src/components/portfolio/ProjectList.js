import React from "react";

const ProjectList = (props) =>{
     const {portfolio} = props
    return(
        <div className="col-lg-6 col-sm-12 col-md-6 p-2">
            <div className="card h-100">
                <img src={`assets/images/${portfolio.image}`} className="card-img-top" alt="workdayschedular" />
                <div className="card-body">
                    <h5 className="card-title">{portfolio.title}</h5>
                    <p className="card-text">{portfolio.description}</p>
                </div>
                <div className="card-footer">
                    {portfolio.demo && <a href={portfolio.demo} className="card-link">Demo</a>}
                    <a href={portfolio.git} className="card-link">GitHub</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;

 