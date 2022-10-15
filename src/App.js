import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from "./pages/Landing"
import Workouts from "./pages/Workouts"

export default function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Workouts" element={<Workouts />} />
        </Routes>
    </Router>
    )
}