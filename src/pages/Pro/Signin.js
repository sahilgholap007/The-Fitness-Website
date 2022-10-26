import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";


export default function Signin() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
           const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    let redirect_Page = () => {
        login()
        let tID = setTimeout(function () {
            window.location.href = "/Pro/ProLanding";
            window.clearTimeout(tID);
        }, 2000);
    }

    return(
        <section className='Signin-form'>
            <div className="Signin-form-container">
                <h1>Sign In</h1>
                <input type="text" placeholder="User Email" onChange={(event) => {
                    setLoginEmail(event.target.value)
                }}/>
                <input type="password" placeholder="Enter Password" onChange={(event) => {
                    setLoginPassword(event.target.value)
                }}/>
                <div className="signin-btns">
                    {/*eslint-disable-next-line*/}
                    <a id="pad" onClick={redirect_Page}>Log In</a>
                    <a href="/Pro/Signup">Create Account</a>
                </div>
            </div>
        </section>
    )
}