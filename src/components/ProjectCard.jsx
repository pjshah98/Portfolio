import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, livelink }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02] min-w-0">
      <div className="flex justify-between items-start gap-2">
        <h3 className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-bold break-words">{title}</h3>
        <div className="flex gap-2 sm:gap-3 text-base sm:text-lg xl:text-xl shrink-0">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          )}
          {livelink && (
            <a href={livelink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-700 leading-relaxed">{description}</p>
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
  );
};

export default ProjectCard;