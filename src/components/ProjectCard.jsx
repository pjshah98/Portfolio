import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, livelink, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    setIsTouchDevice(mq.matches);
    const handler = () => setIsTouchDevice(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const showImage = isHovered || isRevealed;

  const handleImageZoneClick = () => {
    if (isTouchDevice) setIsRevealed((r) => !r);
  };

  return (
    <div
      className="bg-white/10 backdrop-blur-xl overflow-hidden rounded-xl shadow-lg border border-white/20 min-w-0 flex flex-col transition-transform duration-300 ease-out hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image reveal zone: fixed height to prevent layout shift */}
      {image && (
        <div
          className="relative w-full h-44 sm:h-52 lg:h-64 xl:h-72 shrink-0 overflow-hidden rounded-t-xl bg-white/5 cursor-default select-none"
          style={{ minHeight: '11rem' }}
          onClick={handleImageZoneClick}
          onKeyDown={(e) => {
            if (isTouchDevice && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              setIsRevealed((r) => !r);
            }
          }}
          role={isTouchDevice ? 'button' : undefined}
          tabIndex={isTouchDevice ? 0 : undefined}
          aria-label={isTouchDevice ? (showImage ? 'Hide project image' : 'Show project image') : undefined}
        >
          <img
            src={image}
            alt={`${title} project screenshot`}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              showImage
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-[0.97] translate-y-2'
            }`}
            draggable={false}
            loading="lazy"
          />
          {isTouchDevice && !showImage && (
            <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm text-white/60 pointer-events-none">
              Tap to preview
            </span>
          )}
        </div>
      )}

      <div className="p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold break-words">
            {title}
          </h3>
          <div className="flex gap-2 sm:gap-3 text-base sm:text-lg xl:text-xl shrink-0">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <FaGithub />
              </a>
            )}
            {livelink && (
              <a
                href={livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
        <div className="mt-2 sm:mt-3 lg:mt-4 flex flex-wrap gap-1.5 sm:gap-2 xl:gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 px-1.5 py-1 sm:px-2 sm:py-1.5 xl:px-2.5 xl:py-1.5 2xl:px-3 2xl:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm lg:text-sm text-gray-800 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
