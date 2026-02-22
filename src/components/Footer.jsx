// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-800 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-3 lg:py-4 xl:py-5">
      © {new Date().getFullYear()} Prince Jung Shah. All rights reserved.
    </footer>
  );
};

export default Footer;