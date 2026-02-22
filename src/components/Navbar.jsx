import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/20 backdrop-blur-sm shadow-lg z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-row justify-between items-center text-base lg:text-xl">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">Prince J.</h1>

        {/* Desktop: visible from md up; hidden on small screens */}
        <ul className="navbar-desktop-links flex max-md:hidden flex-shrink-0 flex-wrap gap-4 md:gap-8 lg:gap-10 text-gray-800 font-medium items-center">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-blue-600 transition-colors">{label}</a>
            </li>
          ))}
        </ul>

        {/* Small screens only: hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-gray-800 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Small screens only: dropdown when hamburger is open */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/30 backdrop-blur-sm">
          <ul className="flex flex-col gap-1 px-4 py-3 text-gray-800 font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="block py-3 px-2 hover:text-blue-600 rounded-lg hover:bg-white/30" onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
