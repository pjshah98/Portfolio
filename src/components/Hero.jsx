import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen snap-start flex items-center justify-center text-center px-4 py-20 sm:py-24">
      <div className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 rounded-xl px-5 py-8 sm:px-8 sm:py-10 max-w-xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          Hi, I'm Prince Jung Shah
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-5 sm:mb-6">
          I build beautiful and functional web experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="/PrinceUpdatedResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="mailto:princejshah1@gmail.com"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 text-gray-600 hover:text-blue-600 transition touch-manipulation"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce" />
      </a>
    </section>
  );
}