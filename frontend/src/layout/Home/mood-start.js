import React from "react";
import { Link } from 'react-router-dom';

const MoodStart = () => {
    return (
        <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4 align-items-center">

                    <div className="col-lg-6">
                        <img src="assets/img/Feeling.png" alt="" class="img-fluid" />
                    </div>

                    <div className="col-lg-6">

                        <div className="stats-item d-flex align-items-center">
                            <h2>Feeling Low ? <span style={{ marginTop: '3%' }}>Avail mood tracking service and earn rewards</span> </h2>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default MoodStart;