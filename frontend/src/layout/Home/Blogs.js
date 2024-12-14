import React from "react";

const Blog = () => {
    return (
        <section id="recent-posts" className="recent-posts sections-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Recent Blog Posts</h2>
                    <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
                        accusamus fugit aut qui distinctio</p>
                </div>

                <div className="row gy-4">

                    <div className="col-xl-4 col-md-6">
                        <article>

                            <div className="post-img">
                                <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid" />
                            </div>

                            <p className="post-category">PsychPedia</p>

                            <h2 className="title">
                                <a href="https://www.goodtherapy.org/blog/psychpedia/what-is-quality-of-life">Questions that upgrade
                                    your quality if life</a>
                            </h2>

                            <div className="d-flex align-items-center">
                                <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                <div className="post-meta">
                                    <p className="post-author">Maria Doe</p>
                                    <p className="post-date">
                                        <time datetime="2022-01-01">Jan 1, 2022</time>
                                    </p>
                                </div>
                            </div>

                        </article>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <article>

                            <div className="post-img">
                                <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
                            </div>

                            <p className="post-category">GoodTherapy Blog</p>

                            <h2 className="title">
                                <a href="https://www.goodtherapy.org/blog/therapy/">How to Get the Most Out of Your Therapy Journey</a>
                            </h2>

                            <div className="d-flex align-items-center">
                                <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                <div className="post-meta">
                                    <p className="post-author">Allisa Mayer</p>
                                    <p className="post-date">
                                        <time datetime="2022-01-01">Jun 5, 2022</time>
                                    </p>
                                </div>
                            </div>

                        </article>
                    </div>

                    <div className="col-xl-4 col-md-6">
                        <article>

                            <div className="post-img">
                                <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
                            </div>

                            <p className="post-category"> NAMI Blog</p>

                            <h2 className="title">
                                <a
                                    href="https://www.nami.org/Blogs/NAMI-Blog/October-2022/5-Truths-I-Discovered-on-My-Road-to-Recovery">5
                                    Truths I Discovered on My Road to Recovery</a>
                            </h2>

                            <div className="d-flex align-items-center">
                                <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                <div className="post-meta">
                                    <p className="post-author">Mark Dower</p>
                                    <p className="post-date">
                                        <time datetime="2022-01-01">Jun 22, 2022</time>
                                    </p>
                                </div>
                            </div>

                        </article>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Blog;