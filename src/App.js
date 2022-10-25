import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Workouts from "./pages/Workouts"
import Beginner from "./pages/Beginner"
import Intermediate from "./pages/Intermediate"
import Advance from "./pages/Advance"
import Diet from "./pages/Diet"
import Pro from "./pages/Pro"
import Signin from "./pages/Pro/Signin"
import Signup from "./pages/Pro/Signup"

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
                
                <Route path="/Advance/advance-one" element={<advanceOne />} />
                <Route path="/Advance/advance-two" element={<advanceTwo />} />
                <Route path="/Advance/advance-three" element={<advanceThree />} />
                <Route path="/Advance/advance-four" element={<advanceFour />} />
                <Route path="/Advance/advance-five" element={<advanceFive />} />
                <Route path="/Advance/advance-six" element={<advanceSix />} />
                
                <Route path="Pro/Signin" element={<Signin />} />
                <Route path="Pro/Signup" element={<Signup />} />
            </Routes>
        </Router>
    )
}