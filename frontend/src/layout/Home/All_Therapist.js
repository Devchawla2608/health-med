import React from "react";

const All_Therapist = () => {
    return (
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Find Your Therapist</h2>
                    <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis
                    </p>
                </div>

                <div className="row gy-4">

                    <div className="col-xl-4 col-md-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="member">
                            <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />
                            <h4>Walter White</h4>
                            <a href="/">Know more</a>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 d-flex " data-aos="fade-up" data-aos-delay="200">
                        <div className="member featured">
                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                            <h4>Sarah Jhinson</h4>
                            <a href="/">Know more</a>
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div className="member">
                            <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                            <h4>William Anderson</h4>
                            <a href="/">Know more</a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default All_Therapist;