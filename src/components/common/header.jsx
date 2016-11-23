import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        /*<nav>
            <IndexLink to="/" activeclassName="active">Home</IndexLink>
            {" | "}
            <Link to="/stories" activeclassName="active">Stories</Link>
        </nav>*/
        <div className="col-sm-3 col-lg-2">
            <nav className="navbar navbar-default navbar-fixed-side">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <IndexLink to="/" className="navbar-brand" activeClassName="active">SiteTitle</IndexLink>
                    </div>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/stories" activeClassName="active">Stories</Link></li>
                    </ul>
                </div>
                
            </nav>
        </div>
    );
};

export default Header;