"use client"

import GoogleMapComponents from "@/components/rtl/google-map/google-map";
import LayoutTwo from "@/components/rtl/layout/layout-two";
import useRemoveBodyClass from "@/components//rtl/useEffect-hook/useEffect-hook";
import Link from "next/link";

import StickyBox from "react-sticky-box";
import { useEffect } from "react";
const page = () => {
    useEffect(() => {
        // Your logic for setting dir attribute using JavaScript
        // For example:
        document.documentElement.setAttribute('dir', 'rtl');
    }, []);
    {/* *** IMPORT BACKGROUND IMAGE *** */ }
 

    useRemoveBodyClass(['None','layout-rtl'], ['home-seven', 'home-nine','boxed-layout','home-six','home-two']);
    return (
        <LayoutTwo>
            {/* START PAGE TITLE */}
            <div className="page-title">
                <div className="container">
                    <div className="align-items-center row">
                        <div className="col">
                            <h1 className="mb-sm-0">
                                <strong>Contact</strong>
                            </h1>
                        </div>
                        <div className="col-12 col-sm-auto">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb d-inline-block">
                                    <li className="breadcrumb-item">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Contact
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
                <div className="container">
                    <div className="row row-m">
                        <div className="col-sm-7 col-md-8 main-content col-p">
                            <StickyBox>
                                {/* START CONTACT FORM AREA */}
                                <div className="contact_form_inner">
                                    <div className="panel_inner">
                                        <div className="panel_header">
                                            <h4>
                                                <strong>We'd Love to Here</strong> Form you, Get in Touch
                                                With in Us?{" "}
                                            </h4>
                                        </div>
                                        <div className="panel_body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's
                                                standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a
                                                type specimen book. It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged.
                                            </p>
                                            <form className="comment-form" action="#" method="post">
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
                                                <a href="#" className="btn btn-news">
                                                    {" "}
                                                    Submit
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF CONTACT FORM AREA */}
                            </StickyBox>
                        </div>
                        <div className="col-sm-5 col-md-4 rightSidebar col-p">
                            <StickyBox>
                                {/* START CONTACT INFO */}
                                <div className="panel_inner">
                                    <div className="panel_header">
                                        <h4>
                                            <strong>Contact</strong> Info{" "}
                                        </h4>
                                    </div>
                                    <div className="panel_body">
                                        <address>
                                            {" "}
                                            <strong>Twitter, Inc.</strong>
                                            <br /> 1355 Market Street, Suite 900
                                            <br /> San Francisco, CA 94103
                                            <br /> <abbr title="Phone">P:</abbr> (123) 456-7890{" "}
                                        </address>
                                        <address>
                                            {" "}
                                            <strong>Twitter, Inc.</strong>
                                            <br /> <abbr title="Phone">Phone:</abbr> 1.800.555.6789
                                            <br /> Fax: 1.888.555.9876
                                            <br /> <abbr title="Phone">P:</abbr> (123) 456-7890{" "}
                                        </address>
                                        <address>
                                            {" "}
                                            <strong>Full Name</strong>
                                            <br /> <a href="mailto:#">first.last@example.com</a>{" "}
                                        </address>
                                    </div>
                                </div>
                                {/* END OF /. CONTACT INFO */}
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-2 text-center social-counter-total">
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
                            </StickyBox>
                        </div>
                    </div>
                    <div className="panel_inner">
                        <div className="panel_body">
                            {/* The element that will contain Google Map. This is used in both the Javascript and CSS above. */}
                            <GoogleMapComponents/>
                        </div>
                    </div>
                </div>
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}
        </LayoutTwo>

    );
};

export default page;