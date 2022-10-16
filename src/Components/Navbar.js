import React from 'react'
import T from "../Images/T.gif"

export default function navbar(){
  return (
    <section className='Nav-container'>
        <div className='nav-logo'>
            <img src={T} alt='logo'/>
        </div>
        <div className='Nav'>
        <ul>
            <li><a href='/'>Premium</a></li>
            <li><a href='/'>Nutrition</a></li>
            <li><a href='/Workouts'>Workouts</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Contact Us</a></li>
        </ul>
        </div>
    </section>
  )

}


