import React from 'react'
import './about.css'
import Pic1 from '../../image/Pic1.jpg'
const About = () => {
    return (
        <div className='a' id='about'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={Pic1} alt='Code'className='a-img' ></img>
                </div>
            </div>
            <div className='a-right'>
                <h1 className='a-title'>About Me</h1>
                <p className='a-desc'>Focused Computer Applications major aiming to leverage proven communication,problem solving and teamwork skills. Dedicated 
                to achieving demanding development objectives according to tight schedules while producing impeccable code.Works alongside clients and colleagues through all stages of development to produce exceptional final products.  
                </p>
            </div>
        </div>
    )
}

export default About
