import React from 'react'
import './experience.css'

export default function Experience() {
  return (
    <div className='experience Flex-x-direction PaddingLeftAndRight'>
        <div className='experience-box border-left weak'>
            <h2>5+</h2>
            <p className='AddOpacity'>Specialist Doctors</p>
        </div>
        <div className='experience-box strong'>
            <h2>99%</h2>
            <p className='AddOpacity'>Positive Reviews</p>
        </div>
        <div className='experience-box strong'>
            <h2>25+</h2>
            <p className='AddOpacity'>Years Of Experience</p>
        </div>
        <div className='experience-box border-right weak'>
            <h2>20+</h2>
            <p className='AddOpacity'>Professional Nurses</p>
        </div>

    </div>
  )
}
