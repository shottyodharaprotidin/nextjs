"use client"

import StickyBox from "react-sticky-box";
import LayoutTwo from "@/components/rtl/layout/layout-two";
import useRemoveBodyClass from "@/components/rtl/useEffect-hook/useEffect-hook";
import LatestArticles from "@/components/rtl/latest-article/latest-articles";
import PopularPostSlider from "@/components/rtl/popular-post-slider/popular-post-slider";
import DatePickerComponents from "@/components/rtl/date-picker/date-picker";
import PollWidget from "@/components/rtl/poll-widget/poll";
import NewsTicker from "@/components/rtl/news-ticker-carousal/page";
import LeftCarousalTwo from "@/components/rtl/left-carousal-two/left-carousal-two";
import TravelSlider from "@/components/rtl/travel-slider/travel-slider";
import FeatureCarousal from "@/components/rtl/feature-carousal/feature-carousal";
import Tags from "@/components/rtl/tags/tags";
import { useEffect } from "react";
import NewsCarousal from "@/components/rtl/news-carousal/news-carousal";
import { useState } from "react";
import YoutubeVideo from "@/components/ltr/youtube-video/youtube-video";


const page = () => {
    const [toggleTab, setToggleTab] = useState(1)
    const onClickToggleTab = (index) => {
        setToggleTab(index)
    }
    useEffect(() => {
        // Your logic for setting dir attribute using JavaScript
        // For example:
        document.documentElement.setAttribute('dir', 'rtl');
      }, []);
     {/* *** IMPORT BACKGROUND IMAGE *** */ }
    useRemoveBodyClass(['None','layout-rtl'], ['home-seven', 'home-two', 'home-nine','boxed-layout','home-six']);

    return (
        <LayoutTwo>
         <main className="page_main_wrapper">
                {/* START NEWSTRICKER */}
                <NewsTicker/>
                {/*  END OF /. NEWSTRICKER */}
                {/* START POST BLOCK SECTION */}
                <section className="slider-inner">
                    <div className="container">
                        <div className="row thm-margin">
                            <div className="col-12 col-md-8 thm-padding">
                                <div className="slider-wrapper">
                                   <LeftCarousalTwo/>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 thm-padding">
                                <div className="row slider-right-post thm-margin">
                                    <div className="col-6 col-md-12 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-695x460-6.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Travel</span>
                                                <h4>
                                                    <a href="#">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                    <li className="view d-lg-block d-none">
                                                        <a href="#">25 views</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-12 thm-padding">
                                        <div className="slider-post post-height-2">
                                            <a href="#" className="news-image">
                                                <img
                                                    src="../../assets/images/slider-695x460-7.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                            <div className="post-text">
                                                <span className="post-category">Food</span>
                                                <h4>
                                                    <a href="#">
                                                        Lorem Ipsum is simply dummy text of the printing
                                                    </a>
                                                </h4>
                                                <ul className="authar-info d-flex flex-wrap">
                                                    <li className="authar d-lg-block d-none">
                                                        <a href="#">by david hall</a>
                                                    </li>
                                                    <li className="d-md-block d-none">May 29,2017</li>
                                                    <li className="view d-lg-block d-none">
                                                        <a href="#">25 views</a>
                                                    </li>
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
                                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                                <div className="post-inner">
                                    {/*post header*/}
                                    <div className="post-head">
                                        <h2 className="title">
                                            <strong>Popular</strong> Posts
                                        </h2>
                                        <div className="filter-nav">
                                            <ul>
                                                <li>
                                                    <a href="#" className="active">
                                                        all
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">business</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                                <li>
                                                    <a href="#">design</a>
                                                </li>
                                                <li>
                                                    <a href="#">fashion</a>
                                                </li>
                                                <li>
                                                    <a href="#">video</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* post body */}
                                    <div className="post-body mb-0">
                                  <PopularPostSlider/>
                                    </div>
                                    {/* Post footer */}
                                    <div className="post-footer mb-2">
                                        <div className="row thm-margin">
                                            <div className="col-md-8 thm-padding">
                                                <a href="#" className="more-btn">
                                                    More popular posts
                                                </a>
                                            </div>
                                            <div className="col-md-4 d-md-block d-none thm-padding">
                                                <div className="social">
                                                    <ul>
                                                        <li>
                                                            <div className="share transition">
                                                                <a href="#" target="_blank" className="ico fb">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico tw">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico rs">
                                                                    <i className="fas fa-rss" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico pin">
                                                                    <i className="fab fa-pinterest-p" />
                                                                </a>
                                                                <i className="ti ti-share ico-share" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-twitter" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="../../assets/images/add728x90-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START POST CATEGORY STYLE TWO (Travel news) */}
                                <div className="post-inner post-inner-2">
                                    {/*post header*/}
                                    <div className="post-head">
                                        <h2 className="title">
                                            <strong>Travel</strong> News
                                        </h2>
                                        <div className="filter-nav">
                                            <ul>
                                                <li>
                                                    <a href="#" className="active">
                                                        all
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">business</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                                <li>
                                                    <a href="#">design</a>
                                                </li>
                                                <li>
                                                    <a href="#">fashion</a>
                                                </li>
                                                <li>
                                                    <a href="#">video</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* post body */}
                                    <div className="post-body mb-0">
                                       <TravelSlider/>
                                    </div>
                                    {/* footer post */}
                                    <div className="post-footer mb-2">
                                        <div className="row thm-margin">
                                            <div className="col-md-8 thm-padding">
                                                <a href="#" className="more-btn">
                                                    More popular posts
                                                </a>
                                            </div>
                                            <div className="col-md-4 d-md-block d-none thm-padding">
                                                <div className="social">
                                                    <ul>
                                                        <li>
                                                            <div className="share transition">
                                                                <a href="#" target="_blank" className="ico fb">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico tw">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico rs">
                                                                    <i className="fas fa-rss" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico pin">
                                                                    <i className="fab fa-pinterest-p" />
                                                                </a>
                                                                <i className="ti ti-share ico-share" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-twitter" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  END OF /. POST CATEGORY STYLE TWO (Travel news) */}
                            </StickyBox>
                        </div>
                        {/* END OF /. MAIN CONTENT */}
                        {/* START SIDE CONTENT */}
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>
                                {/* START WEATHER */}
                                <div className="weather-wrapper">
                                    <div className="row thm-margin">
                                        <div className="col-3 col-lg-3 col-md-4 col-sm-4 thm-padding weather-week">
                                            <div className="list-group">
                                                <div className={toggleTab === 1 ? "list-group-item active" : "list-group-item"} onClick={() => onClickToggleTab(1)}>
                                                    <i className="flaticon-cloudy" />
                                                    <div>Tue, 34°F</div>
                                                </div>
                                                <div className={toggleTab === 2 ? "list-group-item active" : "list-group-item"} onClick={() => onClickToggleTab(2)}>
                                                    <i className="flaticon-sun" />
                                                    <div>Wed, 38°F</div>
                                                </div>
                                                <div href="#" className={toggleTab === 3 ? "list-group-item active" : "list-group-item"} onClick={() => onClickToggleTab(3)}>
                                                    <i className="flaticon-cloud" />
                                                    <div>thu, 32°F</div>
                                                </div>
                                                <div href="#" className={toggleTab === 4 ? "list-group-item active" : "list-group-item"} onClick={() => onClickToggleTab(4)} >
                                                    <i className="flaticon-rain" />
                                                    <div>Fri, 31°F</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bhoechie-tab col-9 col-lg-9 col-md-8 col-sm-8 thm-padding">
                                            {/* weather temperature */}
                                            <div className={toggleTab === 1 ? "weather-temp-wrap active" : "weather-temp-wrap"} onClick={() => onClickToggleTab(1)}>
                                                <div className="city-day">
                                                    <div className="city">Dhaka</div>
                                                    <div className="day">Tuesday, 8.00pm</div>
                                                </div>
                                                <div className="weather-icon">
                                                    <i className="flaticon-cloudy" />
                                                    <div className="main-temp">34°F</div>
                                                </div>
                                                <div className="break">
                                                    <div className="wind-condition"> Wind: 13mph WSW</div>
                                                    <div className="humidity">Humidity: 91%</div>
                                                </div>
                                            </div>
                                            {/* weather temperature */}
                                            <div className={toggleTab === 2 ? "weather-temp-wrap active" : "weather-temp-wrap"} onClick={() => onClickToggleTab(2)}>
                                                <div className="city-day">
                                                    <div className="city">Dhaka</div>
                                                    <div className="day">Wednesday, 8.00pm</div>
                                                </div>
                                                <div className="weather-icon">
                                                    <i className="flaticon-sun" />
                                                    <div className="main-temp">38°F</div>
                                                </div>
                                                <div className="break">
                                                    <div className="wind-condition"> Wind: 11mph WSW</div>
                                                    <div className="humidity">Humidity: 89%</div>
                                                </div>
                                            </div>
                                            {/* weather temperature */}
                                            <div className={toggleTab === 3 ? "weather-temp-wrap active" : "weather-temp-wrap"} onClick={() => onClickToggleTab(3)}>
                                                <div className="city-day">
                                                    <div className="city">Dhaka</div>
                                                    <div className="day">Wednesday, 8.00pm</div>
                                                </div>
                                                <div className="weather-icon">
                                                    <i className="flaticon-cloud" />
                                                    <div className="main-temp">32°F</div>
                                                </div>
                                                <div className="break">
                                                    <div className="wind-condition"> Wind: 11mph WSW</div>
                                                    <div className="humidity">Humidity: 89%</div>
                                                </div>
                                            </div>
                                            {/* weather temperature */}
                                            <div className={toggleTab === 4 ? "weather-temp-wrap active" : "weather-temp-wrap"} onClick={() => onClickToggleTab(4)}>
                                                <div className="city-day">
                                                    <div className="city">Dhaka</div>
                                                    <div className="day">Friday, 8.00pm</div>
                                                </div>
                                                <div className="weather-icon">
                                                    <i className="flaticon-rain" />
                                                    <div className="main-temp">31°F</div>
                                                </div>
                                                <div className="break">
                                                    <div className="wind-condition"> Wind: 16mph WSW</div>
                                                    <div className="humidity">Humidity: 93%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. WEATHER */}
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                                    <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                                    <span className="fw-bold mx-1 my-1">2.5M</span> Followers
                                </div>
                                {/* END OF /. SOCIAL COUNTER TEXT */}
                                {/* START SOCIAL ICON */}
                                <div className="social-media-inner mb-2">
                                    <ul className="g-1 row social-media">
                                        <li className="col-4">
                                            <a href="#" className="rss">
                                                <i className="fas fa-rss" />
                                                <div>2,035</div>
                                                <p>Subscribers</p>
                                            </a>
                                        </li>
                                        <li className="col-4">
                                            <a href="#" className="fb">
                                                <i className="fab fa-facebook-f" />
                                                <div>3,794</div>
                                                <p>Fans</p>
                                            </a>
                                        </li>
                                        <li className="col-4">
                                            <a href="#" className="insta">
                                                <i className="fab fa-instagram" />
                                                <div>941</div>
                                                <p>Followers</p>
                                            </a>
                                        </li>
                                        <li className="col-4">
                                            <a href="#" className="you_tube">
                                                <i className="fab fa-youtube" />
                                                <div>7,820</div>
                                                <p>Subscribers</p>
                                            </a>
                                        </li>
                                        <li className="col-4">
                                            <a href="#" className="twitter">
                                                <i className="fab fa-twitter" />
                                                <div>1,562</div>
                                                <p>Followers</p>
                                            </a>
                                        </li>
                                        <li className="col-4">
                                            <a href="#" className="pint">
                                                <i className="fab fa-pinterest-p" />
                                                <div>1,310</div>
                                                <p>Followers</p>
                                            </a>
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
                                                            <a href="#">
                                                                South Africa bounce back on eventful day
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">02</span>
                                                        <span className="text">
                                                            <a href="#">
                                                                Steyn ruled out of series with shoulder fracture
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">03</span>
                                                        <span className="text">
                                                            <a href="#">
                                                                BCCI asks ECB to bear expenses of team's India tour
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">04</span>
                                                        <span className="text">
                                                            <a href="#">
                                                                Duminy, Elgar tons set Australia huge target
                                                            </a>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="count">05</span>
                                                        <span className="text">
                                                            <a href="#">
                                                                English spinners are third-class citizens, says
                                                                Graeme Swann
                                                            </a>
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
                                                        <a href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </a>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <a href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </a>
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
                                                        <a href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </a>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <a href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </a>
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
                                                        <a href="#">
                                                            It is a long established fact that a reader will be
                                                            distracted by{" "}
                                                        </a>
                                                    </h4>
                                                    <ul className="authar-info d-flex flex-wrap justify-content-center">
                                                        <li className="date">
                                                            <a href="#">
                                                                <i className="ti ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti ti-thumb-up" />
                                                                15 likes
                                                            </a>
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
                {/* START FEATURED NEWS */}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="featured-inner">
                                <FeatureCarousal/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END OF /. FEATURED NEWS */}
                {/* START YOUTUBE VIDEO */}
                <div className="container">
                  
                            <YoutubeVideo />
                       
                </div>
                {/* END OF /. YOUTUBE VIDEO */}
                <div className="container">
                    <div className="row row-m">
                        <div className="col-sm-7 col-md-8 main-content col-p">
                            <StickyBox>
                                {/* START POST CATEGORY STYLE THREE (More news) */}
                                <div className="post-inner">
                                    {/* post header */}
                                    <div className="post-head">
                                        <h2 className="title">
                                            <strong>More</strong> News
                                        </h2>
                                        <div className="filter-nav">
                                            <ul>
                                                <li>
                                                    <a href="#" className="active">
                                                        all
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">business</a>
                                                </li>
                                                <li>
                                                    <a href="#">gadgets</a>
                                                </li>
                                                <li>
                                                    <a href="#">design</a>
                                                </li>
                                                <li>
                                                    <a href="#">fashion</a>
                                                </li>
                                                <li>
                                                    <a href="#">video</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* post body */}
                                    <div className="post-body mb-0">
                                        <NewsCarousal/>
                                    </div>
                                    {/* footer post */}
                                    <div className="post-footer mb-2">
                                        <div className="row thm-margin">
                                            <div className="col-md-8 thm-padding">
                                                <a href="#" className="more-btn">
                                                    More popular posts
                                                </a>
                                            </div>
                                            <div className="col-md-4 d-md-block d-none thm-padding">
                                                <div className="social">
                                                    <ul>
                                                        <li>
                                                            <div className="share transition">
                                                                <a href="#" target="_blank" className="ico fb">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico tw">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico rs">
                                                                    <i className="fas fa-rss" />
                                                                </a>
                                                                <a href="#" target="_blank" className="ico pin">
                                                                    <i className="fab fa-pinterest-p" />
                                                                </a>
                                                                <i className="ti ti-share ico-share" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-heart" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i className="ti ti-twitter" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. POST CATEGORY STYLE THREE (More news) */}
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="../../assets/images/add728x90-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START CARD POST */}
                                <div className="row row-m">
                                    <div className="col-md-6 col-p">
                                        <div className="posts card-post">
                                            <div className="post-grid post-grid-item">
                                                <figure className="posts-thumb">
                                                    <span className="post-category">National</span>
                                                    <a href="#">
                                                        <img src="../../assets/images/378x270-1.jpg" alt="" />
                                                    </a>
                                                </figure>
                                                <div className="posts-inner">
                                                    <a href="#" className="posts-link" />
                                                    <h6 className="posts-title">
                                                        <a href="#">
                                                            The Alchemists team is appearing in L.A. Beach for
                                                            charity
                                                        </a>
                                                    </h6>
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
                                                            <a href="#">
                                                                <i className="ti ti-heart" /> 530
                                                            </a>
                                                        </li>
                                                        <li className="meta-item ">
                                                            <a href="#">
                                                                <i className="ti ti-comments" /> 18
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-p">
                                        <div className="posts">
                                            <ul>
                                                <li className="post-grid">
                                                    <div className="posts-inner">
                                                        <span className="post-category">National</span>
                                                        <h6 className="posts-title">
                                                            <a href="#">
                                                                Trainings are getting really hard reaching the final
                                                            </a>
                                                        </h6>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisi ng
                                                            elit, sed do eiusmod tempor incididunt ut labore...
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="post-grid">
                                                    <div className="posts-inner">
                                                        <span className="post-category">National</span>
                                                        <h6 className="posts-title">
                                                            <a href="#">
                                                                The victory againts The Sharks brings us closer to
                                                                the Final
                                                            </a>
                                                        </h6>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisi ng
                                                            elit, sed do eiusmod tempor incididunt ut labore...
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className="d-none d-xl-block post-grid">
                                                    <div className="posts-inner">
                                                        <span className="post-category">National</span>
                                                        <h6 className="posts-title">
                                                            <a href="#">
                                                                The next match against The Clovers will be this
                                                                Friday
                                                            </a>
                                                        </h6>
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
                                                            Lorem ipsum dolor sit amet, consectetur adipisi ng
                                                            elit, sed do eiusmod tempor incididunt ut labore...
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. CARD POST */}
                            </StickyBox>
                        </div>
                        <div className="col-sm-5 col-md-4 rightSidebar col-p">
                            <StickyBox>
                                {/* START GAMES RESULT POST */}
                                <div className="panel_inner games-news">
                                    <div className="panel_header">
                                        <h4>
                                            <strong>Last</strong> Game Results
                                        </h4>
                                    </div>
                                    <div className="panel_body">
                                        <div className="games-result-header">
                                            <h3 className="games-result-title">
                                                Championship Quarter Finals
                                            </h3>
                                            <time className="games-result-date" dateTime="2016-03-24">
                                                Saturday, March 24th, 2017
                                            </time>
                                        </div>
                                        <div className="games-result-main">
                                            {/* 1st Team */}
                                            <div className="games-result-team">
                                                <div className="games-result-team-logo">
                                                    <a href="#">
                                                        <img
                                                            src="../../assets/images/game_results_logo_1.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="games-result-team-info">
                                                    <h5 className="games-result-team-name">Alchemists</h5>
                                                    <div className="games-result-team-desc">Elric School</div>
                                                </div>
                                            </div>
                                            {/* 1st Team / End */}
                                            <div className="games-result-score-inner">
                                                <div className="games-result-score">
                                                    <span className="games-result-score-result winner">
                                                        107
                                                    </span>
                                                    <span>-</span>
                                                    <span className="games-result-score-result loser">
                                                        102
                                                    </span>
                                                </div>
                                                <div className="games-result-score-label">Final Score</div>
                                            </div>
                                            {/* 2nd Team */}
                                            <div className="games-result-team">
                                                <div className="games-result-team-logo">
                                                    <a href="#">
                                                        <img
                                                            src="../../assets/images/game_results_logo_2.png"
                                                            className="img-fluid"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="games-result-team-info">
                                                    <h5 className="games-result-team-name">Sharks</h5>
                                                    <div className="games-result-team-desc">
                                                        Marine College
                                                    </div>
                                                </div>
                                            </div>
                                            {/* 2nd Team / End */}
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th>Scoreboard</th>
                                                    <th>1</th>
                                                    <th>2</th>
                                                    <th>3</th>
                                                    <th>4</th>
                                                    <th>T</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>Alchemists</th>
                                                    <td>30</td>
                                                    <td>31</td>
                                                    <td>22</td>
                                                    <td>24</td>
                                                    <td>107</td>
                                                </tr>
                                                <tr>
                                                    <th>Sharks</th>
                                                    <td>22</td>
                                                    <td>34</td>
                                                    <td>20</td>
                                                    <td>26</td>
                                                    <td>102</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* END OF /. GAMES RESULT POST */}
                                {/* START CATEGORIES WIDGET */}
                                <div className="panel_inner categories-widget">
                                    <div className="panel_header">
                                        <h4>
                                            <strong>Hot</strong> Categories
                                        </h4>
                                    </div>
                                    <div className="panel_body">
                                        <ul className="category-list">
                                            <li>
                                                <a href="#">
                                                    Business <span>12</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Sport <span>26</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    LifeStyle <span>55</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Fashion <span>37</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Technology <span>62</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Music <span>10</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Culture <span>43</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Design <span>74</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Entertainment <span>11</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    video <span>41</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Travel <span>11</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Food <span>29</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* END OF /. CATEGORIES WIDGET */}
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="../../assets/images/add320x270-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                            </StickyBox>
                        </div>
                    </div>
                </div>
                <section className="articles-wrapper">
                    <div className="container">
                        <div className="row row-m">
                            <div className="col-sm-7 col-md-8 main-content col-p">
                                <StickyBox>
                                    {/* START POST CATEGORY STYLE FOUR (Latest articles ) */}
                                    <LatestArticles/>
                                    {/* END OF /. POST CATEGORY STYLE FOUR (Latest articles ) */}
                                </StickyBox>
                            </div>
                            <div className="col-sm-5 col-md-4 rightSidebar col-p">
                                <StickyBox>
                                    {/* START ARCHIVE */}
                                    <div className="archive-wrapper">
                                        <DatePickerComponents/>
                                    </div>
                                    {/* END OF /. ARCHIVE */}
                                    {/* START POLL WIDGET */}
                                    <PollWidget/>
                                    {/* END OF /. POLL WIDGET */}
                                    {/* START TAGS */}
                                    <Tags/>
                                    {/* END OF /. TAGS */}
                                </StickyBox>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}
       
           
        </LayoutTwo>

    );
};

export default page;