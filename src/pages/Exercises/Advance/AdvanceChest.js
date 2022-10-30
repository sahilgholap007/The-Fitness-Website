import React from "react";

export default function AdvanceChest() {
    return(
        <section className="Advance">
            <div className="card-container">
                <div className="Flip-card">
                    <div className="Flip-card-front" id="barbell-bench-press" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
                <div className="Flip-card">
                    <div className="Flip-card-front" id="Weighted-pushups" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
                <div className="Flip-card">
                    <div className="Flip-card-front" id="Triceps-dips" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="Flip-card">
                    <div className="Flip-card-front" id="decline-onearm" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
                <div className="Flip-card">
                    <div className="Flip-card-front" id="decline-pushups" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
                <div className="Flip-card">
                    <div className="Flip-card-front" id="Dumbell-pullover" >
                        <h4>front</h4>
                    </div>
                    <div className="Flip-card-back">
                        <h4>back</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}