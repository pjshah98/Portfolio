import React from 'react'
import SkillCard from './SkillCard'
import Footer from './Footer'

const Skills = () => {
    const skills = [
        {
            title: "Languages",
            stack: ["Javascript", "C", "C++"],

        },
        {
            title: "Frontend",
            stack: ["React", "React Router DOM", "Tailwind CSS", "HTML", "CSS"]
        },
        {
            title: "Dev tools and Platforms",
            stack: ["Git", "Github", "VsCode"]
        }

    ]
    return (
        <section id='skills'
            className='snap-start relative flex flex-col justify-center h-screen '>
            <h4 className='text-7xl ml-72'>skills I carry💪</h4>
            <div className='grid md:grid-cols-2 gap-15 py-25 mx-auto max-w-6xl'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}

            </div>
            <div className='flex justify-center'>
            <div className='absolute bottom-0 '>
                <Footer />
            </div>
            </div>



        </section>
    )
}

export default Skills