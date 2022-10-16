import React from 'react'
import one from '../Images/one.jpg'
import two from '../Images/two.jpg' 
import three from '../Images/three.jpg'

export default function Exersise() {

  function backgroundone(){
    document.getElementById("exercise").style.backgroundImage = `url("${one}")`
  }

  function backgroundtwo(){
    document.getElementById("exercise").style.backgroundImage = `url("${two}")`
  }

  function backgroundthree(){
    document.getElementById("exercise").style.backgroundImage = `url("${three}")`
  }


  return (
    <section className='exersise' id='exercise' >
        <div className="card" id="first" onMouseOver={backgroundone}>
            <h1>EFFECTIVE<br/>WORKOUT PLANS</h1>
            <p>Workout plans ranging from beginner to advanced. Get started with us and know about the various workout plans that suit you</p>
            <a id="card-link" className='button' href='/Workouts'>Workouts</a>
        </div>
        <div className="card" id='sec' onMouseOver={backgroundtwo}>
            <h1>OPTIMUM<br/>NUTRITION</h1>
            <p>World's most renowned diet plans are here for you to have you choose for your bulk , cut or personal goals.</p>
            <a id="card-link" className='button' href='/Workouts'>Diet</a>
        </div>
        <div className="card" id='third' onMouseOver={backgroundthree}>
            <h1>CUSTOM<br/>WORKOUT AND DIET </h1>
            <p>A chance to have a custom workout plan and a personalized diet and a chance to weekly conversations with our trainers and nutritionists.</p>
            <a id="card-link" className='button' href='/Workouts'>Premium </a>
        </div>
    </section>
  )
}