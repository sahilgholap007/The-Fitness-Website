import React from "react";
import Intro from "../Components/intro";
import Exersise from "../Components/Exercise";
import Overview from "../Components/Overview";
import Navbar from "../Components/Navbar";

export default function Landing() {
    return (
        <div>
            <Navbar/>
            <Intro/>
            <Overview/>
            <Exersise/>
        </div>
    )
}