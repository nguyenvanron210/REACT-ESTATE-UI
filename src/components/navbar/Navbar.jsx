import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <image src="/logo.png" alt="" />
          <span>The Lilywhites</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span>Van Ron</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
