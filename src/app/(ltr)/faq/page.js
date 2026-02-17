"use client"

import LayoutTwo from "@/components/ltr/layout/layout-two";
import useRemoveBodyClass from "@/components/ltr/useEffect-hook/useEffect-hook";
import Link from "next/link";
const page = () => {
    useRemoveBodyClass(['None'], ['home-seven', 'home-nine','boxed-layout','home-six','home-two']);
    return (
        <LayoutTwo>
            {/* *** START PAGE MAIN CONTENT *** */}
            <main className="page_main_wrapper">
                {/* START PAGE HEADER */}
                <section
                    className="inner-head bg-img"
                    data-image-src="assets/images/faq-bg.jpg"
                >
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="entry-title">Frequently Asked Question</h1>
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
                                        <li className="ib current-page">F.A.Q</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END OF /. PAGE HEADER */}
                <section className="faq-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="panel-group" id="accordion" role="tablist">
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingOne">
                                            <h4 className="panel-title">
                                                <a
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseOne"
                                                    aria-controls="collapseOne"
                                                >
                                                    Collapsible Group Item #1
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="panel-collapse collapse in"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #1</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of panel */}
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingTwo">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseTwo"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Frequently Asked Question #2
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingTwo"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #2</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of panel */}
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingThree">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseThree"
                                                    aria-controls="collapseThree"
                                                >
                                                    Frequently Asked Question #3
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingThree"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #3</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of panel */}
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingFour">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseFour"
                                                    aria-controls="collapseFour"
                                                >
                                                    Frequently Asked Question #4
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingFour"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #4</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of panel */}
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingFive">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseFive"
                                                    aria-controls="collapseFive"
                                                >
                                                    Frequently Asked Question #5
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseFive"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingFive"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #5</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of panel */}
                                    <div className="panel">
                                        <div className="panel-heading" role="tab" id="headingSix">
                                            <h4 className="panel-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-bs-toggle="collapse"
                                                    data-parent="#accordion"
                                                    href="#collapseSix"
                                                    aria-controls="collapseSix"
                                                >
                                                    Frequently Asked Question #6
                                                </a>
                                            </h4>
                                        </div>
                                        <div
                                            id="collapseSix"
                                            className="panel-collapse collapse"
                                            role="tabpanel"
                                            aria-labelledby="headingSix"
                                        >
                                            <div className="panel-body">
                                                <h4>Frequently Asked Question #6</h4>
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                    standard dummy text ever since the 1500s, when an unknown
                                                    printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five
                                                    centuries, but also the leap into electronic typesetting,
                                                    remaining essentially unchanged. It was popularised in the
                                                    1960s with the release of Letraset sheets containing Lorem
                                                    Ipsum passages, and more recently with desktop publishing
                                                    software like Aldus PageMaker including versions of Lorem
                                                    Ipsum.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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