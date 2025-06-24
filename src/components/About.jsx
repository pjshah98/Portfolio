import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
// import tryImage from './prince.png'

const About = () => {
    return (
        <>

            <div
                id='about'
                className='flex relative items-center snap-start h-screen gap-100'>
                <div className="bg-white/10 backdrop-blur-2xl ml-8 p-4 rounded-full shadow-md border border-white/20">
                    <img src="/prince.PNG" alt="..." className=" rounded-full w-130 h-130 object-[80%_20%] object-cover " />


                </div>

                <div className="flex ml-27 absolute bottom-30 justify-center gap-20 mt-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-4xl text-gray-700 hover:text-black transition" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-4xl text-blue-600 hover:text-blue-800 transition" />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-4xl text-blue-400 hover:text-blue-600 transition" />
                    </a>
                    <a href="mailto:your@email.com">
                        <FaEnvelope className="text-4xl text-red-500 hover:text-red-600 transition" />
                    </a>
                </div>


                <div className="info flex w-150 flex-col gap-10">
                    <h1 className='text-7xl'>a little bit <br></br> about me</h1>
                    <p className='text-xl'>I’m an aspiring full-stack developer with a strong foundation in frontend development and a growing curiosity for backend technologies. I enjoy creating clean, responsive interfaces that offer smooth user experiences and bring ideas to life through code.

                        <br></br><br />My journey in tech is driven by a love for problem-solving and a desire to build meaningful digital tools. I’m always exploring new concepts, frameworks, and best practices to sharpen my skills and expand my capabilities.

                        <br></br><br />Beyond coding, I enjoy reading and reflecting—whether it’s a novel or a thought-provoking article, I value learning from different perspectives. This mindset keeps me grounded, inspired, and ready to tackle challenges creatively.</p>
                </div>

            </div>

        </>
    )
}

export default About