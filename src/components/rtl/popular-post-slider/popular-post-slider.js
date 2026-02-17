
"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
    ssr: false,
});

const PopularPostSlider = () => {
    const optionThree = {
        rtl:true,
        items: 1,
        loop: true,
        margin: 12,
        dots: false,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        nav: true,
        navText: [
            "<i class='ti ti ti-angle-left'></i>",
            "<i class='ti ti ti-angle-right'></i>"
        ]
    }
    return (
        <OwlCarousel className="post-slider owl-theme" {...optionThree}>
            {/* item one */}
            <div className="item">
                <div className="row">
                    <div className="bord-right col-md-6">
                        <article>
                            <figure>
                                <a href="">
                                    <img
                                        src="../../assets/images/340x215-1.jpg"
                                        height={242}
                                        width={345}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <span className="post-category">Business</span>
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
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus sit
                                    voluptatem accusantium doloremque laudantium,
                                    totamrem aperiam, eaque ipsa quae ab illo
                                    inventore
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <div className="news-list">
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Cooking Recipes Anytime And Anywhere
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-2.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-play" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Lorem Ipsum is simply dummy text of the.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-3.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            It is a long established fact that a reader
                                            will.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-play" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Contrary to popular belief, Lorem Ipsum is.
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
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
                                        src="../../assets/images/340x215-2.jpg"
                                        height={242}
                                        width={345}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                                <span className="post-category">Business</span>
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
                                <p>
                                    {" "}
                                    Sed ut perspiciatis unde omnis iste natus sit
                                    voluptatem accusantium doloremque laudantium,
                                    totamrem aperiam, eaque ipsa quae ab illo
                                    inventore
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-md-6">
                        <div className="news-list">
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-4.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Cooking Recipes Anytime And Anywhere
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-3.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Cooking Recipes Anytime And Anywhere
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-2.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Cooking Recipes Anytime And Anywhere
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="news-list-item">
                                <div className="img-wrapper">
                                    <a href="#" className="thumb">
                                        <img
                                            src="../../assets/images/115x85-1.jpg"
                                            alt=""
                                            className="img-fluid"
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </a>
                                </div>
                                <div className="post-info-2">
                                    <h5>
                                        <a href="#" className="title">
                                            Cooking Recipes Anytime And Anywhere
                                        </a>
                                    </h5>
                                    <ul className="authar-info d-flex flex-wrap">
                                        <li>
                                            <i className="ti ti-timer" /> May 15, 2016
                                        </li>
                                        <li className="d-lg-block d-none like">
                                            <a href="#">
                                                <i className="ti ti-thumb-up" />
                                                15 likes
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
};

export default PopularPostSlider;