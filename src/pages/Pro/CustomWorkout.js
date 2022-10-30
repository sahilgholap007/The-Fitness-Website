import React from "react";
import {db} from "../../firebase-config"
import { collection, addDoc} from "firebase/firestore"
import { useState} from "react";


export default function CustomWorkout() {

    const usersCollectionRef = collection(db, "workout");
    console.log(usersCollectionRef);

    const [newAge, setNewAge] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [newGoal, setNewGoal] = useState('');
    const [newInjuries, setNewInjuries] = useState('');
    const [newTreatments, setNewTreatments] = useState('');


    const createWorkout = async () => {
        await addDoc(usersCollectionRef, {
            Age: newAge,
            Height: newHeight,
            Weight: newWeight,
            Goal: newGoal,
            Injuries: newInjuries,
            Treatments: newTreatments
        }
        )
    }


    let redirect_Page = () => {
        alert("Hello! We Have Sucessfully Recived Your Information. You Will Recive Your Custom Workout Plan Within 24 Hours. Thank You For Choosing The Fitness World!!");
        createWorkout();
        let tID = setTimeout(function () {
            window.location.href = "/Pro/ProLanding";
            window.clearTimeout(tID);
        }, 2000);
    }

    return (
        <section className="custom-workout">
            <div className="dietform__container">
                <h1>Custom Workout</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptates, quod, voluptate, voluptas quia voluptatem quibusdam
                    accusantium quae quos quidem voluptatum. Quia, voluptate. Quisquam
                    voluptates, quod, voluptate, voluptas quia voluptatem quibusdam
                    accusantium quae quos quidem voluptatum. Quia, voluptate.
                </p>
            </div>
            <div className="workout-form">
                <h1>Design Your Workout</h1>
                <div>
                    <label type>Age</label>
                    <input onChange={(event)=>{setNewAge(event.target.value)}}></input>
                </div>
                <div>
                    <label>Height</label>
                    <input onChange={(event)=>{setNewHeight(event.target.value)}}></input>
                </div>
                <div>
                    <label>Weight</label>
                    <input onChange={(event)=>{setNewWeight(event.target.value)}}></input>
                </div>
                <div>
                    <label>Treatments</label>
                    <input onChange={(event)=>{setNewTreatments(event.target.value)}}></input>
                </div>
                <div>
                    <label>Injuries</label>
                    <input onChange={(event)=>{setNewInjuries(event.target.value)}}></input>
                </div>
                <div>
                    <label>Fitness Goal</label>
                    <input onChange={(event)=>{setNewGoal(event.target.value)}}></input>
                </div>
                {/* eslint-disable-next-line */}
                <a className="payment-btn" onClick={redirect_Page}>Submit</a>      
            </div>
        </section>
    )
}