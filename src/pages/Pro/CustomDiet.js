import React from "react";
import { useState} from "react";
import {db} from "../../firebase-config"
import { collection, addDoc} from "firebase/firestore"

export default function Dietform() {

    const usersCollectionRef = collection(db, "diet");

    const [newAge, setNewAge] = useState('');
    const [newHeight, setNewHeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newPreference, setNewPreference] = useState('');
    const [newAllergies, setNewAllergies] = useState('');
    const [newDislikes, setNewDislikes] = useState('');
    const [newGoal, setNewGoal] = useState('');

    const createDiet = async () => {
        await addDoc(usersCollectionRef, {
            Age: newAge,
            Height: newHeight,
            Weight: newWeight,
            Gender: newGender,
            Preference: newPreference,
            Allergies: newAllergies,
            Dislikes: newDislikes,
            Goal: newGoal
        }
        )
    }

    let redirect_Page = () => {
        alert("Hello! We Have Sucessfully Recived Your Information. You Will Recive Your Custom Diet Plan Within 24 Hours. Thank You For Choosing The Fitness World!!");
        createDiet();
        let tID = setTimeout(function () {
            window.location.href = "/Pro/ProLanding";
            window.clearTimeout(tID);
        }, 2000);
    }

    return (
        <section className="dietform">
            <div className="dietform__container">
                <h1>Diet Form</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptates, quod, voluptate, voluptas quia voluptatem quibusdam
                    accusantium quae quos quidem voluptatum. Quia, voluptate. Quisquam
                    voluptates, quod, voluptate, voluptas quia voluptatem quibusdam
                    accusantium quae quos quidem voluptatum. Quia, voluptate.
                </p>
            </div>
            <div className="diet-form">
                <h1>Design Your Diet</h1>
                <div>
                    <label type>Age</label>
                    <input onChange={(event) => {setNewAge(event.target.value)}}></input>
                </div>
                <div>
                    <label>Gender</label>
                    <input onChange={(event) => {setNewGender(event.target.value)}}></input>
                </div>
                <div>
                    <label>Height</label>
                    <input onChange={(event) => {setNewHeight(event.target.value)}}></input>
                </div>
                <div>
                    <label>Weight</label>
                    <input onChange={(event) => {setNewWeight(event.target.value)}}></input>
                </div>
                <div>
                    <label>Preferences</label>
                    <input onChange={(event) => {setNewPreference(event.target.value)}}></input>
                </div>
                <div>
                    <label>Allergies</label>
                    <input onChange={(event) => {setNewAllergies(event.target.value)}}></input>
                </div>
                <div>
                    <label>Disliked food</label>
                    <input onChange={(event) => {setNewDislikes(event.target.value)}}></input>
                </div>
                <div>
                    <label>Fitness Goal</label>
                    <input onChange={(event) => {setNewGoal(event.target.value)}}></input>
                </div>
                {/* eslint-disable-next-line */}
                <a className="payment-btn" onClick={redirect_Page}>Submit</a>      
            </div>
        </section>
    );
}