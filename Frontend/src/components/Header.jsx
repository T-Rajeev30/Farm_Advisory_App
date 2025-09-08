import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn, onLogout, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = "py-2 px-4 rounded-full transition-colors font-semibold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-green-700/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
        <a href="#hero" className="text-2xl font-bold">
          Farm AI
        </a>
        <nav className="flex items-center space-x-4">
          <a
            href="#features"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="hover:text-green-300 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#why-it-matters"
            className="hover:text-green-300 transition-colors duration-200"
          >
            Why It Matters
          </a>
          {isLoggedIn ? (
            <button
              onClick={onLogout}
              className="py-2 px-4 rounded-full text-white bg-red-500 hover:bg-red-600 transition-colors font-semibold shadow-md"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => onNavigate("auth")}
              className="py-2 px-4 rounded-full text-white bg-green-500 hover:bg-green-600 transition-colors font-semibold shadow-md"
            >
              Log In
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
