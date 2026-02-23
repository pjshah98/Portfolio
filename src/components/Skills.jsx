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
            className='snap-start relative flex min-h-screen flex-col justify-center py-10 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
            <div className='max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto w-full'>
            <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl lg:text-left text-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14'>skills I carry💪</h4>
            <div className='grid sm:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 pb-16 lg:pb-20 xl:pb-24'>
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} />
                ))}
            </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex justify-center'>
                <Footer />
            </div>
        </section>
    )
}

export default Skills