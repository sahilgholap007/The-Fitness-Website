import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signin() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [error, setError] = useState("")

    const Navigate = useNavigate()

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            Navigate('/pro/prolanding')
        } catch (error) {
            setError(error.message)
        }
    }

    return(
        <section className='Signin-form'>
            <div className="Signin-form-container">
                <h1>Sign In</h1>
                {error && <alert>{error}</alert>}
                <input type="text" placeholder="User Email" onChange={(event) => {
                    setLoginEmail(event.target.value)
                }}/>
                <input type="password" placeholder="Enter Password" onChange={(event) => {
                    setLoginPassword(event.target.value)
                }}/>
                <div className="signin-btns">
                    {/*eslint-disable-next-line*/}
                    <a id="pad" onClick={login}>Log In</a>
                    <a href="/Pro/Signup">Create Account</a>
                </div>
            </div>
        </section>
    )
}