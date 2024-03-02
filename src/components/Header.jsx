import React from 'react';

function Header({ scrolling }) {
    const handleSmoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <header className={`${scrolling ? 'border-b border-gray-900' : ''}`} id="home">
                <div className='container md:container m-auto px-4 py-6'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className="font-bold text-3xl cursor-pointer">Mr. <span className='bg-yellow-500 p-2 rounded-md'>Debkumar</span></h1>
                        </div>
                        <div>
                            <ul className='flex gap-6'>
                                <li>
                                    <a onClick={() => handleSmoothScroll('projects')} className='text-gray-400 hover:text-white text-lg cursor-pointer'>Projects</a>
                                </li>
                                <li>
                                    <a onClick={() => handleSmoothScroll('technologies')} className='text-gray-400 hover:text-white text-lg cursor-pointer'>Technologies</a>
                                </li>
                                <li>
                                    <a onClick={() => handleSmoothScroll('aboutme')} className='text-gray-400 hover:text-white text-lg cursor-pointer'>About Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
