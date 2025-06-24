export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-sm shadow-lg z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center text-base lg:text-xl">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2 lg:mb-0">Prince</h1>
        <ul className="flex flex-wrap gap-4 lg:gap-10 text-gray-800 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}