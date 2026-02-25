import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen snap-start flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 rounded-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-12 xl:py-12 max-w-xl lg:max-w-2xl xl:max-w-3xl w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
          Hi, I'm Prince Jung Shah
        </h1>
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 mb-4 sm:mb-5 lg:mb-6">
          I build beautiful and functional web experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4">
          <a
            href="/PrinceResume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[40px] inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-3 text-sm lg:text-base xl:text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="mailto:princejshah1@gmail.com"
            className="w-full sm:w-auto min-h-[40px] inline-flex items-center justify-center px-5 py-2.5 lg:px-6 lg:py-3 xl:px-8 xl:py-3 text-sm lg:text-base xl:text-lg bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-3 sm:bottom-5 lg:bottom-6 xl:bottom-8 text-gray-600 hover:text-blue-600 transition touch-manipulation"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-12 xl:h-12 animate-bounce" />
      </a>
    </section>
  );
}