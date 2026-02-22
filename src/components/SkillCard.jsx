import React from 'react'

const SkillCard = ({ title, stack }) => {
    return (
        <>
            <div className='bg-white/10 backdrop-blur-2xl p-4 sm:p-6 lg:p-6 xl:p-8 2xl:p-10 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02] min-w-0'>
                <h5 className='text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold'>{title}</h5>
                <div className='flex mt-3 sm:mt-4 lg:mt-5 flex-wrap gap-2 sm:gap-3 xl:gap-4'>
                    {stack.map((skill) => (
                        <span className='bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 px-2 py-1.5 sm:p-2 xl:px-3 xl:py-2 2xl:px-4 2xl:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm lg:text-base text-gray-800 font-medium' key={skill}>{skill}</span>
                    ))}
                </div>


            </div>

        </>
    )
}

export default SkillCard