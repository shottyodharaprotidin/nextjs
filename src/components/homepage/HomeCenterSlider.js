import dynamic from "next/dynamic";
import Link from "next/link";
import { fetchAPI, getStrapiMedia, formatDate } from "@/lib/strapi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
  // This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => (
    <div className="skeleton-loader w-100 skeleton-post-height-1" />
  ),
});

const HomeCenterSlider = ({ articles = [] }) => {
  const { language } = useLanguage();

  const t = {
    bn: {
      by: 'দ্বারা',
      authorFallback: 'সম্পাদক',
      news: 'সংবাদ'
    },
    en: {
      by: 'By',
      authorFallback: 'Editor',
      news: 'News'
    }
  };

  const currentT = t[language] || t.bn;

  const optionEight = {
    loop: true,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    navText: [
      `<i class='ti ti-angle-left' aria-label='Previous'></i>`,
      `<i class='ti ti-angle-right' aria-label='Next'></i>`
    ]
  }

  if (!articles || articles.length === 0) {
    return null; 
  }

  return (
      <OwlCarousel id="owl-slider" className="owl-theme" {...optionEight}>
      {articles.map((article) => {
        const data = article.attributes || article;
        const { title, slug, category, author, publishedAt, cover } = data;
        const categoryName = category?.data?.attributes?.name || currentT.news;
        const authorName = author?.data?.attributes?.name || currentT.authorFallback;
        const imageUrl = getStrapiMedia(cover);
        const date = formatDate(publishedAt, language === 'bn' ? 'bn' : 'en');

        return (
          <div key={article.id} className="item">
            <div className="slider-post post-height-1">
              <Link href={`/article/${slug}`} className="news-image">
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="img-fluid"
                  width={800}
                  height={450}
                  fetchPriority="high"
                  style={{ height: '100%', objectFit: 'cover' }} 
                />
              </Link>
              <div className="post-text">
                <span className="post-category">{categoryName}</span>
                <h3>
                  <Link href={`/article/${slug}`}>
                    {title}
                  </Link>
                </h3>
                <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                  <li>
                    {currentT.by} <span className="editor-name">{authorName}</span>
                  </li>
                  <li>{date}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default HomeCenterSlider;
