import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = (props) =>{
    return(
        <>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Address</h4>
                        <p className="lead mb-0">
                            4000 Parklawn Ave
                            <br />
                            Edina, MN 55435
                        </p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="mailto:saranya28dayalan@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /> </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/saranya-code"> <FontAwesomeIcon icon={faGithub} /> </a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/saranya-dayalan-27822020a/"> <FontAwesomeIcon icon={faLinkedin} /> </a>
                        
                    </div>
                </div>
            </div>
        </footer>
        <div className="copyright py-4 text-center text-white">
            <div className="container">
                <small>
                    Copyright &copy; Saranya Dayalan Portfolio
                    {/* <!-- This script automatically adds the current year to your website footer-->
                    <!-- (credit: https://updateyourfooter.com/)--> */}
                    <script>
                        document.write(new Date().getFullYear());
                    </script>
                </small>
            </div>
        </div>
        </>
    );
};

export default Footer;