export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-sm shadow-md z-50 border-b border-white/20">
      <div className="max-w-6xl mx-auto text-xl px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold  text-gray-800">Prince</h1>
        <ul className="flex gap-30 text-gray-800 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}