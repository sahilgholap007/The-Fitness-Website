import React from 'react'

export default function Beginner(){
  return (
    <section className='Beginner'>
        <div className='flex-one' id='beginner-circles'>
            <a href='/Workouts/Beginner/BeginnerChest' className='circle' id='beginner-one'><h2>Chest</h2></a>
            <a href='/Workouts/Beginner/BeginnerLegs' className='circle' id='beginner-two'><h2>Legs</h2></a>
            <a href='/Workouts/Beginner/BeginnerShoulders' className='circle' id='beginner-three'><h2>Shoulders</h2></a>
        </div>
        <div className='flex-one' id='beginner-circles'>
            <a href='/Workouts/Beginner/BeginnerArms' className='circle' id='beginner-four'><h2>Arms</h2></a>
            <a href='/Workouts/Beginner/BeginnerAbs' className='circle' id='beginner-five'><h2>Abs</h2></a>
            <a href='/Workouts/Beginner/BeginnerBack' className='circle' id='beginner-six'><h2>Back</h2></a> 
        </div>
    </section>
  )
}