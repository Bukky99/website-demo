import React from 'react';
import {Link} from 'react-router-dom';

function Header({title, subtitle, showButton, buttonText, link}){
    return (
        <header className="masthead">  
            <div className="container">
                <div className="masthead-subheading">{title}</div>
                <div className="masthead-heading text-uppercase">{subtitle}</div>
                {showButton &&
                    <Link className="btn btn-primary btn-xl text-uppercase" to={link}>{buttonText}</Link>
                }
            </div>
        </header>
    )
}
export default Header;