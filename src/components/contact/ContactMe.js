import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faMobileAlt,faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ContactMe = (props) =>{
    return(
        <>
            
            <section id="contact" className="page-section ng-star-inserted">
                <div className="container">
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary mb-0 mt-5">CONTACT</h2>
                    </div>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <FontAwesomeIcon icon={faStar} /> 
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 my-2 ng-star-inserted">
                            <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3">
                                
                                <FontAwesomeIcon icon={faMobileAlt} />   
                            </div>
                            <div className="text-muted">Phone</div>
                            <div className="lead font-weight-bold">(763) 670-4535</div>
                            </div>
                        </div>
                        <div className="col-lg-4 my-2 ng-star-inserted">
                            <div className="d-flex flex-column align-items-center">
                            <div className="icon-contact mb-3">
                               
                                <FontAwesomeIcon icon={faEnvelope} />   
                            </div>
                            <div className="text-muted">Email</div>
                            <a className="lead font-weight-bold" href="mailto:saranya28dayalan@gmail.com"> saranyadayalan28@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
};

export default ContactMe;
