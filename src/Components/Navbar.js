import React from 'react'
import T from "../Images/t.png"

export default function navbar(){
  return (
    <section className='Nav-container'>
        <div className='nav-logo'>
            <img src={T} alt='logo'/>
        </div>
        <div className='Nav'>
        <ul>
            <li><a href='/Pro'>Premium</a></li>
            <li><a href='/Diet'>Nutrition</a></li>
            <li><a href='/Workouts'>Workouts</a></li>
        </ul>
        </div>
    </section>
  )

}


