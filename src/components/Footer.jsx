// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-800 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl py-2 lg:py-3 xl:py-4">
      © {new Date().getFullYear()} Prince Jung Shah. All rights reserved.
    </footer>
  );
};

export default Footer;