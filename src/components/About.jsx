import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col lg:flex-row relative items-center snap-start min-h-screen py-12 sm:py-16 lg:py-20 lg:gap-16 xl:gap-24 gap-8 px-4 sm:px-6 max-w-6xl mx-auto"
        >
            {/* Profile Image Container */}
            <div className="shrink-0 bg-white/10 backdrop-blur-2xl lg:ml-4 p-2 sm:p-4 rounded-full shadow-lg border border-white/20">
                <img
                    src="/pj.PNG"
                    alt="Prince Jung Shah"
                    className="rounded-full w-[200px] h-[200px] min-[400px]:w-[240px] min-[400px]:h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] max-w-full object-[80%_20%] object-cover"
                />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 sm:gap-6 lg:gap-8 xl:gap-12 mt-2 lg:absolute lg:bottom-12 xl:bottom-16 lg:left-1/2 lg:-translate-x-1/2 lg:ml-0">
                <a href="https://github.com/pjshah98" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl lg:text-4xl text-gray-700 hover:text-black transition" />
                </a>
                <a href="https://www.linkedin.com/in/prince-jung-shah-41460133a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl lg:text-4xl text-blue-600 hover:text-blue-800 transition" />
                </a>
                <a href="https://www.instagram.com/p.r1nce_/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-3xl lg:text-4xl text-blue-400 hover:text-blue-600 transition" />
                </a>
                <a href="mailto:princejshah1@email.com">
                    <FaEnvelope className="text-3xl lg:text-4xl text-red-500 hover:text-red-600 transition" />
                </a>
            </div>

            {/* Text Info */}
            <div className="info flex flex-col gap-4 sm:gap-6 lg:gap-8 mt-4 lg:mt-0 lg:max-w-xl xl:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center lg:text-left font-bold text-gray-900">
                    a little bit <br /> about me
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-justify lg:text-left text-gray-700 leading-relaxed">
                    I’m an aspiring full-stack developer with a strong foundation in frontend development and a growing curiosity for backend technologies. I enjoy creating clean, responsive interfaces that offer smooth user experiences and bring ideas to life through code.
                    <br /><br />
                    My journey in tech is driven by a love for problem-solving and a desire to build meaningful digital tools. I’m always exploring new concepts, frameworks, and best practices to sharpen my skills and expand my capabilities.
                    <br /><br />
                    Beyond coding, I enjoy reading and reflecting—whether it’s a novel or a thought-provoking article, I value learning from different perspectives. This mindset keeps me grounded, inspired, and ready to tackle challenges creatively.
                </p>
            </div>
        </div>
    );
};

export default About;