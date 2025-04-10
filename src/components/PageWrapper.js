import React from 'react';
import {Link} from 'react-router-dom';

function PageWrapper({children}) {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src="assets/img/navbar-logo.svg" alt="..." /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/team">Team</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* the keyword 'children' wrapped in curly brackets
            gives the parent access to any content inside the opening and closing tags of parent
            e.g. any conent in the Home component,.
            children needs to be passed into parent function */}
            {children} 
        </div>
    )
};

export default PageWrapper;