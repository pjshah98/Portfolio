import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Virtual Stylist AI",
      description:
        "AI-powered outfit recommendation platform with a modern glassmorphism UI. ML-ranked recommendations via scikit-learn, color harmony engine (complementary/analogous/monochromatic), favorites saved to localStorage, and dark mode. Flask backend with recommendation API.",
      techStack: ["Python", "Flask", "scikit-learn", "pandas", "HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/pjshah98/Virtual_Stylist_AI",
      livelink: "https://github.com/pjshah98/Virtual_Stylist_AI",
      image: "/images/projects/Virtual_Stylist_AI.png",
    },
    {
      title: "Plothole",
      description:
        "A community site for spotting plot holes in movies and TV. Browse cases, submit your findings, vote and comment on others' investigations, and earn XP to climb the ranks. Includes auth (JWT, bcrypt), TMDB movie catalog, and a full Express backend.",
      techStack: ["React 19", "Vite", "React Router", "Tailwind CSS 4", "Node.js", "Express", "JWT"],
      githubLink: "https://github.com/pjshah98/Plothole",
      livelink: "https://plothole-five.vercel.app/",
      image: "/images/projects/plothole.png",
    },
    {
      title: "ShifftBuddy",
      description:
        "Offline-first shift handoff app for retail: log tasks and notes locally, sync to Firebase when online. Works without internet after first load. Includes real sign-in and shared tasks across devices, with a sync queue and conflict handling.",
      techStack: ["React 19", "JavaScript", "Vite", "IndexedDB", "Firebase", "Firestore"],
      githubLink: "https://github.com/pjshah98/ShifftBuddy",
      livelink: "https://github.com/pjshah98/ShifftBuddy",
      image: "/images/projects/ShifftBuddy.png",
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