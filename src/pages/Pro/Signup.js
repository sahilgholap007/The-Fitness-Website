import React from "react"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase-config'


export default function Signup() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [error, setError] = useState("")

    const Navigate = useNavigate()

    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            Navigate('/pro/proLanding')
        } catch (error){
            setError(error.message)
        }
    }

    return(
        <section className='Signup-form'>
            <div className="Signup-form-container">
                <h1>Create Account</h1>
                {error && <alert role="danger">{error}</alert>}
                <input type="text" placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value)}} />
                <input type="password" placeholder="Create Password" onChange={(event) => {setRegisterPassword(event.target.value)}}  />
                <input type="password" placeholder="Re-Enter Password" />
                <div>
                    {/*eslint-disable-next-line*/}
                    <a onClick={register}>Signup</a>
                    <a href="/Pro/Signin">Login</a>
                </div>
            </div>
        </section>
    )
}

