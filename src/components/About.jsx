import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col lg:flex-row relative items-center snap-start min-h-screen py-10 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 gap-6 lg:gap-10 xl:gap-12 2xl:gap-14 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto"
        >
            {/* Profile Image + Social Icons (stacked: picture then icons directly below) */}
            <div className="flex flex-col items-center shrink-0">
                <div className="bg-white/10 backdrop-blur-2xl p-1.5 sm:p-3 lg:p-4 xl:p-5 rounded-full shadow-lg border border-white/20">
                    <img
                        src="/pj.PNG"
                        alt="Prince Jung Shah"
                        className="rounded-full w-[180px] h-[180px] min-[400px]:w-[220px] min-[400px]:h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] xl:w-[360px] xl:h-[360px] 2xl:w-[400px] 2xl:h-[400px] max-w-full object-[80%_20%] object-cover"
                    />
                </div>
                <div className="flex justify-center gap-4 sm:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10 mt-3">
                    <a href="https://github.com/pjshah98" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaGithub className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-700 hover:text-black transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/prince-jung-shah-41460133a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaLinkedin className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-600 hover:text-blue-800 transition" />
                    </a>
                    <a href="https://www.instagram.com/p.r1nce_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaInstagram className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-blue-400 hover:text-blue-600 transition" />
                    </a>
                    <a href="mailto:princejshah1@email.com" className="hover:opacity-80 transition">
                        <FaEnvelope className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-red-500 hover:text-red-600 transition" />
                    </a>
                </div>
            </div>

            {/* Text Info */}
            <div className="info flex flex-col gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mt-3 lg:mt-0 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:text-left font-bold text-gray-900">
                    a little bit <br /> about me
                </h1>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify lg:text-left text-gray-700 leading-relaxed">
                    Aspiring Full-Stack Developer with hands-on experience building responsive web applications using JavaScript, HTML, CSS, React, and Firebase. I enjoy translating ideas into clean, user-friendly interfaces and developing features that solve real problems.
                    <br /><br />
                    I’ve worked on multiple academic and personal projects involving authentication, state management, database integration, and UI/UX design, and I’m actively expanding my backend skills with Node.js and databases.
                    <br /><br />
                    I’m seeking a software development internship where I can contribute to real-world projects, learn from experienced engineers, and grow as a full-stack developer.
                </p>
            </div>
        </div>
    );
};

export default About;