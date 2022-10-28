import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Workouts from "./pages/Workouts"
import Beginner from "./pages/Beginner"
import Intermediate from "./pages/Intermediate"
import Advance from "./pages/Advance"
import Diet from "./pages/Diet"

//Pro
import Pro from "./pages/Pro"
import Signin from "./pages/Pro/Signin"
import Signup from "./pages/Pro/Signup"
import Payment from "./pages/Pro/Payment"
import ProLanding from "./pages/Pro/ProLanding"
import Knowmore from "./pages/Pro/Knowmore"
import CustomDiet from "./pages/Pro/CustomDiet"
import CustomWorkout from "./pages/Pro/CustomWorkout"

//Exercises

//Beginner
import BeginnerChest from "./pages/Exercises/Beginner/BeginnerChest"
import BeginnerBack from "./pages/Exercises/Beginner/BeginnerBack"
import BeginnerShoulders from "./pages/Exercises/Beginner/BeginnerShoulders"
import BeginnerArms from "./pages/Exercises/Beginner/BeginnerArms"
import BeginnerLegs from "./pages/Exercises/Beginner/BeginnerLegs"
import BeginnerAbs from "./pages/Exercises/Beginner/BeginnerAbs"

//Intermediate
import IntermediateChest from "./pages/Exercises/Intermediate/IntermediateChest"
import IntermediateBack from "./pages/Exercises/Intermediate/IntermediateBack"
import IntermediateShoulders from "./pages/Exercises/Intermediate/IntermediateShoulders"
import IntermediateArms from "./pages/Exercises/Intermediate/IntermediateArms"
import IntermediateLegs from "./pages/Exercises/Intermediate/IntermediateLegs"
import IntermediateAbs from "./pages/Exercises/Intermediate/IntermediateAbs"

//Advance
import AdvanceChest from "./pages/Exercises/Advance/AdvanceChest"
import AdvanceBack from "./pages/Exercises/Advance/AdvanceBack"
import AdvanceShoulders from "./pages/Exercises/Advance/AdvanceShoulders"
import AdvanceArms from "./pages/Exercises/Advance/AdvanceArms"
import AdvanceLegs from "./pages/Exercises/Advance/AdvanceLegs"
import AdvanceAbs from "./pages/Exercises/Advance/AdvanceAbs"


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

                {/* Pro */}
                <Route path="/Pro" element={<Pro />} />           
                <Route path="Pro/Signin" element={<Signin />} />
                <Route path="Pro/Signup" element={<Signup />} />
                <Route path="Pro/ProLanding" element={<ProLanding />} />
                <Route path="Pro/Payment" element={<Payment />} />
                <Route path="pro/ProLanding/Knowmore" element={<Knowmore />} />
                <Route path="pro/ProLanding/CustomDiet" element={<CustomDiet />} />
                <Route path="pro/ProLanding/CustomWorkout" element={<CustomWorkout />} />

                {/* Exercises */}

                {/* Beginner */}
                <Route path="/Workouts/Beginner/BeginnerChest" element={<BeginnerChest/>}/>
                <Route path="/Workouts/Beginner/BeginnerBack" element={<BeginnerBack/>}/>
                <Route path="/Workouts/Beginner/BeginnerShoulders" element={<BeginnerShoulders/>}/>
                <Route path="/Workouts/Beginner/BeginnerArms" element={<BeginnerArms/>}/>
                <Route path="/Workouts/Beginner/BeginnerLegs" element={<BeginnerLegs/>}/>
                <Route path="/Workouts/Beginner/BeginnerAbs" element={<BeginnerAbs/>}/>

                {/*Intermediate*/}
                <Route path="/Workouts/Intermediate/IntermediateChest" element={<IntermediateChest/>}/>
                <Route path="/Workouts/Intermediate/IntermediateBack" element={<IntermediateBack/>}/>
                <Route path="/Workouts/Intermediate/IntermediateShoulders" element={<IntermediateShoulders/>}/>
                <Route path="/Workouts/Intermediate/IntermediateArms" element={<IntermediateArms/>}/>
                <Route path="/Workouts/Intermediate/IntermediateLegs" element={<IntermediateLegs/>}/>
                <Route path="/Workouts/Intermediate/IntermediateAbs" element={<IntermediateAbs/>}/>

                {/*Advance*/}
                <Route path="/Workouts/Advance/AdvanceChest" element={<AdvanceChest/>}/>
                <Route path="/Workouts/Advance/AdvanceBack" element={<AdvanceBack/>}/>
                <Route path="/Workouts/Advance/AdvanceShoulders" element={<AdvanceShoulders/>}/>
                <Route path="/Workouts/Advance/AdvanceArms" element={<AdvanceArms/>}/>
                <Route path="/Workouts/Advance/AdvanceLegs" element={<AdvanceLegs/>}/>
                <Route path="/Workouts/Advance/AdvanceAbs" element={<AdvanceAbs/>}/>

            </Routes>
        </Router>
    )
}