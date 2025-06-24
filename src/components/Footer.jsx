// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-800 lg:text-[0.96rem] text-sm py-3">
      © {new Date().getFullYear()} Prince Jung Shah. All rights reserved.
    </footer>
  );
};

export default Footer;