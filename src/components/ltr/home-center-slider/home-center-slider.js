import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
  }
  // This is for Next.js. On Rect JS remove this line
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  })
const HomeCenterSlider = () => {

  const optionEight = {
    loop: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 4000, //Set AutoPlay to 4 seconds
    autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i class='ti ti-angle-left'></i>`,
      `<i class='ti ti-angle-right'></i>`
    ]
  }
    return (
        <OwlCarousel id="owl-slider" className="owl-theme" {...optionEight}>
        {/* Slider item one */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="#" className="news-image">
              <img
                src="assets/images/masonry/slider/01.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Business</span>
              <h2>
                <a href="#">
                  It is a long established fact that a reader will be
                  distracted by the readable content of a page when
                  looking at its layout.
                </a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">David hall</span>
                </li>
                <li>Aug 16, 2023</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item one */}
        {/* Slider item two */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="#" className="news-image">
              <img
                src="assets/images/masonry/slider/02.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Politics</span>
              <h2>
                <a href="#">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                  in some form, by injected humour, or randomised words.
                </a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">David hall</span>
                </li>
                <li>Aug 16, 2023</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item two */}
        {/* Slider item three */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="#" className="news-image">
              <img
                src="assets/images/masonry/slider/03.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Photography</span>
              <h2>
                <a href="#">
                  All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the
                  first true generator on the Internet.
                </a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">David hall</span>
                </li>
                <li>Aug 16, 2023</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item three */}
        {/* Slider item four */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="#" className="news-image">
              <img
                src="assets/images/masonry/slider/04.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Travel</span>
              <h2>
                <a href="#">
                  Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">David hall</span>
                </li>
                <li>Aug 16, 2023</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item four */}
        {/* Slider item five */}
        <div className="item">
          <div className="slider-post post-height-1">
            <a href="#" className="news-image">
              <img
                src="assets/images/masonry/slider/05.jpg"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="post-text">
              <span className="post-category">Business</span>
              <h2>
                <a href="#">
                  {" "}
                  It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages
                </a>
              </h2>
              <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                <li>
                  By <span className="editor-name">David hall</span>
                </li>
                <li>Aug 16, 2023</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /.Slider item five */}
      </OwlCarousel>
    );
};

export default HomeCenterSlider;