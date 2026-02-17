import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel-rtl"), {
  ssr: false,
});

const NewsCarousal = () => {
  const optionFour = {
    rtl: true,
    items: 1,
    loop: true,
    margin: 8,
    dots: false,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
    nav: true,
    navText: [
      "<i class='ti ti ti-angle-left'></i>",
      "<i class='ti ti ti-angle-right'></i>"
    ]
  }
  return (
    <OwlCarousel className="post-slider owl-theme" {...optionFour}>
      {/* item one */}
      <div className="item">
        <div className="row g-2">
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="progressber" data-percent={80} />
              <div className="post-text">
                <span className="post-category">
                  Holliday Recipes{" "}
                </span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-2.jpg"
                  alt=""
                  className="img-fluid"
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
                <span className="post-category">Business</span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-3.jpg"
                  alt=""
                  className="img-fluid"
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
                <span className="post-category">Business</span>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing{" "}
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-4.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="progressber" data-percent={60} />
              <div className="post-text">
                <span className="post-category">Business</span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* item two */}
      <div className="item">
        <div className="row g-2">
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-5.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="progressber" data-percent={80} />
              <div className="post-text">
                <span className="post-category">
                  Holliday Recipes{" "}
                </span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-6.jpg"
                  alt=""
                  className="img-fluid"
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
                <span className="post-category">Business</span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-7.jpg"
                  alt=""
                  className="img-fluid"
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
                <span className="post-category">Business</span>
                <h4>
                  Lorem Ipsum is simply dummy text of the printing{" "}
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
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="more-post">
              <a href="#" className="news-image">
                <img
                  src="../../assets/images/620x370-8.jpg"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <div className="progressber" data-percent={60} />
              <div className="post-text">
                <span className="post-category">Business</span>
                <h4>
                  <a href="#">
                    Lorem Ipsum is simply dummy text of the printing
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export default NewsCarousal;