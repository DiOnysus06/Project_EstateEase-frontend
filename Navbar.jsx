import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>EstateEase</span>
        </a>
        <a href="/">Home</a>
        <Link to="/list">
        <a href="/list">List</a>
        </Link>
       
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <Link to="/profile">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            </Link>
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}  n
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <Link to="/list">
          <a href="/list">List</a>
          </Link>
          <Link to="/profile">
          <a href="/profile">Profile</a>
          </Link>
          <Link to="/login">
          <a href="/login">Signin</a>
          </Link>
          <Link to="/register">
          <a href="/register">Signup</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
