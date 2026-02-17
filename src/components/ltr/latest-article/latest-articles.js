

const LatestArticles = () => {
    return (
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
                    <a href="#" className="thumb">
                        <img
                            src="assets/images/218x150-1.jpg"
                            alt=""
                            className="img-fluid w-100 object-fit-cover"
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
                    <a href="#" className="thumb">
                        <img
                            src="assets/images/218x150-2.jpg"
                            alt=""
                            className="img-fluid w-100 object-fit-cover"
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
                    <a href="#" className="thumb">
                        <img
                            src="assets/images/218x150-3.jpg"
                            alt=""
                            className="img-fluid w-100 object-fit-cover"
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
                    <a href="#" className="thumb">
                        <img
                            src="assets/images/218x150-4.jpg"
                            alt=""
                            className="img-fluid w-100 object-fit-cover"
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
                    <a href="#" className="thumb">
                        <img
                            src="assets/images/340x215-1.jpg"
                            alt=""
                            className="img-fluid w-100 object-fit-cover"
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
                    <p className="d-lg-block d-none">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley...
                    </p>
                </div>
            </div>
        </div>
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
    );
};

export default LatestArticles;