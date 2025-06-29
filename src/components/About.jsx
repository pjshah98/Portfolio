import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const About = () => {
    return (
        <div
            id="about"
            className="flex flex-col lg:flex-row relative items-center snap-start h-screen lg:gap-100 gap-10 px-4"
        >
            {/* Profile Image Container */}
            <div className="bg-white/10 backdrop-blur-2xl lg:ml-8 p-4 rounded-full shadow-lg border border-white/20">
                <img
                    src="/prince.PNG"
                    alt="..."
                    className="rounded-full w-[300px] h-[300px] lg:w-[520px] lg:h-[520px] object-[80%_20%] object-cover"
                />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 lg:gap-20 mt-3 lg:ml-27 lg:absolute lg:bottom-30">
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
            <div className="info flex flex-col gap-6 lg:gap-10 mt-6 lg:mt-0 lg:w-150">
                <h1 className="text-4xl lg:text-7xl text-center lg:text-left">
                    a little bit <br /> about me
                </h1>
                <p className="text-base lg:text-xl text-justify lg:text-left">
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