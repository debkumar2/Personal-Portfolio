import React from 'react'
import TechnologyBar from './TechnologyBar'

function Technologies({ scrolling }) {
    return (
        <div>
            <section className={`${scrolling ? 'border-b border-gray-900' : ''}`} id='technologies'>
                <div className='container m-auto px-4 py-12'>
                    <h2 className='text-2xl font-semibold'>Technogies</h2>
                    <div className='mt-12'>
                        <div className='pb-6'>
                            <TechnologyBar
                                topic='HTML'
                                difficulty='Advanced'
                            />
                            <span className='w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-200 block rounded-md' />
                        </div>
                        <div className='py-6'>
                            <TechnologyBar
                                topic='CSS,SCSS,Bootstrap & Tailwind'
                                difficulty='Advanced'
                            />
                            <span className='w-[80%] h-2 bg-gradient-to-r from-yellow-500 to-yellow-200 block rounded-md' />
                        </div>
                        <div className='py-6'>
                            <TechnologyBar
                                topic='Javascript'
                                difficulty='Intermediate'
                            />
                            <span className='w-[60%] h-2 bg-gradient-to-r from-yellow-500 to-yellow-200 block rounded-md' />
                        </div>
                        <div className='py-6'>
                            <TechnologyBar
                                topic='React'
                                difficulty='Intermediate'
                            />
                            <span className='w-[55%]  h-2 bg-gradient-to-r from-yellow-500 to-yellow-200 block rounded-md' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Technologies
