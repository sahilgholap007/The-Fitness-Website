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
            <h1>User Logged In: {user?.email}</h1>
             {/*eslint-disable-next-line*/}
            <a onClick={logout}>Sign out</a>
             {/*eslint-disable-next-line*/}
            <a href='/Pro/Signin'>Log In</a>
        </section>
    )
}

