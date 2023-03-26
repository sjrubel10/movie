import { Link, Outlet } from "react-router-dom";


import '../css/topbar.css';
import siteIcon from '../images/logo.jpeg';

const Layout = () => {
  return (
    <>
      <div className="topbar-container">
        <div className="logo-container">
        <Link to="/"><img src={siteIcon} alt="Website Logo" className="site-logo" /></Link>
        </div>
        <nav>
            <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/lists">Blogs</Link>
            </li>
            <li>
                <Link to="/signup">Sing Up</Link>
            </li>
            
            <li>
                <Link to="/page">Test Pagination</Link>
            </li>
            </ul>
        </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;