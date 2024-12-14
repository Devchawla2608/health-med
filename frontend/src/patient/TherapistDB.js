import React from "react";
import Landing from "../layout/Landing";

const TherapistsInfo = (props) => {
    return (
        <>
            <div class="col-xl-4 col-md-6 portfolio-item">
                <div class="portfolio-wrap">
                    <a href={props.imgsrc} data-gallery="portfolio-gallery-app"
                        class="glightbox"><img src={props.imgsrc} class="img-fluid"
                            alt="" /></a>
                    <div class="portfolio-info">
                        <h4><a href="/" title="More Details">{props.name}</a></h4>

                        <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#therapist-1'>
                                    Know More
                                </button>
                            </h3>
                            <div id={props.ids} class="accordion-collapse collapse" data-bs-parent="#faqlist">
                                <div class="accordion-body">
                                    <hr />
                                    <p><b>Phone </b> : 836489878</p>
                                    <hr />
                                    <p><b>Email</b> : {props.email}</p>
                                    <hr />
                                    <p><b>Fees</b> : {props.fees}</p>
                                    <hr />
                                    <p><a href=""><b>Know more</b></a></p>
                                    <hr />
                                    <p><b>Description</b></p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                        aperiam ex, fuga
                                        harum facere modi voluptatum accusamus praesentium, quidem, voluptate
                                        nostrum blanditiis.
                                        Assumenda dolorem repellat minus voluptas necessitatibus, aut aperiam?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
const Comp = () => {
    return (
        <>
            <section id="portfolio" class="portfolio sections-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Find Therapists</h2>
                        <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem
                            uia
                            reprehenderit sunt deleniti</p>
                    </div>

                    <div class="portfolio-isotope" data-portfolio-layout="masonry"
                        data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                        <div class="row gy-4 portfolio-container">
                            <TherapistsInfo
                                imgsrc="assets/img/blog/blog-author-4.jpg"
                                name="Anaya"
                                ids="therapist-1"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/blog/blog-author-3.jpg"
                                name="Anaya"
                                ids="therapist-2"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/blog/blog-author-2.jpg"
                                name="Anaya"
                                ids="therapist-3"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/testimonials/testimonials-1.jpg"
                                name="Anaya"
                                ids="therapist-4"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/testimonials/testimonials-5.jpg"
                                name="Anaya"
                                ids="therapist-5"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/testimonials/testimonials-4.jpg"
                                name="Anaya"
                                ids="therapist-6"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/testimonials/testimonials-3.jpg"
                                name="Anaya"
                                ids="therapist-7"
                                email="abc@gmail.com"
                                fees="500"
                            />
                            <TherapistsInfo
                                imgsrc="assets/img/testimonials/testimonials-2.jpg"
                                name="Anaya"
                                ids="therapist-8"
                                email="abc@gmail.com"
                                fees="500"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const TherapistDB = () => {
    return (
        <>
            <Landing />
        </>
    )
}

export default TherapistDB;