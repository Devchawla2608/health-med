import React from 'react';

const PatientsInfo = (props) => {
    return (
        <>
            <div class="col-xl-4 col-md-6 portfolio-item">
                <div class="portfolio-wrap">
                    <a href={props.imgsrc} data-gallery="portfolio-gallery-app"
                        class="glightbox"><img src={props.imgsrc} class="img-fluid"
                            alt="" /></a>
                    <div class="portfolio-info">
                        <h4><a href="/" title="More Details">{props.name}</a></h4>

                        <div class="btn-group dropup">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Know More
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li className="dropdown-item">Phone : 9458695028</li>
                                <li className="dropdown-item">Email : {props.email}</li>
                                <li className="dropdown-item">Mood-Tracking Info : <p>Mood today is happy </p> </li>
                                <li>
                                    <form>
                                        Session taken succesfully? <input type="checkbox" /> <br />
                                        Task completed by patient? <input type="checkbox" />

                                        <button></button>
                                    </form>
                                </li>
                            </ul>
                        </div>


                        {/* <div class="accordion-item">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target='#patient-1'>
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
                                    <p><b>Mood-Tracking Info</b></p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                        aperiam ex, fuga
                                        harum facere modi voluptatum accusamus praesentium, quidem, voluptate
                                        nostrum blanditiis.
                                        Assumenda dolorem repellat minus voluptas necessitatibus, aut aperiam?
                                    </p>
                                </div>
                            </div> 
                    </div>*/}
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
                        <h2>Your Patients</h2>
                        <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem
                            uia
                            reprehenderit sunt deleniti</p>
                    </div>

                    <div class="portfolio-isotope" data-portfolio-layout="masonry"
                        data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                        <div class="row gy-4 portfolio-container">
                            <PatientsInfo
                                imgsrc="assets/img/blog/blog-author-4.jpg"
                                name="Anaya"
                                ids="patient-1"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/blog/blog-author-3.jpg"
                                name="Anaya"
                                ids="patient-2"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/blog/blog-author-2.jpg"
                                name="Anaya"
                                ids="patient-3"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/testimonials/testimonials-1.jpg"
                                name="Anaya"
                                ids="patient-4"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/testimonials/testimonials-5.jpg"
                                name="Anaya"
                                ids="patient-5"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/testimonials/testimonials-4.jpg"
                                name="Anaya"
                                ids="patient-6"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/testimonials/testimonials-3.jpg"
                                name="Anaya"
                                ids="patient-7"
                                email="abc@gmail.com"
                            />
                            <PatientsInfo
                                imgsrc="assets/img/testimonials/testimonials-2.jpg"
                                name="Anaya"
                                ids="patient-8"
                                email="abc@gmail.com"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const Your_Patients = () => {
    return (
        <>
            <Comp />
        </>
    )
}

export default Your_Patients
