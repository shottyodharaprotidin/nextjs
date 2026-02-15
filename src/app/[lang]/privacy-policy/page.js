'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
    return (
        <main className="page_main_wrapper py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="privacy-content">
                            <h1 className="mb-4 text-center">গোপনীয়তা নীতি</h1>
                            <p className="lead mb-4">
                                আই-নিউজ-এ আপনার গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। এই গোপনীয়তা নীতি নথিটি বর্ণনা করে যে আমরা কীভাবে আপনার ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং রক্ষা করি।
                            </p>
                            
                            <section className="mb-5">
                                <h3 className="mb-3">১. তথ্য সংগ্রহ</h3>
                                <p>
                                    আমরা যখন আপনি আমাদের নিউজলেটার সাবস্ক্রাইব করেন বা আমাদের সাইটের সাথে ইন্টারঅ্যাক্ট করেন তখন আপনার কাছ থেকে তথ্য সংগ্রহ করি। এতে আপনার নাম এবং ইমেল ঠিকানা অন্তর্ভুক্ত থাকতে পারে।
                                </p>
                            </section>

                            <section className="mb-5">
                                <h3 className="mb-3">২. তথ্যের ব্যবহার</h3>
                                <p>
                                    আপনার কাছ থেকে আমরা যে তথ্য সংগ্রহ করি তা নিম্নলিখিত উপায়ে ব্যবহার করা যেতে পারে:
                                </p>
                                <ul className="list-unstyled ps-3">
                                    <li>• আপনার অভিজ্ঞতা ব্যক্তিগতকৃত করতে</li>
                                    <li>• আমাদের ওয়েবসাইট উন্নত করতে</li>
                                    <li>• পর্যায়ক্রমিক ইমেল পাঠাতে</li>
                                </ul>
                            </section>

                            <section className="mb-5">
                                <h3 className="mb-3">৩. তথ্য সুরক্ষা</h3>
                                <p>
                                    আপনার ব্যক্তিগত তথ্যের নিরাপত্তা বজায় রাখতে আমরা বিভিন্ন নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি। আমরা আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি বা বাণিজ্য করি না।
                                </p>
                            </section>

                            <section className="mb-5">
                                <h3 className="mb-3">৪. যোগাযোগ</h3>
                                <p>
                                    এই গোপনীয়তা নীতি সম্পর্কে আপনার যদি কোনো প্রশ্ন থাকে, তবে আপনি আমাদের সাথে যোগাযোগ করতে পারেন।
                                </p>
                            </section>

                            <div className="text-center mt-5">
                                <Link href="/" className="btn btn-news">হোম পেজে ফিরে যান</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
