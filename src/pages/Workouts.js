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
        <div className="card" id="first" onMouseOver={backgroundone}>
            <h1>UNLIMITED<br/>CLASSES</h1>
            <p>Classes curated and developed by the industry's best talent, bringing results through innovation.</p>
            <a id="card-link" className='button' href='/Beginner'>Beginner</a>
        </div>
        <div className="card" id='sec' onMouseOver={backgroundtwo}>
            <h1>PERSONAL<br/>TRAINING</h1>
            <p>Performance at its highest level with renowned Personal Training.</p>
            <a id="card-link" className='button' href='/Intermediate'>Intermidiate</a>
        </div>
        <div className="card" id='third' onMouseOver={backgroundthree}>
            <h1>STUDIO<br/>PILATES</h1>
            <p>A purely authentic Pilates experience that strengthens and creates balance in the body.</p>
            <a id="card-link" className='button' href='/Advance'>Advance</a>
        </div>
    </section>
  )
}

