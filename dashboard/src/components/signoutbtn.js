import React, { useState, useEffect, useRef } from "react";
// import "./SignOutDropdown.css";

export default function Signoutbtn() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  const signOut = () => {
    alert("Signing out..."); // replace with your signout logic
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={menuRef}>
      <button onClick={toggleMenu} className="dropbtn">
        ▼
      </button>
      {open && (
        <div className="dropdown-content">
          <a href="#">USERID</a>
          <a href="#" onClick={signOut}>
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}
