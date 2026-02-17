"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'


if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});


const TravelSlider = () => {
    const optionFour = {
        items: 1,
        loop: true,
        dots: false,
        margin: 12,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        nav: true,
        navText: [
            "<i class='ti ti ti-angle-left'></i>",
            "<i class='ti ti ti-angle-right'></i>"
        ]
    }
    return (
        <OwlCarousel className="post-slider owl-theme" {...optionFour}>
        {/* item one */}
        <div className="item">
            <div className="row">
                <div className="bord-right col-md-6">
                    <article>
                        <figure>
                            <a href="">
                                <img
                                    src="assets/images/340x215-3.jpg"
                                    height={242}
                                    width={345}
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                            <span className="post-category">Travel</span>
                        </figure>
                        <div className="post-info">
                            <h3>
                                <a href="#">
                                    Fusce ac orci sagittis mattis magna ultrices
                                    libero
                                </a>
                            </h3>
                            <ul className="authar-info d-flex flex-wrap">
                                <li>
                                    <i className="ti ti-timer" /> May 15, 2016
                                </li>
                                <li className="like">
                                    <a href="#">
                                        <i className="ti ti-thumb-up" />
                                        15 likes
                                    </a>
                                </li>
                            </ul>
                            <p className="p">
                                Sed ut perspiciatis unde omnis iste natus sit
                                voluptatem accusantium doloremque laudantium,
                                totamrem aperiam, eaque ipsa quae ab illo
                                inventore
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <div className="news-grid-2">
                        <div className="row row-margin">
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-play" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            Lorem Ipsum is simply dummy text of the
                                            printing.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-2.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader
                                            will be distracted by
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-3.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            There are many variations of passages of
                                            Lorem Ipsum.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-4.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-play" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            Contrary to popular belief, Lorem Ipsum is
                                            not simply random text.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* item two */}
        <div className="item">
            <div className="row">
                <div className="bord-right col-md-6">
                    <article>
                        <figure>
                            <a href="">
                                <img
                                    src="assets/images/340x215-4.jpg"
                                    height={242}
                                    width={345}
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                            <span className="post-category">Travel</span>
                        </figure>
                        <div className="post-info">
                            <h3>
                                <a href="#">
                                    Fusce ac orci sagittis mattis magna ultrices
                                    libero
                                </a>
                            </h3>
                            <ul className="authar-info d-flex flex-wrap">
                                <li>
                                    <i className="ti ti-timer" /> May 15, 2016
                                </li>
                                <li className="like">
                                    <a href="#">
                                        <i className="ti ti-thumb-up" />
                                        15 likes
                                    </a>
                                </li>
                            </ul>
                            <p className="p">
                                Sed ut perspiciatis unde omnis iste natus sit
                                voluptatem accusantium doloremque laudantium,
                                totamrem aperiam, eaque ipsa quae ab illo
                                inventore
                            </p>
                        </div>
                    </article>
                </div>
                <div className="col-md-6">
                    <div className="news-grid-2">
                        <div className="row row-margin">
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-5.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            Lorem Ipsum is simply dummy text of the
                                            printing.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-6.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader
                                            will be distracted by
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-7.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            There are many variations of passages of
                                            Lorem Ipsum.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-6 col-padding col-sm-6">
                                <div className="grid-item">
                                    <div className="grid-item-img">
                                        <a href="#">
                                            <img
                                                src="assets/images/165x110-8.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div className="link-icon">
                                                <i className="fa fa-camera" />
                                            </div>
                                        </a>
                                    </div>
                                    <h5>
                                        <a href="#" className="title">
                                            Contrary to popular belief, Lorem Ipsum is
                                            not simply random text.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>May 15, 2016</li>
                                        <li className="like hidden-sm">
                                            <a href="#">15 likes</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OwlCarousel>
    );
};

export default TravelSlider;