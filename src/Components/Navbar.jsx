import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top d-flex" id="mainNavbar">
      <div className="container-fluid">
        <div className="logo">
          <NavLink className="navbar-brand ms-2 d-flex" to="/">
            <img
              src="mds_logo_hd.png"
              alt="Logo"
              style={{ height: "80px", width: "80px" }}
            />
            <p style={{ marginTop: "20px", lineHeight: 0.8, fontWeight: "bold", color: "#333" }}>
              <span style={{ fontSize: "large", letterSpacing: "1.5px" }}>MANCHITRA</span><br />
              <span style={{ fontSize: "small", letterSpacing: "1px", marginLeft: "5px" }}>DESIGN STUDIO</span>
            </p>
          </NavLink>
          <ThemeToggle />
        </div>

        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-lg-center pb-2">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && windowWidth > 768 ? "nav-link active mx-1" : "nav-link mx-1"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive && windowWidth > 768 ? "nav-link active mx-1" : "nav-link mx-1"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  isActive && windowWidth > 768 ? "nav-link active mx-1" : "nav-link mx-1"
                }
              >
                Our Services
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  (isActive || window.location.hash.includes("/Projects")) && windowWidth > 768
                    ? "nav-link dropdown-toggle active mx-1"
                    : "nav-link dropdown-toggle mx-1"
                }
                role="button"
                data-bs-toggle="dropdown"
              >
                Projects
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/Projects/Residential">
                    Residential
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Projects/Commercial">
                    Commercial
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-1 me-2">
              <NavLink className="btn btn-contact" to="/ContactUs">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
