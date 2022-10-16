import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing"
import Workouts from "./pages/Workouts"
import Beginner from "./pages/Beginner"
import Intermediate from "./pages/Intermediate"
import Advance from "./pages/Advance"
import Diet from "./pages/Diet"

export default function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Workouts" element={<Workouts />} />
            <Route path="/Diet" element={<Diet />} />
            <Route path="/Beginner" element={<Beginner/>}/>
            <Route path="/Intermediate" element={<Intermediate/>}/>
            <Route path="/Advance" element={<Advance/>}/>
        </Routes>
    </Router>
    )
}