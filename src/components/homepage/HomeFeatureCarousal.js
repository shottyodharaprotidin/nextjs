'use client'

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";
import { getFeaturedArticles } from "@/services/articleService";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
// Skeleton placeholder used during carousel JS loading
const CarouselSkeleton = () => (
  <div className="d-flex gap-2">
    {[1,2,3,4].map(i => (
      <div key={i} className="news-list-item" style={{ flex: '1 0 22%' }}>
        <div className="img-wrapper">
          <div className="skeleton-loader" style={{ width: '100%', height: '85px' }} />
        </div>
        <div className="post-info-2 mt-2">
          <div className="skeleton-loader" style={{ width: '50px', height: '14px', marginBottom: '6px' }} />
          <div className="skeleton-loader" style={{ width: '100%', height: '16px' }} />
        </div>
      </div>
    ))}
  </div>
);

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => <CarouselSkeleton />,
});



import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const HomeFeatureCarousal = () => {
  const { language } = useLanguage();
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const response = await getFeaturedArticles(8, locale);
        setFeaturedArticles(response?.data || []);
      } catch (error) {
        console.error('Error fetching featured carousel:', error);
        setFeaturedArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchFeatured();
  }, [language]);

  if (loading) return (
    <div className="d-flex gap-2">
      {[1,2,3,4].map(i => (
        <div key={i} className="news-list-item" style={{ flex: '1 0 22%' }}>
          <div className="img-wrapper">
            <div className="skeleton-loader" style={{ width: '100%', height: '85px' }} />
          </div>
          <div className="post-info-2 mt-2">
            <div className="skeleton-loader" style={{ width: '50px', height: '14px', marginBottom: '6px' }} />
            <div className="skeleton-loader" style={{ width: '100%', height: '16px' }} />
          </div>
        </div>
      ))}
    </div>
  );
  
  if (featuredArticles.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center empty-state-box" style={{ height: '100px' }}>
         <small className="text-muted">{language === 'bn' ? 'কোনো ফিচারড আইটেম নেই' : 'No featured items'}</small>
      </div>
    );
  }

  return (
    <OwlCarousel className="owl-theme featured-carousel"
      loop={true}
      margin={10}
      nav={false}
      dots={false}
      responsive={{
        0: {
          items: 1,
          autoplay: true
        },
        576: {
          items: 2
        },
        768: {
          items: 2.5
        },
        992: {
          items: 3.5
        },
        1200: {
          items: 4
        }
      }}
    >
      {featuredArticles.map((article) => {
        const data = article.attributes || article;
        const { title, slug, category, cover } = data;
        const categoryName = category?.data?.attributes?.name || (language === 'bn' ? 'সংবাদ' : 'News');
        const imageUrl = getStrapiMedia(cover);

        return (
          <div key={article.id} className="news-list-item">
            <div className="img-wrapper">
              <Link href={`/article/${slug}`} className="thumb">
                <ImageWithFallback
                  src={imageUrl}
                  alt={title}
                  className="img-fluid"
                  width={115}
                  height={85}
                  loading="lazy"
                  style={{ height: '85px', objectFit: 'cover' }}
                />
              </Link>
            </div>
            <div className="post-info-2">
              <span className="post-category">{categoryName}</span>
              <h5 className="mb-0">
                <Link href={`/article/${slug}`} className="title">
                  {title}
                </Link>
              </h5>
            </div>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export default HomeFeatureCarousal;