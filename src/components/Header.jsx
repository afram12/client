import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import API from '../services/api';

function Header() {


  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); //ye context se lelo 

  const handleLogout = async () => {
    await API.get("/logout", { withCresentials: true });
    localStorage.removeItem("user");
    navigate("/login");
  };


  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bd-primary fixed-top shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">Projectcourse</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/courses">Courses</Link>
              </li>
              {user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/mybooking">My Booking</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/profile">Profile</Link>
                  </li>
                </>
              )}
            </ul>

            <div className="d-flex align-items-center">
              {user ? (
                <>
                  <span className="text-white me-3 d-flex align-items-center">
                    <FaUserCircle size={22} className="me-1" />
                    Hi, {user.name}
                  </span>
                  <button
                    className="btn btn-light text-primary fw-bold"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                  <Link to="/register" className="btn btn-light text-primary fw-bold">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Header;