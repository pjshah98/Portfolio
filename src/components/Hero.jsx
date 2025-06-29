import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen snap-start flex items-center justify-center text-center px-4">
      <div className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 rounded-xl px-8 py-10 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm Prince Jung Shah
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 mb-6">
          I build beautiful and functional web experiences.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="mailto:princejshah1@gmail.com"
            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className=" absolute bottom-6 text-gray-600 hover:text-blue-600 transition"
      >
        <FiArrowDown className="w-12 h-12 animate-bounce" />
      </a>

    </section>
  );
}