import React from 'react'
import Facebook from '../assets/facebook.svg';
import LinkedIn from '../assets/linkedin.svg';
import Instagram from '../assets/instagram.svg';

function Footer() {
    return (
        <div>
            <footer>
                <div className="container m-auto flex justify-between px-4 py-6">
                    <div>
                        <p className="text-gray-300 text-sm">Copyright @ 2024</p>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <a>
                                    <img src={Facebook} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={LinkedIn} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src={Instagram} className="w-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
