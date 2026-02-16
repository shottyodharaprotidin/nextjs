'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getFeaturedArticles, getLatestArticles } from "@/services/articleService";
import HomeCenterSlider from "./HomeCenterSlider";
import Skeleton from "@/components/skeleton";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = ({ categorySlug }) => {
  const { language, isLoaded } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    if (!isLoaded) return;
    
    async function fetchHeroArticles() {
      try {
        setLoading(true);
        let response;
        let heroArticles = [];
        
        if (categorySlug) {
             const { getArticlesByCategorySlug } = require("@/services/articleService");
             response = await getArticlesByCategorySlug(categorySlug, 11, locale);
             heroArticles = response?.data || [];
        } else {
             response = await getFeaturedArticles(11, locale);
             heroArticles = response?.data || [];
             
             // Backfill with latest articles if we don't have enough featured (need 11)
             if (heroArticles.length < 11) {
                 const needed = 11 - heroArticles.length;
                 // Fetch significantly more to handle high overlap between featured and latest
                 const latestRes = await getLatestArticles(1, 25, locale);
                 const latest = latestRes?.data || [];
                 
                 const existingIds = new Set(heroArticles.map(a => a.id));
                 const backfill = latest.filter(a => !existingIds.has(a.id));
                 
                 heroArticles = [...heroArticles, ...backfill].slice(0, 11);
             }
        }

        setArticles(heroArticles);
      } catch (error) {
        console.error('Error fetching hero articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchHeroArticles();
  }, [categorySlug, language, isLoaded]);

  if (loading) {
    return (
      <section className="slider-inner">
        <div className="container-fluid p-0">
          <div className="row thm-margin">
             {/* Left Column Skeleton (Vertical Stack matching post-height-4/2) */}
             <div className="col-md-4 col-xxl-4 thm-padding d-md-none d-xxl-block">
                <div className="row slider-right-post thm-margin">
                   <div className="col-6 col-sm-6 thm-padding"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                   <div className="col-6 col-sm-6 thm-padding"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                   <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding mt-1"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                </div>
             </div>
             {/* Center Column Skeleton (Slider matching post-height-1) */}
             <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="skeleton-loader w-100 skeleton-post-height-1"/>
             </div>
             {/* Right Column Skeleton (Vertical Stack matching post-height-2/4) */}
             <div className="col-md-6 col-xxl-4 thm-padding">
                <div className="row slider-right-post thm-margin">
                   <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding mb-1"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                   <div className="col-6 col-sm-6 thm-padding"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                   <div className="col-6 col-sm-6 thm-padding"><div className="skeleton-loader w-100 skeleton-post-height-2"/></div>
                </div>
             </div>
          </div>
        </div>
      </section>
    );
  }
  if (articles.length === 0) {
    return (
      <section className="slider-inner">
        <div className="container-fluid p-0">
          <div className="row thm-margin">
            <div className="col-12 py-5 text-center text-muted empty-state-box">
               {language === 'bn' ? 'কোনো প্রধান খবর পাওয়া যায়নি' : 'No featured news available'}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Split articles: 3 left, 5 center (slider), 3 right
  const leftArticles = articles.slice(0, 3);
  const centerArticles = articles.slice(3, 8);
  const rightArticles = articles.slice(8, 11);

  // Helper to render a standard post card
  const renderPost = (article, heightClass = 'post-height-4', width = 400) => {
    if (!article) return null;
    
    const data = article.attributes || article;
    const { title, slug, category, author, publishedAt, cover } = data;
    const categoryName = category?.data?.attributes?.name || currentT.news;
    const authorName = author?.data?.attributes?.name || currentT.authorFallback;
    const imageUrl = getStrapiMedia(cover);
    const date = formatDate(publishedAt, language === 'bn' ? 'bn' : 'en');

    return (
      <div className={`slider-post ${heightClass}`}>
        <Link href={`/${language}/article/${slug}`} className="news-image">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="img-fluid"
            width={width}
            height={300}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </Link>
        <div className="post-text">
          <span className="post-category">{categoryName}</span>
          <h4>
            <Link href={`/${language}/article/${slug}`}>
              {title}
            </Link>
          </h4>
          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
            <li>
              {currentT.by} <span className="editor-name">{authorName}</span>
            </li>
            <li>{date}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="slider-inner">
      <div className="container-fluid p-0">
        <div className="row thm-margin">
          {/* LEFT COLUMN */}
          <div className="col-md-4 col-xxl-4 thm-padding d-md-none d-xxl-block">
            <div className="row slider-right-post thm-margin">
              <div className="col-6 col-sm-6 thm-padding">
                {renderPost(leftArticles[0], 'post-height-4', 400)}
              </div>
              <div className="col-6 col-sm-6 thm-padding">
                {renderPost(leftArticles[1], 'post-height-4', 400)}
              </div>
              <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                {renderPost(leftArticles[2], 'post-height-4', 800)}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN (SLIDER) */}
          <div className="col-md-6 col-xxl-4 thm-padding">
            <div className="slider-wrapper">
              <HomeCenterSlider articles={centerArticles} />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 col-xxl-4 thm-padding">
            <div className="row slider-right-post thm-margin">
              <div className="col-md-12 col-sm-12 d-md-block d-none thm-padding">
                {renderPost(rightArticles[0], 'post-height-2', 800)}
              </div>
              <div className="col-6 col-sm-6 thm-padding">
                {renderPost(rightArticles[1], 'post-height-2', 400)}
              </div>
              <div className="col-6 col-sm-6 thm-padding">
                {renderPost(rightArticles[2], 'post-height-2', 400)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
