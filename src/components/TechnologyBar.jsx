import React from 'react'

function TechnologyBar({ topic, difficulty }) {
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-lg font-semibold'>{topic}</h2>
                <p className='text-gray-300'>{difficulty}</p>
            </div>
        </div>
    )
}

export default TechnologyBar
