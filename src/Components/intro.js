import React from 'react'

export default function Intro() {

  function smoothScroll(){
    document.querySelector('#exercise').scrollIntoView({
      behavior: 'smooth'
    });
  }

  return (
    <section className='landing'>
        <div className='introduction'>
            <h1 id="heading">EXPERIENCE ALL<br/><span id='name'>TFW</span> HAS TO OFFER</h1>
            <p>WELCOME TO THE WORLD OF VIRTUAL FITNESS</p>
            <div className='button' id='get-started'  onClick={smoothScroll}>
                <li>
                   {/* eslint-disable-next-line */}
                  <a >Get Started</a>
                </li>
            </div>
        </div>
    </section>
  )
}