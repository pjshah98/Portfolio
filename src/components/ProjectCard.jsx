import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, livelink }) => {
  return (
    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02]">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-4 text-xl">
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
      <p className="mt-4 text-base lg:text-xl">{description}</p>
      <div className="mt-4 flex flex-wrap gap-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 p-2 rounded-xl text-sm text-gray-800 font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;