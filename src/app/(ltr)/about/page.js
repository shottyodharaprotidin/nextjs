"use client"

import LayoutTwo from '@/components/ltr/layout/layout-two';
import { useBackgroundImageLoader } from '@/components/ltr/use-background-image/use-background-image';
import useRemoveBodyClass from '@/components/ltr/useEffect-hook/useEffect-hook';
import Link from 'next/link';

const page = () => {
    useRemoveBodyClass(['None'], ['home-seven', 'home-nine','boxed-layout','home-six','home-two']);
    useBackgroundImageLoader()
    return (
        <LayoutTwo>
            {/* *** START PAGE MAIN CONTENT *** */}
            <main className="page_main_wrapper">
                {/* START PAGE HEADER */}
                <section
                    className="inner-head bg-img"
                    data-image-src="assets/images/about-bg.jpg"
                >
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="entry-title">About Us</h2>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                    lorem quam, adipiscing condimentum tristique vel, eleifend sed
                                    turpis. Pellentesque cursus arcu id magna euismod in elementum
                                    purus molestie.
                                </p>
                                <div className="breadcrumb">
                                    <ul className="clearfix">
                                        <li className="ib">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="ib current-page">About</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END OF /. PAGE HEADER */}
                <div className="team about-content">
                    <div className="container">
                        <div className="about-title">
                            <h1>Our Mission</h1>
                            <h3>
                                It is a long established fact that a reader will be distracted
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five .
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2>Our Valuable Team Members </h2>
                            </div>
                            {/* end col-12 */}
                            <div className="col-6 col-md-3">
                                <figure className="member">
                                    {" "}
                                    <img
                                        src="assets/images/team/1.png"
                                        className="img-fluid"
                                        alt="Image"
                                    />
                                    <figcaption>
                                        <h4>Debora Hilton</h4>
                                        <small>Editor</small>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                {/* end member */}
                            </div>
                            {/* end col-3 */}
                            <div className="col-6 col-md-3">
                                <figure className="member">
                                    {" "}
                                    <img
                                        src="assets/images/team/2.png"
                                        className="img-fluid"
                                        alt="Image"
                                    />
                                    <figcaption>
                                        <h4>Debora Hilton</h4>
                                        <small>Editor</small>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                {/* end member */}
                            </div>
                            {/* end col-3 */}
                            <div className="col-6 col-md-3">
                                <figure className="member">
                                    {" "}
                                    <img
                                        src="assets/images/team/3.png"
                                        className="img-fluid"
                                        alt="Image"
                                    />
                                    <figcaption>
                                        <h4>Chris O'Daniel</h4>
                                        <small>Publisher</small>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                {/* end member */}
                            </div>
                            {/* end col-3 */}
                            <div className="col-6 col-md-3">
                                <figure className="member">
                                    {" "}
                                    <img
                                        src="assets/images/team/4.png"
                                        className="img-fluid"
                                        alt="Image"
                                    />
                                    <figcaption>
                                        <h4>Lian Holden</h4>
                                        <small>Project Manager</small>
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-facebook-f" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-twitter" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-youtube" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <i className="fab fa-linkedin-in" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </figcaption>
                                </figure>
                                {/* end member */}
                            </div>
                            {/* end col-3 */}
                        </div>
                        {/* end row */}
                        <div className="about-title">
                            <h2>Bold History that Fuels the Future</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s
                                with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus
                                PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <h2>Related Articles</h2>
                        <div className="news-grid-2">
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <div className="grid-item">
                                        <div className="grid-item-img">
                                            <Link href="#">
                                                <img
                                                    src="assets/images/218x150-1.jpg"
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
                                                Lorem Ipsum is simply dummy text of the printing.
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
                                <div className="col-6 col-md-3">
                                    <div className="grid-item">
                                        <div className="grid-item-img">
                                            <Link href="#">
                                                <img
                                                    src="assets/images/218x150-2.jpg"
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
                                                It is a long established fact that a reader will be
                                                distracted by
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
                                <div className="col-6 col-md-3">
                                    <div className="grid-item">
                                        <div className="grid-item-img">
                                            <Link href="#">
                                                <img
                                                    src="assets/images/218x150-3.jpg"
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
                                                There are many variations of passages of Lorem Ipsum.
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
                                <div className="col-6 col-md-3">
                                    <div className="grid-item">
                                        <div className="grid-item-img">
                                            <Link href="#">
                                                <img
                                                    src="assets/images/218x150-4.jpg"
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
                                                There are many variations of passages of Lorem Ipsum.
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
                </div>
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}


        </LayoutTwo>
    );
};

export default page;