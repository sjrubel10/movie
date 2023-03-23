import { Outlet, Link } from "react-router-dom";


import siteIcon from '../images/logo.jpeg';
import '../css/topbar.css';

const Layout = () => {
  return (
    <>
      <div className="topbar-container">
        <div className="logo-container">
            <img src={siteIcon} alt="Website Logo" className="site-logo" />
        </div>
        <nav>
            <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">Blogs</Link>
            </li>
            </ul>
        </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;