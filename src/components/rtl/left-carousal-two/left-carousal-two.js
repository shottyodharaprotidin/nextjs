
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
const LeftCarousalTwo = () => {
    const optionTwo = {
        rtl:true,
        loop: true,
        items: 1,
        dots: true,
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        autoplay: true,
        autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
        autoplayHoverPause: true,
        nav: true,
        navText: [
            "<i class='ti ti-angle-left'></i>",
            "<i class='ti ti-angle-right'></i>"
        ]

    };
    return (
        <OwlCarousel id="owl-slider" className="owl-theme" {...optionTwo}>
        {/* Slider item one */}
        <div className="item">
            <div className="slider-post post-height-1">
                <a href="#" className="news-image">
                    <img
                        src="../../assets/images/slider-695x460-1.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="post-text">
                    <span className="post-category">
                        Health &amp; Fitness
                    </span>
                    <h2>
                        <a href="#">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard{" "}
                        </a>
                    </h2>
                    <ul className="authar-info d-flex flex-wrap">
                        <li className="authar">
                            <a href="#">by david hall</a>
                        </li>
                        <li className="date">May 29,2016</li>
                        <li className="view">
                            <a href="#">25 views</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
            <div className="slider-post post-height-1">
                <a href="#" className="news-image">
                    <img
                        src="../../assets/images/slider-695x460-2.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="post-text">
                    <span className="post-category">Nation</span>
                    <h2>
                        <a href="#">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard{" "}
                        </a>
                    </h2>
                    <ul className="authar-info d-flex flex-wrap">
                        <li className="authar">
                            <a href="#">by david hall</a>
                        </li>
                        <li className="date">May 29,2016</li>
                        <li className="view">
                            <a href="#">25 views</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
            <div className="slider-post post-height-1">
                <a href="#" className="news-image">
                    <img
                        src="../../assets/images/slider-695x460-3.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="post-text">
                    <span className="post-category">Games</span>
                    <h2>
                        <a href="#">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard{" "}
                        </a>
                    </h2>
                    <ul className="authar-info d-flex flex-wrap">
                        <li className="authar">
                            <a href="#">by david hall</a>
                        </li>
                        <li className="date">May 29,2016</li>
                        <li className="view">
                            <a href="#">25 views</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
            <div className="slider-post post-height-1">
                <a href="#" className="news-image">
                    <img
                        src="../../assets/images/slider-695x460-4.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="post-text">
                    <span className="post-category">Business</span>
                    <h2>
                        <a href="#">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard{" "}
                        </a>
                    </h2>
                    <ul className="authar-info d-flex flex-wrap">
                        <li className="authar">
                            <a href="#">by david hall</a>
                        </li>
                        <li className="date">May 29,2016</li>
                        <li className="view">
                            <a href="#">25 views</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
            <div className="slider-post post-height-1">
                <a href="#" className="news-image">
                    <img
                        src="../../assets/images/slider-695x460-5.jpg"
                        alt=""
                        className="img-fluid"
                    />
                </a>
                <div className="post-text">
                    <span className="post-category">Technology</span>
                    <h2>
                        <a href="#">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard{" "}
                        </a>
                    </h2>
                    <ul className="authar-info d-flex flex-wrap">
                        <li className="authar">
                            <a href="#">by david hall</a>
                        </li>
                        <li className="date">May 29,2016</li>
                        <li className="view">
                            <a href="#">25 views</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* /.Slider item five */}
    </OwlCarousel>
    );
};

export default LeftCarousalTwo;