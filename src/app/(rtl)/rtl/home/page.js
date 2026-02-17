"use client"
import StickyBox from "react-sticky-box";
import NewsTicker from "@/components/rtl/news-ticker-carousal/page";
import SunnyWeather from "@/components/rtl/sunny-wether/sunny-weather";
import { useBackgroundImageLoader } from "@/components/rtl/use-background-image/use-background-image";
import Layout from "@/components/rtl/layout/layout";
import YoutubeVideo from "@/components/rtl/youtube-video/youtube-video";
import useRemoveBodyClass from "@/components/rtl/useEffect-hook/useEffect-hook";
import DatePickerComponents from "@/components/rtl/date-picker/date-picker";
import PollWidget from "@/components/rtl/poll-widget/poll";
import HomeFeatureCarousal from "@/components/rtl/home-feature-carousal/home-feature-carousal";
import HomeCenterSlider from "@/components/rtl/home-center-slider/home-center-slider";
import Tags from "@/components/rtl/tags/tags";
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        // Your logic for setting dir attribute using JavaScript
        // For example:
        document.documentElement.setAttribute('dir', 'rtl');
      }, []);
  {/* *** ADD AND REMOVE CLASS ON BODY TAG *** */ }
  useRemoveBodyClass(['home-nine','layout-rtl'], ['home-six', 'home-seven', 'home-two', 'boxed-layout']);
  {/* *** IMPORT BACKGROUND IMAGE *** */ }
  useBackgroundImageLoader()
  return (
    <Layout>
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START NEWSTRICKER */}
        <NewsTicker />
        {/*  END OF /. NEWSTRICKER */}
        {/* START FEATURE SECTION */}
        <div
          className="bg-img feature-section py-4 py-lg-3 py-xl-4"
          data-image-src="../../assets/images/bg-shape.png"
        >
          <div className="container">
            <HomeFeatureCarousal />
          </div>
        </div>
        {/* END OF /. FEATURE SECTION */}
        {/* START POST BLOCK SECTION */}
        <section className="slider-inner">
          <div className="container-fluid p-0">
            <div className="row thm-margin">
              <div className="col-md-4 col-xxl-4 thm-padding d-md-none d-xxl-block">
                <div className="row slider-right-post thm-margin">
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/06.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Fashion</span>
                        <h4>
                          <a href="#">
                            Ut venenatis nulla vitae quam pharetra, ultrices commodo
                            augue sodales.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-4">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/05.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Technology</span>
                        <h4>
                          <a href="#">
                            Vivamus tempus nulla in arcu interdum, vel condimentum
                            urna facilisis.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-4">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/04.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Travel</span>
                        <h4>
                          <a href="#">
                            Vivamus tempus nulla in arcu interdum, vel condimentum
                            urna facilisis.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="slider-wrapper">
                  <HomeCenterSlider />
                </div>
              </div>
              <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="row slider-right-post thm-margin">
                  <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                    <div className="slider-post post-height-2">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/03.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Travel</span>
                        <h4>
                          <a href="#">
                            Pellentesque at ligula ultrices, luctus turpis quis,
                            convallis libero.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/01.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Fashion</span>
                        <h4>
                          <a href="#">
                            Aenean dignissim quam sed turpis fringilla, non
                            scelerisque quam volutpat.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 thm-padding">
                    <div className="slider-post post-height-2">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/masonry/02.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </a>
                      <div className="post-text">
                        <span className="post-category">Technology</span>
                        <h4>
                          <a href="#">
                            Vivamus vitae sapien malesuada, vulputate tellus a,
                            elementum neque.
                          </a>
                        </h4>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            By <span className="editor-name">David hall</span>
                          </li>
                          <li>Aug 16, 2023</li>
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
          <div className="row gx-lg-5">
            {/* START MAIN CONTENT */}
            <div className="col-md-3 leftSidebar d-none d-xl-block">
              <StickyBox >
                <div className="panel_header">
                  <h4>
                    <strong>Top </strong> Stories
                  </h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            Trainings are getting really hard reaching the final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                    <li className="post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The victory againts The Sharks brings us closer to the
                            Final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                    <li className="d-none d-xl-block post-grid">
                      <div className="posts-inner px-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The next match against The Clovers will be this Friday
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category">National</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisi ng elit,
                          sed do eiusmod tempor incididunt
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
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
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
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
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
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
                                <i className="ti ti ti-timer" /> May 15, 2016
                              </a>
                            </li>
                            <li className="like">
                              <a href="#">
                                <i className="ti ti ti-thumb-up" />
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
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <StickyBox>
                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                <div className="post-inner">
                  {/* post body */}
                  <div className="post-body py-0">
                    <article>
                      <figure>
                        <a href="">
                          <img
                            src="../../assets/images/557x352-1.jpg"
                            width={345}
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                      </figure>
                      <div className="post-info">
                        <h3 className="fs-4">
                          <a href="#">
                            Proin bibendum nisi sit amet purus viverra, vel ornare
                            purus interdum.
                          </a>
                        </h3>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">Business</span>
                          </li>
                          <li>
                            By <span className="editor-name">John Doe</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus sit voluptatem
                          accusantium doloremque laudantium, totamrem aperiam, eaque
                          ipsa quae ab illo inventore
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
                {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
                <div className="news-grid-2 border-top pt-4 mb-4">
                  <div className="row gx-3 gx-lg-4 gy-4">
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-1.jpg"
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
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-2.jpg"
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
                            It is a long established fact that a reader will be
                            distracted by
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-3.jpg"
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
                            There are many variations of passages of Lorem Ipsum.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-4.jpg"
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
                            Lorem Ipsum is simply dummy text of the printing.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-5.jpg"
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
                            It is a long established fact that a reader will be
                            distracted by
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-sm-6">
                      <div className="grid-item mb-0">
                        <div className="grid-item-img">
                          <a href="#">
                            <img
                              src="../../assets/images/187x125-6.jpg"
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
                            There are many variations of passages of Lorem Ipsum.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                  <img
                    src="../../assets/images/add728x90-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                {/* END OF /. ADVERTISEMENT */}
              </StickyBox>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
              <StickyBox>
                {/* START SOCIAL COUNTER TEXT */}
                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                  <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                  <span className="fw-bold mx-1">2.5M</span> Followers
                </div>
                {/* END OF /. SOCIAL COUNTER TEXT */}
                {/* START SOCIAL ICON */}
                <div className="social-media-inner">
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
                {/* START TRENDING TOPICS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Trending</strong> topics
                    </h4>
                  </div>
                  <div className="panel_body">
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="../../assets/images/1000x750-1.jpg"
                    >
                      <a
                        href="#"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Travel
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="../../assets/images/1000x750-2.jpg"
                    >
                      <a
                        href="#"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Business
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="../../assets/images/1000x750-3.jpg"
                    >
                      <a
                        href="#"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Marketing
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="../../assets/images/1000x750-4.jpg"
                    >
                      <a
                        href="#"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Photography
                      </a>
                    </div>
                    {/* Category item */}
                    <div
                      className="text-center mb-2 card-bg-scale position-relative overflow-hidden bg-dark-overlay bg-img p-3"
                      data-image-src="../../assets/images/1000x750-5.jpg"
                    >
                      <a
                        href="#"
                        className="btn-link fs-5 fw-bold stretched-link text-decoration-none text-white"
                      >
                        Sports
                      </a>
                    </div>
                    {/* View All Category button */}
                    <div className="text-center mt-3">
                      <a href="#" className="fw-bold text-primary-hover">
                        <u>View all categories</u>
                      </a>
                    </div>
                  </div>
                </div>
                {/* END OF /. TRENDING TOPICS */}
                {/* START LATEST REVIEWS */}
                <div className="panel_inner review-inner">
                  <div className="panel_header">
                    <h4>
                      <strong>Latest</strong> Reviews
                    </h4>
                  </div>
                  <div className="panel_body">
                    <div className="more-post">
                      <a href="#" className="news-image">
                        <img
                          src="../../assets/images/340x215-12.jpg"
                          alt=""
                          className="img-fluid w-100"
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
                        {/* <span class="post-category">Technology</span> */}
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
                          <li>
                            <span className="post-category mb-0">Travel</span>
                          </li>
                          <li>Aug 16, 2023</li>
                        </ul>
                        <h4 className="mb-0">
                          Quisque tincidunt metus a lacinia faucibus.
                        </h4>
                      </div>
                    </div>
                    <div className="mt-4 news-list">
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/115x85-5.jpg"
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
                              Duis ac elit finibus, ullamcorper nibh eget, cursus
                              enim.{" "}
                            </a>
                          </h5>
                          <div className="reviews-reatting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="news-list-item p-0 mb-4">
                        <div className="img-wrapper">
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/115x85-6.jpg"
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
                              Vivamus luctus ligula a arcu ullamcorper vestibulum.
                            </a>
                          </h5>
                          <div className="reviews-reatting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                            <i className="far fa-star" />
                          </div>
                        </div>
                      </div>
                      <div className="news-list-item p-0">
                        <div className="img-wrapper">
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/115x85-7.jpg"
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
                              Etiam sed erat at purus laoreet condimentum.
                            </a>
                          </h5>
                          <div className="reviews-reatting">
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
                {/* END OF /. LATEST REVIEWS */}
              </StickyBox>
            </div>
            {/* END OF /. SIDE CONTENT */}
          </div>
        </div>
        {/* START YOUTUBE VIDEO */}
        <div className="mb-4 py-5 position-relative video-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6 text-center">
                <h3 className="text-white">Latest Video News</h3>
                <p className="text-white mb-0">
                  It is a long established fact that a reader will be distracted by
                  the readable content of a page when looking at its layout.{" "}
                </p>
              </div>
            </div>
            <YoutubeVideo />
          </div>
        </div>
        {/* END OF /. YOUTUBE VIDEO */}
        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-md-3 leftSidebar d-none d-xl-block">
                <StickyBox>
                  {/* START TECH & INNOVATION */}
                  <div className="panel_inner">
                    <div className="panel_header">
                      <h4>
                        <strong>TECH &amp;</strong> INNOVATION
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="#" className="d-block mb-3">
                          <img
                            src="../../assets/images/340x215-12.jpg"
                            alt=""
                            className="img-fluid w-100"
                          />
                        </a>
                        <h5>
                          <a href="#">
                            Phasellus placerat massa nec metus ornare molestie.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">EUROPE</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Trainings are getting really hard reaching the final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            The victory againts The Sharks brings us closer to the
                            Final
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="#">
                            The next match against The Clovers will be this Friday
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* END OF /. TECH & INNOVATION */}
                  {/* START EDITOR'S PICKS */}
                  <div className="panel_inner mb-0">
                    <div className="panel_header">
                      <h4>
                        <strong>EDITOR'S</strong> PICKS
                      </h4>
                    </div>
                    <div className="panel_body">
                      <div className="border-bottom">
                        <a href="#" className="d-block mb-3">
                          <img
                            src="../../assets/images/340x215-4.jpg"
                            alt=""
                            className="img-fluid"
                          />
                        </a>
                        <h5>
                          <a href="#">
                            Donec scelerisque massa quis ante facilisis, non
                            pulvinar.
                          </a>
                        </h5>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                          <li>
                            <span className="post-category mb-0">EUROPE</span>
                          </li>
                          <li>Jan 4, 2021</li>
                        </ul>
                        <p>
                          To understand the new politics stance and other pro
                          nationals of recent…
                        </p>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Nam at dui ac arcu suscipit sodales eu non urna.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="border-bottom py-3">
                        <h6 className="posts-title">
                          <a href="#">
                            Phasellus non odio facilisis, tincidunt mi a, commodo
                            magna.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                      <div className="py-3 pb-0">
                        <h6 className="posts-title">
                          <a href="#">
                            Pellentesque volutpat nibh ut lectus euismod
                            ullamcorper.
                          </a>
                        </h6>
                        <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                          <li>Jan 4, 2021</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* END OF /. EDITOR'S PICKS */}
                </StickyBox>
              </div>
              <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
                <StickyBox>
                  {/* START POST CATEGORY STYLE FOUR (Latest articles ) */}
                  <div className="post-inner">
                    {/*post header*/}
                    <div className="post-head">
                      <h2 className="title">
                        <strong>Latest</strong> articles
                      </h2>
                    </div>
                    {/* post body */}
                    <div className="post-body">
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/218x150-1.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              There are many variations of passages of Lorem Ipsum
                              available, but the majority have
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">TECH</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/218x150-2.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              Contrary to popular belief, Lorem Ipsum is not simply
                              random text. It has roots in a piece
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Business</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/218x150-3.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              The standard chunk of Lorem Ipsum used since the 1500s
                              is reproduced below for those interested.
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Travel</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/218x150-4.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              It is a long established fact that a reader will be
                              distracted by the readable{" "}
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">Fashion</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                      <div className="news-list-item articles-list">
                        <div className="img-wrapper">
                          <div className="align-items-center bg-primary d-flex justify-content-center position-absolute rounded-circle text-white trending-post z-1">
                            <i className="fa-solid fa-bolt-lightning" />
                          </div>
                          <a href="#" className="thumb">
                            <img
                              src="../../assets/images/218x150-5.jpg"
                              alt=""
                              className="img-fluid w-100"
                            />
                          </a>
                        </div>
                        <div className="post-info-2">
                          <h4>
                            <a href="#" className="title">
                              Replication For Dummies 4 Easy Steps To Professional
                              DVD
                            </a>
                          </h4>
                          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                            <li>
                              <span className="post-category mb-0">NATIONAL</span>
                            </li>
                            <li>
                              By <span className="editor-name">John Doe</span>
                            </li>
                            <li>Aug 16, 2023</li>
                          </ul>
                          <p className="d-lg-block d-none">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley...
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* /. post body */}
                    {/*Post footer*/}
                    <div className="post-footer">
                      <div className="row thm-margin">
                        <div className="col-md-8 thm-padding">
                          {/* pagination */}
                          <ul className="pagination">
                            <li className="disabled">
                              <span className="ti ti-angle-left" />
                            </li>
                            <li className="active">
                              <span>1</span>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li className="disabled">
                              <span className="extend">...</span>
                            </li>
                            <li></li>
                            <li>
                              <a href="#">12</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="ti ti-angle-right" />
                              </a>
                            </li>
                          </ul>{" "}
                          {/* /.pagination */}
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
                    </div>{" "}
                    {/* /.Post footer*/}
                  </div>
                  {/* END OF /. POST CATEGORY STYLE FOUR (Latest articles ) */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner mb-0">
                    <img
                      src="../../assets/images/add728x90-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                </StickyBox>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <StickyBox>
                  {/* START WEATHER */}
                  <div className="weather-wrapper-2 weather-bg-2">
                    <div className="weather-temperature">
                      <div className="weather-now">
                        <span className="big-degrees">39</span>
                        <span className="circle">°</span>
                        <span className="weather-unit">C</span>
                      </div>
                      <div className="weather-icon-2">
                        <SunnyWeather />
                      </div>
                    </div>
                    <div className="weather-info">
                      <div className="weather-name">Partly Sunny</div>
                      <span>
                        Real Fell: 67 <sup>°</sup>
                      </span>
                      <span>Change of Rain</span>
                    </div>
                    <div className="weather-week-2">
                      <div className="weather-days">
                        <div className="day-0">Sun</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sunny" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-0">45</span>
                          <span className="td-circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-1">Mon</div>
                        <div className="day-icon">
                          <i className="wi wi-day-cloudy-high" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-1">21</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-2">Tue</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-2">29</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-3">Wed</div>
                        <div className="day-icon">
                          <i className="wi wi-day-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-3">19</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Thu</div>
                        <div className="day-icon">
                          <i className="wi wi-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-4">54</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Fri</div>
                        <div className="day-icon">
                          <i className="wi wi-smog" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-5">68</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">Sat</div>
                        <div className="day-icon">
                          <i className="wi wi-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-6">28</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                    </div>
                    <div className="weather-footer">
                      <div className="weather-date">Saturday, March 26th</div>
                      <div className="weather-city">San Francisco, CA</div>
                    </div>
                  </div>
                  {/* END OF /. WEATHER */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner">
                    <img
                      src="../../assets/images/add320x270-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                  {/* START ARCHIVE */}
                  <div className="archive-wrapper">
                    <DatePickerComponents />
                  </div>
                  {/* END OF /. ARCHIVE */}
                  {/* START POLL WIDGET */}
                  <PollWidget />
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

    </Layout>

  )
}
