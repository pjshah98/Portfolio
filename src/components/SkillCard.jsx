import React from 'react'

const SkillCard = ({ title, stack }) => {
    return (
        <>
            <div className='bg-white/10 backdrop-blur-2xl p-4 sm:p-6 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02] min-w-0'>
                <h5 className='text-lg sm:text-xl lg:text-2xl font-bold'>{title}</h5>
                <div className='flex mt-3 sm:mt-4 flex-wrap gap-2 sm:gap-3'>
                    {stack.map((skill) => (
                        <span className='bg-white/10 backdrop-blur-2xl shadow-lg border border-white/20 px-2 py-1.5 sm:p-2 rounded-lg sm:rounded-xl text-xs sm:text-sm text-gray-800 font-medium' key={skill}>{skill}</span>
                    ))}
                </div>


            </div>

        </>
    )
}

export default SkillCard