import React from 'react'
import Portfolio from '../assets/Photo.jpeg';
import CV from '../assets/Debkumar-Mondal-CV.pdf';
function Banner() {
    return (
        <div>
            <section>
                <div className='container m-auto px-4 py-12 flex flex-col md:flex-row sm:flex-row gap-6 justify-between items-center'>
                    <div>
                        <h1 className='text-gray-400 font-semibold text-4xl py-2'>Hello, I'm </h1>
                        <h1 className='text-yellow-300 font-bold text-8xl'>Debkumar</h1>
                        <h1 className='text-yellow-300 font-bold text-8xl'>Mondal</h1>
                        <h1 className='text-white font-semibold text-7xl pb-4 running-text'>Frontend Developer</h1>
                        <p className='text-gray-300 font-normal text-2xl w-4/5 pb-6'>I like to craft solid and scalable frontend products with great user experiences.</p>
                        <a href={CV} download="Debkumar-Mondal-CV.pdf" className="bg-yellow-500 text-white font-bold py-4 px-6 rounded">
                            Download CV
                        </a>
                    </div>
                    <div className='w-96 h-96 relative rounded-full overflow-hidden border-none'>
                        <img
                            src={Portfolio}
                            alt=""
                            className=' absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
