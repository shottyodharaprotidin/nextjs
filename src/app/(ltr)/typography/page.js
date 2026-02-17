
"use client"

import LayoutTwo from "@/components/ltr/layout/layout-two";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import Link from "next/link";
import StickyBox from "react-sticky-box";


const page = () => {
    useRemoveBodyClass(['None'], ['home-seven', 'home-nine', 'boxed-layout', 'home-six', 'home-two']);
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
                                    <strong>Typography</strong>
                                </h1>
                            </div>
                            <div className="col-12 col-sm-auto">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb d-inline-block">
                                        <li className="breadcrumb-item">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Typography
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
                        <div className="col-sm-7 col-md-8 col-p  main-content">
                            <StickyBox>
                                <div className="post-inner">
                                    <div className="post-body">
                                        <div className="typography-content">
                                            <h3>BLOCKQUOTES</h3>
                                            <div className="article_comment">
                                                <p>
                                                    Hi there! I’m a bike messenger by day, aspiring actor by
                                                    night, and this is my website. I live in Los Angeles, have
                                                    a great dog named Jack, and I like piña coladas. (And
                                                    gettin’ caught in the rain.)
                                                </p>
                                                <div className="customers">
                                                    {" "}
                                                    - Mozammel Hoque,<span> Advisor</span>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <h3>UNORDERED LISTS (NESTED)</h3>
                                                    <ul>
                                                        <li>
                                                            List item one
                                                            <ul>
                                                                <li>
                                                                    List item one
                                                                    <ul>
                                                                        <li>List item one</li>
                                                                        <li>List item two</li>
                                                                        <li>List item three</li>
                                                                        <li>List item four</li>
                                                                    </ul>
                                                                </li>
                                                                <li>List item two</li>
                                                                <li>List item three</li>
                                                                <li>List item four</li>
                                                            </ul>
                                                        </li>
                                                        <li>List item two</li>
                                                        <li>List item three</li>
                                                        <li>List item four</li>
                                                    </ul>
                                                </div>
                                                <div className="col-col-6">
                                                    <h3>ORDERED LIST (NESTED)</h3>
                                                    <ol>
                                                        <li>
                                                            List item one
                                                            <ol>
                                                                <li>
                                                                    List item one
                                                                    <ol>
                                                                        <li>List item one</li>
                                                                        <li>List item two</li>
                                                                        <li>List item three</li>
                                                                        <li>List item four</li>
                                                                    </ol>
                                                                </li>
                                                                <li>List item two</li>
                                                                <li>List item three</li>
                                                                <li>List item four</li>
                                                            </ol>
                                                        </li>
                                                        <li>List item two</li>
                                                        <li>List item three</li>
                                                        <li>List item four</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="headding_ex">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h1>h1. Heading 1</h1>
                                                            </td>
                                                            <td className="type-info">Semibold 36px</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2>h2. Heading 2</h2>
                                                            </td>
                                                            <td className="type-info">Semibold 30px</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h3>h3. Heading 3</h3>
                                                            </td>
                                                            <td className="type-info">Semibold 24px</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h4>h4. Heading 4</h4>
                                                            </td>
                                                            <td className="type-info">Semibold 18px</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h5>h5. Heading 5</h5>
                                                            </td>
                                                            <td className="type-info">Semibold 14px</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h6>h6. Heading 6</h6>
                                                            </td>
                                                            <td className="type-info">Semibold 12px</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br />
                                            <div className="peragraph_ex">
                                                <p>
                                                    Lorem ipsum <strong>eget urna mollis</strong> ornare vel
                                                    eu leo. <em>Cum sociisnatoque penatibus</em> et magnis dis
                                                    parturient montes, <code>code</code> nascetur ridiculus
                                                    mus. Nullam id dolor id nibh ultricies vehicula ut id
                                                    elit. Sed euismod aliquet sapien consequat tincidunt.
                                                </p>
                                                <p>
                                                    Vivamus sagittis lacus vel augue laoreet{" "}
                                                    <abbr title="" data-original-title="Sample abbreviation">
                                                        rutrum faucibus dolor auctor
                                                    </abbr>
                                                    . Duis mollis, est non commodo luctus, nisi erat porttitor
                                                    ligula, eget lacinia odio sem nec elit. Donec sed odio
                                                    dui. Sed euismod aliquet sapien consequat tincidunt.
                                                </p>
                                                <p>
                                                    But I must explain to you how all this mistaken idea of
                                                    denouncing pleasure and praising pain was born and I will
                                                    give you a complete account of the system, and expound the
                                                    actual.
                                                </p>
                                                <p>
                                                    But I must explain to you how all this mistaken idea of
                                                </p>
                                            </div>
                                            <br />
                                            <h3>ADDRESS, ALIGNMENT</h3>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                    <h4>Address</h4>
                                                    <address>
                                                        {" "}
                                                        <strong>Twitter, Inc.</strong>
                                                        <br /> 1355 Market Street, Suite 900
                                                        <br /> San Francisco, CA 94103
                                                        <br /> <abbr title="Phone">P:</abbr> (123) 456-7890{" "}
                                                    </address>
                                                    <address>
                                                        {" "}
                                                        <strong>Full Name</strong>
                                                        <br /> <a href="mailto:#">
                                                            first.last@example.com
                                                        </a>{" "}
                                                    </address>
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <h4>Alignment</h4>
                                                    <p className="text-left">Left aligned text.</p>
                                                    <p className="text-center">Center aligned text.</p>
                                                    <p className="text-right">Right aligned text.</p>
                                                    <p className="text-justify">Justified text.</p>
                                                    <p className="text-nowrap">No wrap text.</p>
                                                </div>
                                            </div>
                                            <br />
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <h3>Inline text elements</h3>
                                                    <p>
                                                        You can use the mark tag to
                                                        <mark>highlight</mark> text.
                                                    </p>
                                                    <p>
                                                        <del>
                                                            This line of text is meant to be treated as deleted
                                                            text.
                                                        </del>
                                                    </p>
                                                    <p>
                                                        <s>
                                                            This line of text is meant to be treated as no longer
                                                            accurate.
                                                        </s>
                                                    </p>
                                                    <p>
                                                        <ins>
                                                            This line of text is meant to be treated as an
                                                            addition to the document.
                                                        </ins>
                                                    </p>
                                                    <p>
                                                        <u>This line of text will render as underlined</u>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            This line of text is meant to be treated as fine
                                                            print.
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <strong>This line rendered as bold text.</strong>
                                                    </p>
                                                    <p>
                                                        <em>This line rendered as italicized text.</em>
                                                    </p>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h3>Contextual Text Colors</h3>
                                                    <p className="text-muted">
                                                        This paragraph is styled with class "text-muted".
                                                    </p>
                                                    <p className="text-primary">
                                                        This paragraph is styled with class "text-primary".
                                                    </p>
                                                    <p className="text-success">
                                                        This paragraph is styled with class "text-success".
                                                    </p>
                                                    <p className="text-info">
                                                        This paragraph is styled with class "text-info".
                                                    </p>
                                                    <p className="text-warning">
                                                        This paragraph is styled with class "text-warning".
                                                    </p>
                                                    <p className="text-danger">
                                                        This paragraph is styled with class "text-danger".
                                                    </p>
                                                </div>
                                            </div>
                                            <br />
                                            <h3>TABLE</h3>
                                            <table className="table table-bordered table-sm">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Mark</td>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td colSpan={2}>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </StickyBox>
                        </div>
                        {/* END OF /. MAIN CONTENT */}
                        {/* START SIDE CONTENT */}
                        <div className="col-sm-5 col-md-4 col-p rightSidebar">
                            <StickyBox>
                                {/* START ADVERTISEMENT */}
                                <div className="add-inner">
                                    <img
                                        src="assets/images/add320x270-1.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                {/* END OF /. ADVERTISEMENT */}
                                {/* START SOCIAL COUNTER TEXT */}
                                <div className="align-items-center d-flex fs-6 justify-content-center mb-2 text-center social-counter-total">
                                    <i className="fa-solid fa-heart text-primary me-1" /> Join{" "}
                                    <span className="fw-bold mx-1">2.5M</span> Followers
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
                                                                <i className="ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti-thumb-up" />
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
                                                                <i className="ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti-thumb-up" />
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
                                                                <i className="ti-timer" /> May 15, 2016
                                                            </a>
                                                        </li>
                                                        <li className="like">
                                                            <a href="#">
                                                                <i className="ti-thumb-up" />
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
            </main>
            {/* *** END OF /. PAGE MAIN CONTENT *** */}
        </LayoutTwo>

    );
};

export default page;