import React from 'react'
import Abs from '../Images/Abs.jpeg'
import Squats from '../Images/Squats.jpeg' 
import Deadlift from '../Images/Deadlift.jpeg'


export default function Workouts() {

  function backgroundone(){
    document.getElementById("exercise").style.backgroundImage = `url("${Abs}")`
  }

  function backgroundtwo(){
    document.getElementById("exercise").style.backgroundImage = `url("${Squats}")`
  }

  function backgroundthree(){
    document.getElementById("exercise").style.backgroundImage = `url("${Deadlift}")`
  }

  return(
    <section className='exersise' id='exercise' >
        <div className="card" id='one' onMouseOver={backgroundone}>
            <h1>NEW TO<br/>EXERCISE?</h1>
            <p>First time working out is a great moment. Please get started with this.</p>
            <a id="card-link" className='button' href='/Workouts'>Beginner</a>
        </div>
        <div className="card" id='sec' onMouseOver={backgroundtwo}>
            <h1>BEEN AT IT<br/>FOR A WHILE</h1>
            <p>Been working out for a while? GREAT! I guess this is for you.</p>
            <a id="card-link" className='button' href='/Workouts'>Intermediate</a>
        </div>
        <div className="card" id='third' onMouseOver={backgroundthree}>
            <h1>AN ABSOLUTE<br/>BEAST</h1>
            <p>Well nothing to say about this. Welcome to the expert side CHAMP.</p>
            <a id="card-link" className='button' href='/Workouts'>Advance</a>
        </div>
    </section>
  )
}

