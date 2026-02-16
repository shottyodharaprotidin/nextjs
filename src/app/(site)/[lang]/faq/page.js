'use client';

import React from 'react';
import Link from 'next/link';

const FAQ = () => {
    return (
        <main className="page_main_wrapper py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="faq-content">
                            <h1 className="mb-4 text-center">সাধারণ জিজ্ঞাসা (FAQ)</h1>
                            <p className="lead mb-5 text-center">
                                আপনার যদি কোনো প্রশ্ন থাকে, এখানে সাধারণত জিজ্ঞাসিত কিছু প্রশ্নের উত্তর দেওয়া হলো।
                            </p>

                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item mb-3 border-0 shadow-sm">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            আই-নিউজ কী?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            আই-নিউজ একটি আধুনিক সংবাদ মাধ্যম যা আপনাকে রাজনীতি, অর্থনীতি, খেলাধুলা এবং প্রযুক্তির সর্বশেষ আপডেট প্রদান করে।
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mb-3 border-0 shadow-sm">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            আমি কীভাবে সদস্য হতে পারি?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            আপনি আমাদের ওয়েবসাইটের ফুটারের সাবস্ক্রিপশন বক্সের মাধ্যমে আপনার ইমেল ঠিকানা প্রদান করে আমাদের নিউজলেটারে সাবস্ক্রাইব করতে পারেন।
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mb-3 border-0 shadow-sm">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ই-পেপার কী?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            ই-পেপার হলো আমাদের সংবাদপত্রের ডিজিটাল সংস্করণ যা আপনি আপনার ডিভাইস থেকে সরাসরি পড়তে পারেন।
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item mb-3 border-0 shadow-sm">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            আমি কি সংবাদগুলো শেয়ার করতে পারি?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            হ্যাঁ, প্রতিটি খবরের নিচে থাকা সোশ্যাল শেয়ার আইকন ব্যবহার করে আপনি সহজেই আপনার বন্ধুদের সাথে খবরগুলো শেয়ার করতে পারেন।
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-5">
                                <p>আপনার আরও প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন।</p>
                                <Link href="/" className="btn btn-news">হোম পেজে ফিরে যান</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FAQ;
