'use client'
import { useLanguage } from "@/context/LanguageContext";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getTrendingNews } from "@/services/articleService";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css/animate.css'
import Skeleton from "@/components/skeleton";

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
  loading: () => (
    <div className="news-ticker d-flex align-items-center w-100">
      <div className="skeleton-loader w-75" style={{ height: '20px' }} />
    </div>
  ),
});

const NewsTicker = () => {
  const { language } = useLanguage();
  const [trendingArticles, setTrendingArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      trending: 'ট্রেন্ডিং',
      now: 'নিউজ',
      loading: 'লোড হচ্ছে...',
      noData: 'কোনো খবর নেই'
    },
    en: {
      trending: 'Trending',
      now: 'Now',
      loading: 'Loading trending news...',
      noData: 'No trending news at the moment'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchTrendingNews() {
      setLoading(true);
      try {
        const response = await getTrendingNews(10, locale);
        setTrendingArticles(response?.data || []);
      } catch (error) {
        console.error('Error fetching trending news:', error);
        setTrendingArticles([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingNews();
  }, [language]);

  if (loading) {
    return (
      <div className="container">
        <div className="newstricker_inner">
          <div className="trending">
            <strong>{currentT.trending}</strong> {currentT.now}
          </div>
          <div className="news-ticker d-flex align-items-center w-100">
             <Skeleton className="w-75" style={{ height: '20px' }} />
          </div>
        </div>
      </div>
    );
  }

  if (trendingArticles.length === 0) {
    return (
      <div className="container">
        <div className="newstricker_inner">
          <div className="trending">
            <strong>{currentT.trending}</strong> {currentT.now}
          </div>
          <div className="news-ticker">
            <div className="item">
              <span>{currentT.now}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="newstricker_inner">
        <div className="trending">
          <strong>{currentT.trending}</strong> {currentT.now}
        </div>
        <OwlCarousel className="news-ticker owl-theme"
          key={language}
          loop={true}
          items={1}
          dots={false}
          animateOut='animate__slideOutDown'
          animateIn='animate__flipInX'
          autoplay={true}
          autoplayTimeout={5000}
          autoplayHoverPause={true}
          nav={false}
          responsive={{
            0: {
              nav: false,
            },
            768: {
              nav: true,
              navText: [
                "<i class='ti ti-angle-left' aria-label='Previous'></i>",
                "<i class='ti ti-angle-right' aria-label='Next'></i>"
              ],
            }
          }}>
          {trendingArticles.map((article) => {
            const articleData = article.attributes || article;
            const slug = articleData.slug || article.id;
            const title = articleData.title || 'Untitled Article';

            return (
              <div key={article.id} className="item">
                <Link href={`/${language}/article/${slug}`}>
                  {title}
                </Link>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default NewsTicker;