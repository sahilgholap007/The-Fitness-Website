import React from "react"; 
import { useState } from "react";
// import {db} from '../../firebase-config' 
// import {collection, addDoc} from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase-config'

export default function Signup() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    // const [user, setUser] = useState({});

    // onAuthStateChanged(auth, (currentUser)=>{
    //     setUser(currentUser);
    // })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch (error){
            console.log(error.message);
        }
    }

    // const [newName, setNewName] = useState('');
    // const [newUsername, setNewUsername] = useState('');
    // const [newPassword, setNewPassword] = useState('');

    // const [users, setUsers] = useState([]);
    // const usersCollectionRef = collection(db, "Users");

    // const createUser = async () => {
    //     await addDoc(usersCollectionRef, {
    //         Name: newName,
    //         Username: newUsername,
    //         Password: newPassword
    //     })

    // }

    // useEffect(()=>{
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef);
    //         setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //     }
    //     getUsers();
    // // eslint-disable-next-line
    // }, []);

    let redirect_Page = () => {
        register();
        let tID = setTimeout(function () {
            window.location.href = "/Pro/Payment";
            window.clearTimeout(tID);
        }, 2000);
    }

    return(
        <section className='Signup-form'>
            <div className="Signup-form-container">
                <h1>Create Account</h1>
                <input type="text" placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value)}} />
                <input type="password" placeholder="Create Password" onChange={(event) => {setRegisterPassword(event.target.value)}}  />
                <input type="password" placeholder="Re-Enter Password" />
                <div>
                    {/*eslint-disable-next-line*/}
                    <a onClick={redirect_Page}>Signup</a>
                    <a href="/Pro/Signin">Login</a>
                </div>
            </div>
        </section>
    )
}

