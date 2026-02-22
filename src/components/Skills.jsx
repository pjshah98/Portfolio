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
            className='snap-start relative flex min-h-screen flex-col justify-center py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16'>
            <div className='max-w-6xl xl:max-w-7xl 2xl:max-w-[88rem] mx-auto w-full'>
            <h4 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:text-left text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16'>skills I carry💪</h4>
            <div className='grid sm:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 pb-20 lg:pb-24 xl:pb-28'>
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