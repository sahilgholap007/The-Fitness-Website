import React from 'react'
import {auth} from '../../firebase-config'
import { useState } from 'react'
import { onAuthStateChanged,  signOut} from "firebase/auth";

export default function ProLanding() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <section className='pro-landing'>
            <section className='section' id='know'>            
                <div className='pro-nav'>
                    <h1>User: {user?.email}</h1>
                    {/*eslint-disable-next-line*/}
                    <a onClick={logout}>Sign out</a>
                    {/*eslint-disable-next-line*/}
                    <a href='/Pro/Signin'>Log In</a>
                </div>
                <div className='text-alignment'>
                    <h1>Know Moree</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the</p>
                </div>    
                <a id='pro-btn' href='/pro/ProLanding/Knowmore'>Discover</a>      
            </section>
            <section className='section' id='workout-plan'>
            <div className='text-alignment'>
                    <h1>Custom Workout Plan</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the</p>
            </div>
            <a id='pro-btn' href='/pro/ProLanding/CustomWorkout'>Custom Workout</a> 
            </section>
            <section className='section' id='diet-plan'>
            <div className='text-alignment'>
                    <h1>Custom Diet Plan</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the</p>
            </div>
            <a id='pro-btn' href='/pro/ProLanding/CustomDiet'>Custom Diet</a> 
            </section>
        </section>
    )
}

