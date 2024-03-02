import React from 'react'
import { LuArrowUpRight } from 'react-icons/lu'

function ProjectCard({ projectImg, title, description, githubLink }) {
    return (
        <div>
            <div className='border rounded-md'>
                <img src={projectImg} alt="" className='w-full h-auto' />
                <div className='p-5'>
                    <h3 className='text-2xl font-semibold mt-8'>{title}</h3>
                    <p className='text-gray-300 text-sm mt-2 w-full'>{description}</p>
                    {/* <div className='flex mt-4'>
                        <a href={githubLink} target='_blank' className='py-3 px-4 font-semibold rounded-xl flex gap-2 items-center justify-center bg-yellow-400 text-white'>Github Link <LuArrowUpRight className='text-lg ' /></a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
