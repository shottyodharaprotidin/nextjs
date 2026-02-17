
"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import Link from "next/link";

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
    ssr: false,
});

const RelatedArticles = () => {
    const optionThree = {
        rtl:true,
        items: 1,
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        navText: [
            "<i class='ti ti-angle-left'></i>",
            "<i class='ti ti-angle-right'></i>"
        ]

    }
    return (
        <OwlCarousel className="post-slider owl-theme" {...optionThree}>
            {/* item one */}
            <div className="item">
                <div className="news-grid-2">
                    <div className="row row-margin">
                        <div className="col-xs-6 col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-play" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing.
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        It is a long established fact that a reader will
                                        be distracted by
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-3.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        There are many variations of passages of Lorem
                                        Ipsum.
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* item two */}
            <div className="item">
                <div className="news-grid-2">
                    <div className="row row-margin">
                        <div className="col-xs-6 col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-4.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-play" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        Lorem Ipsum is simply dummy text of the
                                        printing.
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-2.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        It is a long established fact that a reader will
                                        be distracted by
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-padding">
                            <div className="grid-item">
                                <div className="grid-item-img">
                                    <Link href="#">
                                        <img
                                            src="../../assets/images/218x150-1.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                        <div className="link-icon">
                                            <i className="fa fa-camera" />
                                        </div>
                                    </Link>
                                </div>
                                <h5>
                                    <Link href="#" className="title">
                                        There are many variations of passages of Lorem
                                        Ipsum.
                                    </Link>
                                </h5>
                                <ul className="authar-info d-flex flex-wrap">
                                    <li>May 15, 2016</li>
                                    <li className="hidden-sm">
                                        <Link href="#" className="link">
                                            15 likes
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    );
};

export default RelatedArticles;