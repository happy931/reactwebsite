import React from "react";
// import Login from './login.js';
// import {BrowserRouter as  Router, Switch, Route, Link, NavLink} from "react-router-dom";


class Home extends React.Component {
    render() {
        return (
            <div><div class="hero_area">

                <div class="hero_bg_box">
                    <img src="./assets/images/hero-bg.jpg" alt="" />
                </div>

                 {/* header section strats  */}
                <header class="header_section">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                                <span>
                                    Happy Home
                                </span>
                            </a>

                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class=""> </span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html"> About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="service.html">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="gallery.html">Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul> */}
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="">Logout <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active">
                                        <a class="nav-link" href="index.html">Free SignUp <span class="sr-only">(current)</span></a>
                                    </li>
                                    </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- end header section --> */}
                {/* <!-- slider section --> */}
                <section class="slider_section ">
                    <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-lg-8 col-xl-6 mx-auto ">
                                            <div class="detail-box">
                                                <h1>
                                                    We Are <br />
                                                        Wedding Planners
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-lg-8 col-xl-6 mx-auto ">
                                            <div class="detail-box">
                                                <h1>
                                                    We Are <br />
                                                        Wedding Planners
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="container ">
                                    <div class="row">
                                        <div class="col-lg-8 col-xl-6 mx-auto ">
                                            <div class="detail-box">
                                                <h1>
                                                    We Are <br />
                                                        Wedding Planners
                                                </h1>
                                                <p>
                                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                </p>
                                                <div class="btn-box">
                                                    <a href="" class="btn1">
                                                        Contact Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel_btn-box">
                            <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                </section>
                {/* <!-- end slider section --> */}
            </div>

                {/* <!-- about section --> */}

                <section class="about_section layout_padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 ">
                                <div class="detail-box">
                                    <div class="heading_container ">
                                        <h2>
                                            About Us
                                        </h2>
                                    </div>
                                    <p>
                                        Quas ab excepturi fuga magni dolor libero id error dolore quo laborum. Facilis atque architecto fugiat laboriosam eaque tempore sed, facere dicta labore eum vero, porro in minima quae corrupti!
                                        Earum, nam? Nostrum illum, maxime, eligendi soluta iste doloremque quae magnam necessitatibus ipsum, porro molestiae quasi quos totam facilis rem rerum sint voluptatibus. Molestias iure perspiciatis ipsam, esse nemo architecto?
                                    </p>
                                    <div class="btn-box">
                                        <a href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 img_container">
                                <div class="row">
                                    <div class="col-6">
                                        <img src="./assets/images/a1.jpg" class="about_img1" alt="" />
                                    </div>
                                    <div class="col-6 px-0">
                                        <img src="./assets/images/a2.jpg" class="about_img2" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end about section --> */}


                {/* <!-- service section --> */}

                <section class="service_section layout_padding-bottom">
                    <div class="service_container">
                        <div class="container ">
                            <div class="heading_container heading_center">
                                <h2>
                                    Our Services
                                </h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s1.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Wedding Planning
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s2.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Wedding Decor
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s3.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Wedding Photography
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s4.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Wedding Venues
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s5.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Catering
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6 ">
                                    <div class="box ">
                                        <div class="img-box">
                                            <img src="./assets/images/s6.png" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Bridal Styling
                                            </h5>
                                            <p>
                                                Voluptates consequatur, fugiat quisquam sit sed perferendis laborum eaque, totam inventore sint nam doloribus libero quo. Molestiae numquam perspiciatis id.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-box">
                                <a href="">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end service section -->

                <!-- gallery section --> */}

                <section class="gallery_section layout_padding" id="gallery">
                    <div class="container">
                        <div class="heading_container heading_center">
                            <h2>
                                Our Gallery
                            </h2>
                            <p>
                                minim veniam, quis nostrud exercitation ullamco laboris nisi
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div class="box ">
                                    <img src="./assets/images/g1.jpg" alt="" />
                                        <div class="btn-box">
                                            <a href="images/g2.jpg" data-toggle="lightbox" class="btn-1">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div class="box ">
                                    <img src="./assets/images/g2.jpg" alt="" />
                                        <div class="btn-box">
                                            <a href="images/g2.jpg" data-toggle="lightbox" class="btn-1">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div class="box ">
                                    <img src="./assets/images/g3.jpg" alt="" />
                                        <div class="btn-box">
                                            <a href="images/g2.jpg" data-toggle="lightbox" class="btn-1">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-3 mx-auto">
                                <div class="box ">
                                    <img src="./assets/images/g4.jpg" alt="" />
                                        <div class="btn-box">
                                            <a href="images/g2.jpg" data-toggle="lightbox" class="btn-1">
                                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="see_btn">
                            <a href="">
                                See More
                            </a>
                        </div>
                    </div>
                </section>

                {/* <!-- end gallery section -->

                <!-- contact section --> */}
                <section class="contact_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form_container contact-form">
                                    <form action="">
                                        <div>
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="text" class="message-box" placeholder="Message" />
                                        </div>
                                        <div class="btn_box">
                                            <button>
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="map_container">
                                    <div class="map">
                                        <div id="googleMap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- end contact section -->

                <!-- client section --> */}

                <section class="client_section layout_padding-bottom">
                    <div class="container">
                        <div class="heading_container heading_center">
                            <h2>
                                Testimonial
                            </h2>
                        </div>
                        <div id="carouselExample2Indicators" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="client_box">
                                        <div class="img-box">
                                            <img src="./assets/images/client.jpg" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Ethan & Laila
                                            </h5>
                                            <p>
                                                Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="client_box">
                                        <div class="img-box">
                                            <img src="./assets/images/client.jpg" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Ethan & Laila
                                            </h5>
                                            <p>
                                                Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="client_box">
                                        <div class="img-box">
                                            <img src="./assets/images/client.jpg" alt="" />
                                        </div>
                                        <div class="detail-box">
                                            <h5>
                                                Ethan & Laila
                                            </h5>
                                            <p>
                                                Numquam animi sit minus sequi veniam quisquam laborum quibusdam cupiditate debitis corrupti a voluptate placeat eligendi officiis recusandae laboriosam maxime quis dolore soluta doloremque, vel aliquid repudiandae assumenda. Aliquam, necessitatibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExample2Indicators" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExample2Indicators" data-slide-to="1"></li>
                                <li data-target="#carouselExample2Indicators" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </section>

                {/* <!-- end client section -->

                <!-- info section --> */}
                <section class="info_section ">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="info_contact_container ">
                                    <h5>
                                        Get in touch
                                    </h5>
                                    <div class="info_contact">
                                        <div class="contact_link_box">
                                            <a href="">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <span>
                                                    Location
                                                </span>
                                            </a>
                                            <a href="">
                                                <i class="fa fa-phone" aria-hidden="true"></i>
                                                <span>
                                                    Call +01 1234567890
                                                </span>
                                            </a>
                                            <a href="">
                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                <span>
                                                    demo@gmail.com
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info_social_container">
                                    <h5>
                                        Follow Us
                                    </h5>
                                    <div class="info_social">
                                        <a href="">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-vimeo" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <!-- end info_section -->

                <!-- footer section --> */}
                <section class="footer_section">
                    <div class="container">
                        <p>
                            &copy; <span id="displayYear"></span> All Rights Reserved By
                            <a href="https://html.design/">Free Html Templates</a>
                        </p>
                    </div>
                </section>
                {/* <!-- footer section --> */}
                </div>
        )
    }
}

export default Home;