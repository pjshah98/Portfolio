import React from 'react'

const SkillCard = ({ title, stack }) => {
    return (
        <>
            <div className='bg-white/10 backdrop-blur-2xl p-3 sm:p-4 lg:p-5 xl:p-6 2xl:p-8 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02] min-w-0'>
                <h5 className='text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold'>{title}</h5>
                <div className='flex mt-2 sm:mt-3 lg:mt-4 flex-wrap gap-1.5 sm:gap-2 xl:gap-3'>
                    {stack.map((skill) => (
                        <span className='bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 px-1.5 py-1 sm:px-2 sm:py-1.5 xl:px-2.5 xl:py-1.5 2xl:px-3 2xl:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm lg:text-sm text-gray-800 font-medium' key={skill}>{skill}</span>
                    ))}
                </div>


            </div>

        </>
    )
}

export default SkillCard