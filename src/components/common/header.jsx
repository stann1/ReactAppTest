import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        /*<nav>
            <IndexLink to="/" activeclassName="active">Home</IndexLink>
            {" | "}
            <Link to="/stories" activeclassName="active">Stories</Link>
        </nav>*/
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
                    <li><Link to="/users" activeClassName="active">Users</Link></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><Link to="/comments">Comments</Link></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Header;