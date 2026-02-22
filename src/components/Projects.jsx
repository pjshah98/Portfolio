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
      className="snap-start min-h-screen flex flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto w-full"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
        my projects 🛠️
      </h2>

      <div className="grid gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 lg:grid-cols-2 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;