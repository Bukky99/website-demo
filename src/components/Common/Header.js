import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">{this.props.title}</div>
                <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
                <Link className="btn btn-primary btn-xl text-uppercase" to={this.props.link}>{this.props.buttonText}</Link>
            </div>
        </header>
    )
}
export default Header;