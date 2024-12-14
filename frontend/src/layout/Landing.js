import React from "react";

const Landing = () => {
    return (
        <section id="hero" className="hero">
            <div className="container position-relative">
                <div className="row gy-5" data-aos="fade-in">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h2>Welcome to <span>TheraMed</span></h2>
                        <p> A platform developed For best experience for both the user and the therapist.
                        </p>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="#stats-counter" className="btn-get-started">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src="assets/img/mainbg.png" class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                    </div>
                </div>
            </div>

            <div className="icon-boxes position-relative">
                <div className="container position-relative">
                    <div className="row gy-4 mt-5">

                        <div className="col-xl-3 col-md-6" data-aos="fade-down" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-easel"></i></div>
                                <h4 className="title"><a href="/video-chat" className="stretched-link">Video chat</a>
                                </h4>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-6" data-aos="fade-down" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-gem"></i></div>
                                <h4 className="title"><a href="/" className="stretched-link">Earn some reward
                                    points</a></h4>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                <h4 className="title"><a href="/chat" className="stretched-link"> Chat with
                                    therapist </a></h4>
                            </div>
                        </div>


                        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="icon-box">
                                <div className="icon"><i className="bi bi-command"></i></div>
                                <h4 className="title"><a href="/" className="stretched-link">Book a session</a>
                                </h4>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;