const Header = () => {
    return (
        <div className="nav-side-menu">
            <div className="brand">Brand Logo</div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

            <div className="menu-list">

                <ul id="menu-content" className="menu-content collapse out">
                    <li>
                        <IndexLink to="/" className="fa fa-dashboard fa-lg" activeclassName="active">Home</IndexLink>
                    </li>

                    <li data-toggle="collapse" data-target="#products" className="collapsed" activeclassName="active">
                        <Link to="/stories" activeclassName="active">Stories</Link>
                    </li>
                    <ul className="sub-menu collapse" id="products">
                        <li activeclassName="active"><a href="#">CSS3 Animation</a></li>
                        <li><a href="#">General</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Tabs & Accordions</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">FontAwesome</a></li>
                        <li><a href="#">Slider</a></li>
                        <li><a href="#">Panels</a></li>
                        <li><a href="#">Widgets</a></li>
                        <li><a href="#">Bootstrap Model</a></li>
                    </ul>

                    <li data-toggle="collapse" data-target="#service" className="collapsed">
                        <a href="#"><i className="fa fa-globe fa-lg"></i> Services <span className="arrow"></span></a>
                    </li>
                    <ul className="sub-menu collapse" id="service">
                        <li>New Service 1</li>
                        <li>New Service 2</li>
                        <li>New Service 3</li>
                    </ul>

                    <li>
                        <a href="#">
                            <i className="fa fa-user fa-lg"></i> Profile
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i className="fa fa-users fa-lg"></i> Users
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        
    );
};