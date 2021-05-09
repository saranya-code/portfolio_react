import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) =>{
    return(
        <main class="row mt-5 mb-5 ml-3 mr-3" id="contactMe">
            <div class="detail-header col-lg-2 col-md-4 col-sm-12 "> Contact Me  </div>
                <div class="detail col-lg-10 col-md-8 col-sm-12">
                    <div class="row">
                        <div class="col-lg-4"><a href="mailto:saranya28dayalan@gmail.com" > <i class="fas fa-envelope-open"></i>  saranyadayalan28@gmail.com </a></div>
                        <div class="col-lg-4"><i class="fas fa-mobile-alt"></i>  763-670-4535</div>
                        <div class="col-lg-4"><i class="fas fa-map-marker-alt"></i>  4000 Parklawn Ave, Edina</div>
                        <div class="col-lg-4" id="resume"> <a href="https://docs.google.com/document/d/1iTXkBHDMUbAZORL74VQvgxjeg9w0U9lKUHB2kYV2uOg/edit"><i class="far fa-file-pdf"></i>  Resume </a></div>
                        <div class="col-lg-4"><a href="https://github.com/saranya-code" > <i class="fab fa-github"></i>  GitHub </a> </div>
                        <div class="col-lg-4"><a href="https://www.linkedin.com/in/saranya-dayalan-27822020a/"> <i class="fab fa-linkedin"></i>  LinkedIn </a></div>
                 </div>
           </div>
        </main>


    );
};

export default Footer;