

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

const FeatureCarousal = () => {
    const optionFive={
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
            , 479: {
                items: 2
            }
            , 768: {
                items: 2
            }
            , 980: {
                items: 3
            }
            , 1199: {
                items: 4
            }
        }
    }
    return (
        <OwlCarousel id="featured-owl" {...optionFive}>
        <div className="item">
            <div className="featured-post">
                <a href="#" className="news-image">
                    <img
                        src="assets/images/featured-620x370-1.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="reatting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" />
                </div>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h4>Lorem Ipsum is simply dummy text of the printing </h4>
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
                </div>
            </div>
        </div>
        <div className="item">
            <div className="featured-post">
                <a href="#" className="news-image">
                    <img
                        src="assets/images/featured-620x370-2.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="reatting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" />
                </div>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h4>Lorem Ipsum is simply dummy text of the printing </h4>
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
                </div>
            </div>
        </div>
        <div className="item">
            <div className="featured-post">
                <a href="#" className="news-image">
                    <img
                        src="assets/images/featured-620x370-3.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="reatting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" />
                </div>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h4>Lorem Ipsum is simply dummy text of the printing </h4>
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
                </div>
            </div>
        </div>
        <div className="item">
            <div className="featured-post">
                <a href="#" className="news-image">
                    <img
                        src="assets/images/featured-620x370-4.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="reatting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" />
                </div>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h4>Lorem Ipsum is simply dummy text of the printing </h4>
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
                </div>
            </div>
        </div>
        <div className="item">
            <div className="featured-post">
                <a href="#" className="news-image">
                    <img
                        src="assets/images/featured-620x370-5.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="reatting">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <i className="fa fa-star-o" />
                </div>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h4>Lorem Ipsum is simply dummy text of the printing </h4>
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
                </div>
            </div>
        </div>
    </OwlCarousel>
    );
};

export default FeatureCarousal;