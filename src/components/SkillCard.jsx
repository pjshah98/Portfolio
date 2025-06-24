import React from 'react'

const SkillCard = ({ title, stack }) => {
    return (
        <>
            <div className='bg-white/10 backdrop-blur-2xl p-6 rounded-xl shadow-lg border border-white/20 transition hover:scale-[1.02]'>
                <h5 className='lg:text-2xl text-xl font-bold '>{title}</h5>
                <div className='flex mt-4 flex-wrap gap-4'>
                    {stack.map((skill) => (
                        <span className='bg-white/10 backdrop-blur-2xl  shadow-lg border border-white/20 p-2 rounded-xl text-sm text-gray-800 font-medium'key={skill}>{skill}</span>
                    ))}
                </div>


            </div>

        </>
    )
}

export default SkillCard