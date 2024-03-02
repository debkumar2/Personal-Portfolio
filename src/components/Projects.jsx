import React from 'react'
import Project1 from '../assets/project1.png';
import Project3 from '../assets/project3.png';
import Project4 from '../assets/Library-Management.png';
import ProjectCard from './ProjectCard';
function Projects({ scrolling }) {
    return (
        <div>
            <section className={`${scrolling ? 'border-b border-gray-900' : ''}`} id='projects'>
                <div className='container m-auto px-4 py-12'>
                    <h2 className='text-2xl font-semibold'>Projects</h2>
                    <div className='flex flex-col items-center sm:flex-row justify-between gap-10 mt-10'>
                        <ProjectCard
                            projectImg={Project1}
                            title='Midwest Landing Page'
                            description='Responsive HTML,CSS layout for Midwest generator,HTML,CSS,Javascript'
                        />
                        <ProjectCard
                            projectImg={Project3}
                            title='Personal Portfolio'
                            description='Responsive Portfolio using React,Tailwind,React-icons,CSS,React-router-dom'
                        />
                        <ProjectCard
                            projectImg={Project4}
                            title='Library Management System'
                            description='Library Management System using React,Tailwind,React-router-dom,React-Icons'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
