import { FiArrowDown } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen snap-start flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 sm:py-24 lg:py-28 xl:py-32 2xl:py-36">
      <div className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 rounded-xl px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-16 xl:py-14 2xl:px-20 2xl:py-16 max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-5">
          Hi, I'm Prince Jung Shah
        </h1>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 mb-5 sm:mb-6 lg:mb-8">
          I build beautiful and functional web experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          <a
            href="/PrinceUpdatedResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-4 text-base lg:text-lg xl:text-xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View Resume
          </a>
          <a
            href="mailto:princejshah1@gmail.com"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-4 text-base lg:text-lg xl:text-xl bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 xl:bottom-10 text-gray-600 hover:text-blue-600 transition touch-manipulation"
        aria-label="Scroll to about"
      >
        <FiArrowDown className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 animate-bounce" />
      </a>
    </section>
  );
}