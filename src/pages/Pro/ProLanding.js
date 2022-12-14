import React from 'react'
import {auth} from '../../firebase-config'
import { useState } from 'react'
import { onAuthStateChanged,  signOut} from "firebase/auth";
import { useNavigate } from 'react-router-dom';

 

export default function ProLanding() {

    const [user, setUser] = useState({});

    const Navigate = useNavigate()

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })

    const logout = async () => {
        await signOut(auth);
        localStorage.clear();
        Navigate('/Pro/Signin')
    }

    return (
        <section className='pro-landing'>
            <section className='section' id='know'>            
                <div className='pro-nav'>
                    <div className='pro-nav-container'>
                        <img alt='' src={localStorage.getItem("profilePic")} />
                        <h1>{user?.email} <br/> {localStorage.getItem("name")}</h1>
                    </div>
                    {/*eslint-disable-next-line*/}
                    <a onClick={logout}>Sign out</a>
                </div>
                <div className='text-alignment'>
                    <h1>Know More</h1>
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

