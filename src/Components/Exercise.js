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
    <section className='exersise' id='exercise'>
        <div className="card" id="first" onMouseOver={backgroundone}>
            <h1>UNLIMITED<br/>CLASSES</h1>
            <p>Classes curated and developed by the industry's best talent, bringing results through innovation.</p>
            <a className='button' href='/Workouts'>Workouts</a>
        </div>
        <div className="card" id='sec' onMouseOver={backgroundtwo}>
            <h1>PERSONAL<br/>TRAINING</h1>
            <p>Performance at its highest level with renowned Personal Training.</p>
            <a id="card-link" className='button' href='/Workouts'>Diet</a>
        </div>
        <div className="card" id='third' onMouseOver={backgroundthree}>
            <h1>STUDIO<br/>PILATES</h1>
            <p>A purely authentic Pilates experience that strengthens and creates balance in the body.</p>
            <a className='button' href='/Workouts'>PRO</a>
        </div>
    </section>
  )
}