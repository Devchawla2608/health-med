import React from 'react'

const Your_Therapist = () => {
    return (
        <section id="team" className="team">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Your Therapist</h2>
                    <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis
                    </p>
                </div>

                <div className="row" style={{
                        justifyContent: "center",
                        display: "flex",
                }}>

                    <div className="col-xl-4 col-md-4 d-flex justify-content-centre align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="member featured">
                            <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                            <h4>Sarah Jhinson</h4>
                            <a href="/">Know more</a>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Your_Therapist
