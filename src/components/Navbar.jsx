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
    <nav className="fixed top-0 left-0 right-0 w-full bg-white/20 backdrop-blur-sm shadow-lg z-50 border-b border-white/20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-row justify-between items-center">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 shrink-0">
          Prince
        </h1>

        {/* Desktop nav */}
        <ul className="hidden lg:flex flex-row gap-8 xl:gap-10 text-gray-800 font-medium text-base lg:text-lg">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:text-blue-600 transition">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="lg:hidden p-2 -mr-2 text-gray-800 hover:text-blue-600 transition touch-manipulation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/20 bg-white/30 backdrop-blur-sm">
          <ul className="flex flex-col gap-1 px-4 py-3 text-gray-800 font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-3 px-2 rounded-lg hover:bg-white/30 hover:text-blue-600 transition"
                  onClick={closeMenu}
                >
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
