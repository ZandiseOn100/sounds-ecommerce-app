import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <span className="color-span">S</span>ounds{" "}
          <span className="color-span">E</span>commerce
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links Menu */}
      <div className={`links ${isOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/cart" onClick={() => setIsOpen(false)}>Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
