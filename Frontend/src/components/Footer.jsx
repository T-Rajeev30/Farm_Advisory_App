import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 text-sm">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} Farm AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
