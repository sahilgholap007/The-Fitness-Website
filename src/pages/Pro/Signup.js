import React from "react"; 
import { useState, useEffect } from "react";
import {db} from '../../firebase-config' 
import {collection, getDocs, addDoc} from "firebase/firestore"

export default function Signup() {

    const [newName, setNewName] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "Users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, {
            Name: newName,
            Username: newUsername,
            Password: newPassword
        })

    }

    // useEffect(()=>{
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     }
    //     getUsers();
    // // eslint-disable-next-line
    // }, []);

    let redirect_Page = () => {
        createUser()
        let tID = setTimeout(function () {
            window.location.href = "/Pro/Signin";
            window.clearTimeout(tID);
        }, 2000);
    }

    return(
        <section className='Signup-form'>
            {/* {users.map((user)=>{
                return(
                    <div className="test">
                        <h1>{user.Name}</h1>
                    </div>
                );
            })} */}
            <div className="Signup-form-container">
                <h1>Create Account</h1>
                <input type="text" placeholder="Full Name" onChange={(event) => {setNewName(event.target.value)}} />
                <input type="text" placeholder="Username" onChange={(event) => {setNewUsername(event.target.value)}}  />
                <input type="password" placeholder="Create Password" onChange={(event) => {setNewPassword(event.target.value)}}  />
                <input type="password" placeholder="Re-Enter Password" />
                <a onClick={redirect_Page}>Signup</a>
            </div>
        </section>
    )
}