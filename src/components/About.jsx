import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col lg:flex-row relative items-center snap-start min-h-screen py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto"
        >
            {/* Profile Image + Social Icons (stacked: picture then icons directly below) */}
            <div className="flex flex-col items-center shrink-0">
                <div className="bg-white/10 backdrop-blur-2xl p-2 sm:p-4 lg:p-5 xl:p-6 rounded-full shadow-lg border border-white/20">
                    <img
                        src="/pj.PNG"
                        alt="Prince Jung Shah"
                        className="rounded-full w-[200px] h-[200px] min-[400px]:w-[240px] min-[400px]:h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] 2xl:w-[480px] 2xl:h-[480px] max-w-full object-[80%_20%] object-cover"
                    />
                </div>
                <div className="flex justify-center gap-5 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mt-4">
                    <a href="https://github.com/pjshah98" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaGithub className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-700 hover:text-black transition" />
                    </a>
                    <a href="https://www.linkedin.com/in/prince-jung-shah-41460133a/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaLinkedin className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-600 hover:text-blue-800 transition" />
                    </a>
                    <a href="https://www.instagram.com/p.r1nce_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                        <FaInstagram className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-400 hover:text-blue-600 transition" />
                    </a>
                    <a href="mailto:princejshah1@email.com" className="hover:opacity-80 transition">
                        <FaEnvelope className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-red-500 hover:text-red-600 transition" />
                    </a>
                </div>
            </div>

            {/* Text Info */}
            <div className="info flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mt-4 lg:mt-0 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center lg:text-left font-bold text-gray-900">
                    a little bit <br /> about me
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify lg:text-left text-gray-700 leading-relaxed">
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