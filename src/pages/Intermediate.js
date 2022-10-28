import React from 'react'

export default function Intermediate(){
  return (
    <section className='intermediate'>
        <div className='flex-one' id='intermediate-circle'>
            <a href='/Workouts/Intermediate/IntermediateChest' className='circle' id='intermediate-one'><h2>Chest</h2></a>
            <a href='/Workouts/Intermediate/IntermediateLegs' className='circle' id='intermediate-two'><h2>Legs</h2></a>
            <a href='/Workouts/Intermediate/IntermediateShoulders' className='circle' id='intermediate-three'><h2>Shoulders</h2></a>
        </div>
        <div className='flex-one' id='intermediate-circle'>
            <a href='/Workouts/Intermediate/IntermediateArms' className='circle'id='intermediate-four'><h2>Arms</h2></a>
            <a href='/Workouts/Intermediate/IntermediateAbs' className='circle'id='intermediate-five'><h2>Abs</h2></a>
            <a href='/Workouts/Intermediate/IntermediateBack' className='circle'id='intermediate-six'><h2>Back</h2></a> 
        </div>
    </section>
  )
}

