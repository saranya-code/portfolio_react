import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Header from "../Header";
import Footer from "../Footer";
import img from "../../assets/images/avataaars.svg"


const Home = (props) =>{
    return(
        <div>
            <Header />
            <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img className="masthead-avatar mb-5" src={img} alt="Profile" />
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Saranya Dayalan</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Full stack web developer</p>
            </div>
        </header>
            <Footer />
        
        </div>
    );
};

export default Home;