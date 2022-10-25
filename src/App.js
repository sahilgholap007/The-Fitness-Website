import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Workouts from "./pages/Workouts"
import Beginner from "./pages/Beginner"
import Intermediate from "./pages/Intermediate"
import Advance from "./pages/Advance"
import Diet from "./pages/Diet"
import Pro from "./pages/Pro"

// Advance
import advanceOne from "./pages/Exercises/Advance/advance-one"
import advanceTwo from "./pages/Exercises/Advance/advance-two"
import advanceThree from "./pages/Exercises/Advance/advance-three"
import advanceFour from "./pages/Exercises/Advance/advance-four"
import advanceFive from "./pages/Exercises/Advance/advance-five"
import advanceSix from "./pages/Exercises/Advance/advance-six"


export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Workouts" element={<Workouts />} />
                <Route path="/Diet" element={<Diet />} />
                <Route path="/Beginner" element={<Beginner />} />
                <Route path="/Intermediate" element={<Intermediate />} />
                <Route path="/Advance" element={<Advance />} />
                <Route path="/Pro" element={<Pro />} />
                // Advance
                <Route path="/Advance/advance-one" element={<advanceOne />} />
                <Route path="/Advance/advance-two" element={<advanceTwo />} />
                <Route path="/Advance/advance-three" element={<advanceThree />} />
                <Route path="/Advance/advance-four" element={<advanceFour />} />
                <Route path="/Advance/advance-five" element={<advanceFive />} />
                <Route path="/Advance/advance-six" element={<advanceSix />} />
            </Routes>
        </Router>
    )
}