"use client"
import LayoutTwo from "@/components/rtl/layout/layout-two";
import LeftCarousal from "@/components/rtl/left-carousal/left-carousal";
import useRemoveBodyClass from "@/components/rtl/useEffect-hook/useEffect-hook";
import Link from "next/link";
import { useEffect } from "react";
import StickyBox from "react-sticky-box";


const page = () => {
    useEffect(() => {
        // Your logic for setting dir attribute using JavaScript
        // For example:
        document.documentElement.setAttribute('dir', 'rtl');
    }, []);
    useRemoveBodyClass(['None','layout-rtl'], ['home-seven', 'home-nine','boxed-layout','home-six','home-two']);
    return (
        <LayoutTwo>
            {/* START PAGE TITLE */}
            <div className="page-title">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="col">
                            <h1 className="mb-sm-0">
                                <strong>Category Style</strong> Three
                            </h1>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-inline-block">
                                    <li className="breadcrumb-item">
                                        <Link href="/rtl/home">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Category Style Three
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* END OF /. PAGE TITLE */}
            {/* *** START PAGE MAIN CONTENT *** */}
            <main className="page_main_wrapper">
                {/* START POST BLOCK SECTION */}
                <section className="slider-inner">
                    <div className="container">
                        <div className="row thm-margin">
                            <div className="col-md-6 thm-padding">
                                <div className="slider-wrapper">
                                    <LeftCarousal />
                                </div>
                            </div>
                            <div className="col-md-6 thm-padding">
                                <div className="row slider-right-post thm-margin">
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <Link href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-260x230-7.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </Link>
                                            <div className="post-text">
                                                <span className="post-category">Photography</span>
                                                <h4>
                                                    <Link href="#">
                                                        It is a long established fact that a reader will.
                                                    </Link>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <Link href="#">by david hall</Link>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <Link href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-260x230-8.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </Link>
                                            <div className="post-text">
                                                <span className="post-category">Technology</span>
                                                <h4>
                                                    <Link href="#">
                                                        There are many variations of passages of Lorem.
                                                    </Link>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <Link href="#">by david hall</Link>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <Link href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-260x230-9.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </Link>
                                            <div className="post-text">
                                                <span className="post-category">Fashion</span>
                                                <h4>
                                                    <Link href="#">
                                                        Contrary to popular belief, Lorem Ipsum is not simply.
                                                    </Link>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <Link href="#">by david hall</Link>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-sm-6 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <Link href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-260x230-10.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </Link>
                                            <div className="post-text">
                                                <span className="post-category">Travel</span>
                                                <h4>
                                                    <Link href="#">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </Link>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <Link href="#">by david hall</Link>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END OF /. POST BLOCK SECTION */}
                <div className="container">
                    <div className="row row-m">
                        {/* START MAIN CONTENT */}
                        <div className="col-sm-7 col-md-8 col-p main-content">
                            <StickyBox>
                                {/* START CARD POST */}
                                <div className="row row-m">
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">National</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-1.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">Tavel</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-2.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">Fashion</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-3.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">Technology</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-4.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">Photography</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-5.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">Business</span>
                                                    <Link href="#">
                                                        <img src="../../assets/images/378x270-6.jpg" alt="" />
                                                    </Link>
                                                </figure>
                                                <div className="posts-inner">
                                                    <Link href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <Link href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </Link>
                                                    </h6>
                                                    <ul className="authar-info d-flex flex-wrap">
                                                        <li>
                                                            <i className="ti ti-timer" /> May 15, 2016
                                                        </li>
                                                        <li>
                                                            <Link href="#" className="link">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisi nel
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad mini veniam, quis
                                                        nostrud en derum sum laborem.
                                                    </p>
                                                </div>
                                                <div className="posts__footer card__footer">
                                                    <div className="post-author">
                                                        <figure className="d-md-inline-block d-none post-author-avatar">
                                                            <img
                                                                src="../../assets/images/avatar-1.jpg"
                                                                alt="Post Author Avatar"
                                                            />
                                                        </figure>
                                                        <div className="post-author-info ">
                                                            <h4 className="post-author-name">Naeem Khan</h4>
                                                        </div>
                                                    </div>
                                                    <ul className="post-meta">
                                                        <li className="meta-item ">
                                                            <i className="ti ti-eye" /> 2369
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </Link>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <Link href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. CARD POST */}
                            </StickyBox>
                        </div>
                        {/* END OF /. MAIN CONTENT */}
                        {/* START SIDE CONTENT */}
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                                    <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                                    <span className="fw-bold mx-1">2.5M</span> Followers
                                </div>
                                {/* END OF /. SOCIAL COUNTER TEXT */}
                                {/* START SOCIAL ICON */}
                                <div className="social-media-inner">
                                    <ul className="g-1 row social-media mb-2">
                                        <li className="col-4">
                                            <Link href="#" className="rss">
                                                <i className="fas fa-rss" />
                                                <div>2,035</div>
                                                <p>Subscribers</p>
                                            </Link>
                                        </li>
                                        <li className="col-4">
                                            <Link href="#" className="fb">
                                                <i className="fab fa-facebook-f" />
                                                <div>3,794</div>
                                                <p>Fans</p>
                                            </Link>
                                        </li>
                                        <li className="col-4">
                                            <Link href="#" className="insta">
                                                <i className="fab fa-instagram" />
                                                <div>941</div>
                                                <p>Followers</p>
                                            </Link>
                                        </li>
                                        <li className="col-4">
                                            <Link href="#" className="you_tube">
                                                <i className="fab fa-youtube" />
                                                <div>7,820</div>
                                                <p>Subscribers</p>
                                            </Link>
                                        </li>
                                        <li className="col-4">
                                            <Link href="#" className="twitter">
                                                <i className="fab fa-twitter" />
                                                <div>1,562</div>
                                                <p>Followers</p>
                                            </Link>
                                        </li>
                                        <li className="col-4">
                                            <Link href="#" className="pint">
                                                <i className="fab fa-pinterest-p" />
                                                <div>1,310</div>
                                                <p>Followers</p>
                                            </Link>
                                        </li>
                                    </ul>{" "}
                                    {/* /.social icon */}
                                </div>
                                {/* END OF /. SOCIAL ICON */}
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="../../assets/images/add320x270-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START NAV TABS */}
                                <div className="tabs-wrapper">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link border-0 active"
                                                id="most-viewed"
                                                data-bs-toggle="tab"
                                                data-bs-target="#most-viewed-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="most-viewed-pane"
                                                aria-selected="true"
                                            >
                                                Most Viewed
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link border-0"
                                                id="popular-news"
                                                data-bs-toggle="tab"
                                                data-bs-target="#popular-news-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="popular-news-pane"
                                                aria-selected="false"
                                            >
                                                Popular news
                                            </button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="most-viewed-pane"
                                            role="tabpanel"
                                            aria-labelledby="most-viewed"
                                            tabIndex={0}
                                        >
                                            <div className="most-viewed">
                                                <ul id="most-today" className="content tabs-content">
                                                    <li>
                                                        <span className="count">01</span>
                                                        <span className="text">
                                                            <Link href="#">
                                                                South Africa bounce back on eventful day
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">02</span>
                                                        <span className="text">
                                                            <Link href="#">
                                                                Steyn ruled out of series with shoulder fracture
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">03</span>
                                                        <span className="text">
                                                            <Link href="#">
                                                                BCCI asks ECB to bear expenses of team's India tour
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">04</span>
                                                        <span className="text">
                                                            <Link href="#">
                                                                Duminy, Elgar tons set Australia huge target
                                                            </Link>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">05</span>
                                                        <span className="text">
                                                            <Link href="#">
                                                                English spinners are third-class citizens, says
                                                                Graeme Swann
                                                            </Link>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="popular-news-pane"
                                            role="tabpanel"
                                            aria-labelledby="popular-news"
                                            tabIndex={0}
                                        >
                                            <div className="popular-news">
                                                <div className="p-post">
                                                    <h4>
                                                        <Link href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </Link>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <Link href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </Link>
                                                        </li>
                                                        <li className="like">
                                                            <Link href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className="reatting-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                                <div className="p-post">
                                                    <h4>
                                                        <Link href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </Link>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <Link href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </Link>
                                                        </li>
                                                        <li className="like">
                                                            <Link href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className="reatting-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                                <div className="p-post">
                                                    <h4>
                                                        <Link href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </Link>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <Link href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </Link>
                                                        </li>
                                                        <li className="like">
                                                            <Link href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                    <div className="reatting-2">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star-half-alt" />
                                                        <i className="far fa-star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. NAV TABS */}
                            </StickyBox>
                        </div>
                        {/* END OF /. SIDE CONTENT */}
                    </div>
                </div>
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}
        </LayoutTwo>

    );
};

export default page;