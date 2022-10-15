import React from "react";
import Intro from "../Components/intro";
import Exersise from "../Components/Exercise";
import Overview from "../Components/Overview";

export default function Landing() {
    return (
        <div>
            <Intro/>
            <Overview/>
            <Exersise/>
        </div>
    )
}