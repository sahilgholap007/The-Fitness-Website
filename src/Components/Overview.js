import React from 'react'
import video from '../Images/Intro-Video.mp4'

export default function Overview() {
  return (
    <section className='overview'>
        <video autoPlay loop muted className='bg-video'>
            <source src={video} type="video/mp4"/>
        </video>
        <div className='overview-text'>
            <h1>WELCOME TO TFW</h1>
            <p>A place  that deliver an unrivaled experience in providing you with diets and workout plans that keep you performing at your best.</p>
        </div>
    </section>
  )
}
