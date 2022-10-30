import React from 'react'

export default function Advance(){
  return (
    <section className='AdvancePage'>
        <div className='flex-one' id='advance-circles'>
            <a href='/Workouts/Advance/AdvanceChest' className='circle' id='beginner-one'><h2>Chest</h2></a>
            <a href="/Workouts/Advance/AdvanceLegs" className='circle' id='beginner-two'><h2>Legs</h2></a>
            <a href="/Workouts/Advance/AdvanceShoulders" className='circle' id='beginner-three'><h2>Shoulders</h2></a>
        </div>
        <div className='flex-one' id='advance-circles'>
            <a href='/Workouts/Advance/AdvanceArms' className='circle'  id='beginner-four'><h2>Arms</h2></a>
            <a href='/Workouts/Advance/AdvanceAbs' className='circle' id='beginner-five'><h2>Abs</h2></a>
            <a href='/Workouts/Advance/AdvanceBack' className='circle' id='beginner-six'><h2>Back</h2></a> 
        </div>
    </section>
  )
}