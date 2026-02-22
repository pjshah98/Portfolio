import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, livelink }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02] min-w-0">
      <div className="flex justify-between items-start gap-3">
        <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl font-bold break-words">{title}</h3>
        <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl xl:text-2xl shrink-0">
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
      <p className="mt-3 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 leading-relaxed">{description}</p>
      <div className="mt-3 sm:mt-4 lg:mt-5 flex flex-wrap gap-2 sm:gap-3 xl:gap-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 px-2 py-1.5 sm:p-2 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base text-gray-800 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;