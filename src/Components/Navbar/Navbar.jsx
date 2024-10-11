import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <h2>
          Eat<span>Full</span>
        </h2>
      </div>
      <nav className="nav">
        <ul className={toggleMenu ? "nav-menu active" : "nav-menu"}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div onClick={closeMenu} className="toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
