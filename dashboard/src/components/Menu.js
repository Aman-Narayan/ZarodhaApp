import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Signoutbtn from "./signoutbtn";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state for mobile menu toggle

  const profileRef = useRef(null);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    // Optionally close mobile menu after clicking a link
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  const handleProfileDropDownClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logic to close the profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <Link to="/" onClick={() => handleMenuClick(0)}>
        <img src="logo.png" className="logo" alt="Logo" />{" "}
        {/* Added alt and class for image sizing */}
      </Link>

      {/* Mobile Menu Toggle Button */}
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>{" "}
        {/* Using Font Awesome classes */}
      </div>

      <div className={`menus ${isMenuOpen ? "menus-mobile-open" : ""}`}>
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr className="d-none d-md-block" /> {/* Hide divider on mobile */}
        <div className="profile-wrapper" ref={profileRef}>
          {" "}
          {/* Wrapper for dropdown logic */}
          <div
            className="profile dropdown"
            onClick={handleProfileDropDownClick}
          >
            <div className="avatar">ZU</div>
            <p className="username">USERID</p>
            <i
              className={`fas ms-1 fa-chevron-${
                isProfileDropDownOpen ? "up" : "down"
              }`}
            ></i>
          </div>
          {/* Profile Dropdown Content */}
          {isProfileDropDownOpen && (
            <div className="dropdown-content">
              <a href="#">USERID</a>
              <a href="https://zarodhalander.vercel.app/">Sign Out</a>
              {/* Signout button placement depends on its implementation */}
              {/* <div className="p-2">
                <Signoutbtn />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
