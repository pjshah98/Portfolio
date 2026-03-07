import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const DURATION_MS = 850;
const HOVER_DELAY_MS = 350; // delay before morph starts on hover (no delay when leaving)

const ProjectCard = ({ title, description, techStack, githubLink, livelink, image, eagerLoadImage = false }) => {
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

  const showImage = image && (isHovered || isRevealed);

  // Primary link: live demo when it's a real deployment, otherwise repo
  const primaryLink = (livelink && livelink !== githubLink) ? livelink : (githubLink || livelink);

  const handleCardClick = (e) => {
    if (isTouchDevice && image) {
      e.preventDefault();
      setIsRevealed((r) => !r);
    } else if (primaryLink && !e.target.closest('a')) {
      e.preventDefault();
      window.open(primaryLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCardKeyDown = (e) => {
    if (isTouchDevice && image && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsRevealed((r) => !r);
    } else if (primaryLink && (e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) {
      e.preventDefault();
      window.open(primaryLink, '_blank', 'noopener,noreferrer');
    }
  };

  const isActive = isHovered || isRevealed;

  const delay = showImage ? HOVER_DELAY_MS : 0;
  const transition = `transform ${DURATION_MS}ms ${EASE} ${delay}ms, opacity ${DURATION_MS}ms ${EASE} ${delay}ms, filter ${DURATION_MS}ms ${EASE} ${delay}ms`;

  return (
    <div className="min-w-0 h-[20rem] sm:h-[22rem] lg:h-[24rem] xl:h-[26rem]">
      <div
        className="relative w-full h-full cursor-pointer overflow-hidden rounded-xl"
        style={{
          transform: isActive ? 'scale(1.02)' : 'scale(1)',
          boxShadow: isActive
            ? '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)'
            : '0 10px 15px -3px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.1)',
          transition: 'transform 0.35s ease-out, box-shadow 0.4s ease-out',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        onKeyDown={handleCardKeyDown}
        role={primaryLink ? 'link' : isTouchDevice && image ? 'button' : undefined}
        tabIndex={primaryLink || (isTouchDevice && image) ? 0 : undefined}
        aria-label={primaryLink ? `View ${title}` : isTouchDevice && image ? (showImage ? 'Show project details' : 'Show project image') : undefined}
      >
        {/* Layer 2: Image — fades in + scales from 1.05 → 1 */}
        {image && (
          <div
            className="absolute inset-0 rounded-xl overflow-hidden bg-white/5"
            style={{ zIndex: 0 }}
          >
            <img
              src={image}
              alt={`${title} project screenshot`}
              className="w-full h-full object-cover object-top"
              draggable={false}
              loading={eagerLoadImage ? "eager" : "lazy"}
              decoding="async"
              style={{
                transform: showImage ? 'scale(1)' : 'scale(1.05)',
                opacity: showImage ? 1 : 0,
                transition,
                willChange: 'transform, opacity',
              }}
            />
          </div>
        )}

        {/* Layer 1: Details — fades + moves up + soft blur */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-8 bg-white/10 backdrop-blur-xl border border-white/20"
          style={{
            zIndex: 1,
            transform: showImage ? 'translateY(-12px)' : 'translateY(0)',
            opacity: showImage ? 0 : 1,
            filter: showImage ? 'blur(4px)' : 'blur(0)',
            transition,
            willChange: 'transform, opacity, filter',
            pointerEvents: showImage ? 'none' : 'auto',
          }}
        >
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
                  onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
          <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700 leading-relaxed line-clamp-4 sm:line-clamp-5">
            {description}
          </p>
          <div className="mt-auto pt-2 sm:pt-3 lg:pt-4 flex flex-wrap gap-1.5 sm:gap-2 xl:gap-3">
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

        {/* Links overlay — visible when image is shown so GitHub/Live links stay clickable */}
        {image && (githubLink || livelink) && (
          <div
            className="absolute inset-x-0 bottom-0 rounded-b-xl flex items-center justify-between gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-black/50 backdrop-blur-sm border-t border-white/10"
            style={{
              zIndex: 2,
              opacity: showImage ? 1 : 0,
              pointerEvents: showImage ? 'auto' : 'none',
              transition: `opacity ${DURATION_MS}ms ${EASE} ${delay}ms`,
            }}
          >
            <span className="text-white font-semibold text-sm sm:text-base truncate min-w-0">
              {title}
            </span>
            <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl text-white/90 shrink-0">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:text-white transition-opacity"
                  aria-label="View on GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {livelink && (
                <a
                  href={livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 hover:text-white transition-opacity"
                  aria-label="View live demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
