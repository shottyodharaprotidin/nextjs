"use client"
import LayoutTwo from "@/components/rtl/layout/layout-two";
import RelatedArticles from "@/components/rtl/related-articles/related-articles";
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
    useRemoveBodyClass(['None', 'layout-rtl'], ['home-seven', 'home-nine', 'boxed-layout', 'home-six', 'home-two']);
    return (
        <LayoutTwo>
            {/* *** START PAGE MAIN CONTENT *** */}
            <main className="page_main_wrapper">
                {/* START PAGE TITLE */}
                <div className="page-title">
                    <div className="container">
                        <div className="align-items-center row">
                            <div className="col">
                                <h1 className="mb-sm-0">
                                    <strong>Post Style </strong> Three
                                </h1>
                            </div>
                            <div className="col-12 col-sm-auto">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb d-inline-block">
                                        <li className="breadcrumb-item">
                                            <Link href="/rtl/home">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Post Style Three
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END OF /. PAGE TITLE */}
                <div className="container">
                    <div className="row row-m">
                        {/* START MAIN CONTENT */}
                        <div className="col-sm-8 col-p  main-content">
                            <StickyBox>
                                <div className="post_details_inner">
                                    <div className="post_details_block details_block3">
                                        <div className="post-header">
                                            <ul className="td-category">
                                                <li>
                                                    <Link className="post-category" href="#">
                                                        Lifestyle
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="post-category" href="#">
                                                        Health &amp; Fitness
                                                    </Link>{" "}
                                                </li>
                                            </ul>
                                            <h2>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry.
                                            </h2>
                                            <ul className="authar-info d-flex flex-wrap">
                                                <li className="author">
                                                    <Link href="#">by david hall</Link>
                                                </li>
                                                <li className="date">May 29,2016</li>
                                                <li className="view">
                                                    <Link href="#">25 views</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <figure className="social-icon">
                                            <img
                                                src="../../assets/images/details-750x420-1.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                            <div>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                                <Link href="#">
                                                    <i className="fab fa-instagram" />
                                                </Link>
                                                <Link href="#" className="d-md-block d-none">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                                <Link href="#" className="d-md-block d-none">
                                                    <i className="fab fa-pinterest-p" />
                                                </Link>
                                            </div>
                                        </figure>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using 'Content
                                            here, content here', making it look like readable English.
                                            Many.
                                        </p>
                                        <h4>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the .
                                        </h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look
                                            even slightly believable.
                                        </p>
                                        <blockquote className="no-sign">
                                            <p>
                                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                                odit aut fugit, sed quia consequuntur magni dolores eos qui
                                                ratione voluptatem sequi nesciunt.
                                            </p>
                                        </blockquote>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p>
                                                    Contrary to popular belief, Lorem Ipsum is not simply
                                                    random text. It has roots in a piece of classical Latin
                                                    literature from 45 BC, making it over 2000 years old.
                                                    Richard McClintock, a Latin professor at Hampden-Sydney
                                                    College in Virginia, looked up one of the more obscure
                                                    Latin words, consectetur, from a Lorem Ipsum passage, and
                                                    going through the cites of the word in classical
                                                    literature, discovered the undoubtable source.
                                                </p>
                                            </div>
                                            <div className="col-sm-6">
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable content of a page when looking
                                                    at its layout. The point of using Lorem Ipsum is that it
                                                    has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here, content here', making it
                                                    look like readable English. Many desktop publishing
                                                    packages and web page editors now use Lorem Ipsum as their
                                                    default model text,{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <h3>The most beautiful people we have known are those:</h3>
                                        <ul className="triangle-list">
                                            <li>
                                                It has survived not only five centuries, but also the leap
                                                into electronic typesetting, remaining essentially
                                                unchanged.
                                            </li>
                                            <li>
                                                Lorem Ipsum passages, and more recently with desktop
                                                publishing software like Aldus PageMaker including versions
                                                of Lorem Ipsum.
                                            </li>
                                            <li>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old.
                                            </li>
                                        </ul>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the industry's
                                            standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled it to make a type
                                            specimen book. It has survived not only five centuries, but
                                            also the leap into electronic typesetting, remaining
                                            essentially unchanged.
                                        </p>
                                        <div className="ratio ratio-16x9">
                                            <iframe src="https://www.youtube.com/embed/i3qUonr3d9U" title="YouTube video"></iframe>
                                        </div>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look
                                            even slightly believable. If you are going to use a passage of
                                            Lorem Ipsum, you need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum
                                            generators on the Internet tend to repeat predefined chunks as
                                            necessary, making this the first true generator on the
                                            Internet. It uses a dictionary of over 200 Latin words,
                                            combined with a handful of model sentence structures, to
                                            generate Lorem Ipsum which looks reasonable. The generated
                                            Lorem Ipsum is therefore always free from repetition, injected
                                            humour, or non-characteristic words etc.
                                        </p>
                                        <blockquote>
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random
                                                text. It has roots in a piece of classical Latin{" "}
                                            </p>
                                        </blockquote>
                                        <p>
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less
                                            normal distribution of letters, as opposed to using 'Content
                                            here, content here', making it look like readable English.
                                            Many desktop publishing packages and web page editors now use
                                            Lorem Ipsum as their default model text, and a search for
                                            'lorem ipsum' will uncover many web sites still in their
                                            infancy. Various versions have evolved over the years,
                                            sometimes by accident, sometimes on purpose (injected humour
                                            and the like).
                                        </p>
                                    </div>
                                    {/* Post footer */}
                                    <div className="post-footer">
                                        <div className="row thm-margin">
                                            <div className="col-xs-12 col-sm-12 col-md-12 thm-padding">
                                                {/* pagination */}
                                                <ul className="pagination">
                                                    <li className="disabled">
                                                        <span className="ti ti-angle-left" />
                                                    </li>
                                                    <li className="active">
                                                        <span>1</span>
                                                    </li>
                                                    <li>
                                                        <Link href="#">2</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">3</Link>
                                                    </li>
                                                    <li className="disabled">
                                                        <span className="extend">...</span>
                                                    </li>
                                                    <li></li>
                                                    <li>
                                                        <Link href="#">12</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <i className="ti ti-angle-right" />
                                                        </Link>
                                                    </li>
                                                </ul>{" "}
                                                {/* /.pagination */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* START RELATED ARTICLES */}
                                <div className="post-inner post-inner-2">
                                    {/*post header*/}
                                    <div className="post-head">
                                        <h2 className="title">
                                            <strong>Related </strong> Articles
                                        </h2>
                                    </div>
                                    {/* post body */}
                                    <div className="post-body">
                                        <RelatedArticles/>
                                    </div>
                                    {/* Post footer */}
                                    <div className="post-footer">
                                        <div className="row thm-margin">
                                            <div className="col-md-8 thm-padding">
                                                <Link href="#" className="more-btn">
                                                    More popular posts
                                                </Link>
                                            </div>
                                            <div className="col-md-4 d-md-block d-none thm-padding">
                                                <div className="social">
                                                    <ul>
                                                        <li>
                                                            <div className="share transition">
                                                                <Link href="#" target="_blank" className="ico fb">
                                                                    <i className="fab fa-facebook-f" />
                                                                </Link>
                                                                <Link href="#" target="_blank" className="ico tw">
                                                                    <i className="fab fa-twitter" />
                                                                </Link>
                                                                <Link href="#" target="_blank" className="ico rs">
                                                                    <i className="fas fa-rss" />
                                                                </Link>
                                                                <Link href="#" target="_blank" className="ico pin">
                                                                    <i className="fab fa-pinterest-p" />
                                                                </Link>
                                                                <i className="ti ti-share ico-share" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <i className="ti ti-heart" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                <i className="ti ti-twitter" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF /. RELATED ARTICLES */}
                                {/* START COMMENT */}
                                <div className="comments-container">
                                    <h3>Comments (3)</h3>
                                    <ul className="comments-list">
                                        <li>
                                            <div className="comment-main-level">
                                                {/* Avatar */}
                                                <div className="comment-avatar">
                                                    <img src="../../assets/images/avatar-1.jpg" alt="" />
                                                </div>
                                                <div className="comment-box">
                                                    <div className="comment-content">
                                                        <div className="comment-header">
                                                            {" "}
                                                            <cite className="comment-author">
                                                                - Mozammel Hoque
                                                            </cite>
                                                            <time
                                                                dateTime="2012-10-27"
                                                                className="comment-datetime"
                                                            >
                                                                25 October 2016 at 12.27 pm
                                                            </time>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Velit omnis animi et iure laudantium vitae,
                                                            praesentium optio, sapiente distinctio illo?
                                                        </p>
                                                        <Link href="#" className="btn btn-news">
                                                            {" "}
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="comments-list reply-list">
                                                <li>
                                                    {/* Avatar */}
                                                    <div className="comment-avatar">
                                                        <img src="../../assets/images/avatar-1.jpg" alt="" />
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="comment-content">
                                                            <div className="comment-header">
                                                                {" "}
                                                                <cite className="comment-author">
                                                                    - Tahmina Akthr
                                                                </cite>
                                                                <time
                                                                    dateTime="2012-10-27"
                                                                    className="comment-datetime"
                                                                >
                                                                    25 October 2016 at 12.27 pm
                                                                </time>
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Velit omnis animi et iure laudantium vitae,
                                                                praesentium optio, sapiente distinctio illo?
                                                            </p>
                                                            <Link href="#" className="btn btn-news">
                                                                {" "}
                                                                Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/* Avatar */}
                                                    <div className="comment-avatar">
                                                        <img src="../../assets/images/avatar-1.jpg" alt="" />
                                                    </div>
                                                    <div className="comment-box">
                                                        <div className="comment-content">
                                                            <div className="comment-header">
                                                                {" "}
                                                                <cite className="comment-author">
                                                                    - Mozammel Hoque
                                                                </cite>
                                                                <time
                                                                    dateTime="2012-10-27"
                                                                    className="comment-datetime"
                                                                >
                                                                    25 October 2016 at 12.27 pm
                                                                </time>
                                                            </div>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                                elit. Velit omnis animi et iure laudantium vitae,
                                                                praesentium optio, sapiente distinctio illo?
                                                            </p>
                                                            <Link href="#" className="btn btn-news">
                                                                {" "}
                                                                Reply
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-main-level">
                                                {/* Avatar */}
                                                <div className="comment-avatar">
                                                    <img src="../../assets/images/avatar-1.jpg" alt="" />
                                                </div>
                                                <div className="comment-box">
                                                    <div className="comment-content">
                                                        <div className="comment-header">
                                                            {" "}
                                                            <cite className="comment-author">
                                                                - Tahmina Akthr
                                                            </cite>
                                                            <time
                                                                dateTime="2012-10-27"
                                                                className="comment-datetime"
                                                            >
                                                                25 October 2016 at 12.27 pm
                                                            </time>
                                                        </div>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                                            elit. Velit omnis animi et iure laudantium vitae,
                                                            praesentium optio, sapiente distinctio illo?
                                                        </p>
                                                        <Link href="#" className="btn btn-news">
                                                            {" "}
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* END OF /. COMMENT */}
                                {/* START COMMENTS FORMS */}
                                <form className="comment-form" action="#" method="post">
                                    <h3>
                                        <strong>Leave</strong> a Comment
                                    </h3>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="name">full name*</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your name*"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="email">Email*</label>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Your email address here"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="name">website</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="website"
                                                    name="website"
                                                    placeholder="Your website url"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="email">Subject</label>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Write subject here"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            placeholder="Your Comment*"
                                            rows={5}
                                            defaultValue={""}
                                        />
                                    </div>
                                    <Link href="#" className="btn btn-news">
                                        {" "}
                                        Submit
                                    </Link>
                                </form>
                                {/* END OF /. COMMENTS FORMS */}
                            </StickyBox>
                        </div>
                        {/* END OF /. MAIN CONTENT */}
                        {/* START SIDE CONTENT */}
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="../../assets/images/add320x270-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                                    <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                                    <span className="fw-bold mx-1">2.5M</span> Followers
                                </div>
                                {/* END OF /. SOCIAL COUNTER TEXT */}
                                {/* START SOCIAL ICON */}
                                <div className="social-media-inner mb-2">
                                    <ul className="g-1 row social-media">
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