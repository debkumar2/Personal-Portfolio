import React from 'react'

function AboutMe({ scrolling }) {
    return (
        <div>
            <section className={`${scrolling ? 'border-b border-gray-900' : ''}`} id='aboutme'>
                <div className='container m-auto px-4 py-12'>
                    <h2 className='text-2xl font-semibold'>About Me</h2>
                    <div className='mt-10 relative before:absolute before:top-0 before:left-48 before:bottom-0 before:w-2 before:bg-white before:rounded-md'>
                        <div className='pl-60 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-500 before:to-yellow-200 before:absolute before:rounded-full before:left-[188px]'>
                            <div className='mb-10'>
                                <h3 className='absolute -left-1 font-bold'>July 2023 - February 2024</h3>
                                <h3 className='text-xl font-semibold'>REACT DEVELOPER INTERN</h3>
                                <p>WEAVERS WEB SOLUTION PRIVATE LIMITED</p>
                                <p>My time at WEAVERS WEB SOLUTION was invaluable, allowing me to apply my theoretical knowledge in a practical setting and gain insights into the software development lifecycle. I learned to adapt to diverse requirements and challenges.
                                </p>
                            </div>
                        </div>
                        <div className='pl-60 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-500 before:to-yellow-200 before:absolute before:rounded-full before:left-[188px]'>
                            <div className='mb-10'>
                                <h3 className='absolute -left-1 font-bold'>2020-2023</h3>
                                <h3 className='text-xl font-semibold'>B.TECH IN COMPUTER SCIENCE & ENGINEERING</h3>
                                <p>Camellia Institute of Technology & Managment</p>
                                <h4>CGPA 9.07</h4>
                                <p> My journey in the field of computer science has equipped me with a solid understanding of fundamental concepts and principles. Throughout my academic years, I delved deep into various subjects, honing my problem-solving skills and fostering a curiosity-driven mindset.</p>
                            </div>
                        </div>
                        <div className='pl-60 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-500 before:to-yellow-200 before:absolute before:rounded-full before:left-[188px]'>
                            <h3 className='absolute -left-1 font-bold'>2017-2020</h3>
                            <h3 className='text-xl font-semibold'>B.TECH IN COMPUTER SCIENCE & TECHNOLOGY</h3>
                            <p>Technique Polytechnic Institute</p>
                            <h4>CGPA 6.9</h4>
                            <p> My journey in the field of computer science has equipped me with a solid understanding of fundamental concepts and principles. Throughout my academic years, I delved deep into various subjects, honing my problem-solving skills and fostering a curiosity-driven mindset.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe
