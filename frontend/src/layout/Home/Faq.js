import React from "react";

const Faq = () => {
    return (
        <section id="faq" className="faq">
            <div className="container" data-aos="fade-up">

                <div className="row gy-4">

                    <div className="col-lg-4">
                        <div className="content px-xl-5">
                            <h3>Frequently Asked <strong>Questions</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-8">

                        <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-1">
                                        <span className="num">1.</span>
                                        Can I do all my sessions over the internet?
                                    </button>
                                </h3>
                                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        Yes, you can. Many of our therapists now work with clients over secure video platforms like Skype or
                                        Zoom. If you would like to attend in person where possible and over the internet otherwise, you can
                                        discuss this blended approach with your therapist.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-2">
                                        <span className="num">2.</span>
                                        What kinds of people seek counselling?
                                    </button>
                                </h3>
                                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        There is no barrier to whom counselling can assist. We welcome you, regardless of your culture,
                                        religion, gender, sexual orientation, or employment group. Counselling is also not just for adult
                                        individuals, but is beneficial for couples, families, teenagers and children.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-3">
                                        <span className="num">3.</span>
                                        What if I want to try more than one kind of therapy?
                                    </button>
                                </h3>
                                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        Many therapists nowadays are what is known as 'integrative', meaning they are trained in and combine
                                        a variety of psychotherapeutic approaches to best help their clients. If this is of interest, look
                                        at individual profiles under 'Therapists' to find one that offers the therapies you are interested
                                        in, or call us and we can advise you further.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-4">
                                        <span className="num">4.</span>
                                        How experienced is my therapist?
                                    </button>
                                </h3>
                                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        The therapists all have a minimum of seven years clinical experience that often includes time spent
                                        working for the NHS ✓.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-5">
                                        <span className="num">5.</span>
                                        What happens if I don't think the therapist is a good match for me?
                                    </button>
                                </h3>
                                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        If you do not feel the therapist is a good match, we offer you a free consultation with one other
                                        therapist of your choice.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h3 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-content-6">
                                        <span className="num">6.</span>
                                        Can a counsellor prescribe medication if I need it?
                                    </button>
                                </h3>
                                <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                    <div className="accordion-body">
                                        The counsellors are not eligible to prescribe medication. There is, however, a private consultant
                                        psychiatrist who can assess you for a prescription, and this can complement your therapy work.
                                        Please note that the fee for psychiatry is significantly higher than that for counselling.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Faq;