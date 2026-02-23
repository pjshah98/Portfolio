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
      className="snap-start min-h-screen flex flex-col justify-center py-10 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto w-full"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-left mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
        my projects 🛠️
      </h2>

      <div className="grid gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 lg:grid-cols-2 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;