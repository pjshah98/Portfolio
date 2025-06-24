import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "To-do list App",
      description:
        "Built a simple and interactive task management app to help users organize their tasks efficiently. Implemented state management to add, edit and delete tasks dynamically. Designed an intuitive user-friendly UI using Tailwind CSS for modern styling.",
      techStack: ["React", "TailwindCSS", "HTML"],
      githubLink: "https://github.com/pjshah98",
      livelink: "https://live-link.com",
    },
    {
      title: "News App",
      description:
        "Built a responsive news application that fetches real-time news from an external API. Integrated API endpoints to fetch the latest articles across multiple categories (e.g., sports, technology, health). Implemented a dark mode toggle feature for better user accessibility and visual comfort.",
      techStack: ["React", "CSS", "API Integration"],
      githubLink: "https://github.com/pjshah98",
      livelink: "https://live-link.com",
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start flex flex-col justify-center h-screen py-20 px-6 lg:px-20"
    >
      <h2 className="text-4xl lg:text-7xl mt-35 lg:ml-45 text-center lg:text-left mb-10">
        my projects 🛠️
      </h2>

      <div className="grid gap-10 lg:py-25 lg:gap-15 lg:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;