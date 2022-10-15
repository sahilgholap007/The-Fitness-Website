import React from 'react'
import video from '../Images/Intro-Video.mp4'

export default function Overview() {
  return (
    <section className='overview'>
        <video autoPlay loop muted className='bg-video'>
            <source src={video} type="video/mp4"/>
        </video>
        <div className='overview-text'>
            <h1>WHERE LUXURY AND FITNESS MEET</h1>
            <p>Clubs that deliver an unrivaled experience to maximize your potential, and luxury amenities that keep you performing at your best.</p>
        </div>
    </section>
  )
}
