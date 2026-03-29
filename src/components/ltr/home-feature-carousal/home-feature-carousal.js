"use client";
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi";
import React, { useRef, useCallback } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

const dictionary = {
  en: {
    news: 'News',
    loading: 'Loading...'
  },
  bn: {
    news: 'সংবাদ',
    loading: 'লোড হচ্ছে...'
  }
};

const HomeFeatureCarousal = ({ data = [], isLoading = false }) => {
  const { locale } = useLanguage();
  const t = dictionary[locale] || dictionary.bn;
  const items = data.slice(0, 10);

  // Mouse drag for desktop (mobile uses native touch scroll)
  const containerRef = useRef(null);
  const dragRef = useRef({ dragging: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    dragRef.current = { dragging: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = 'grabbing';
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragRef.current.dragging) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragRef.current.startX) * 1.5;
    el.scrollLeft = dragRef.current.scrollLeft - walk;
  }, []);

  const onMouseUp = useCallback(() => {
    dragRef.current.dragging = false;
    const el = containerRef.current;
    if (el) el.style.cursor = 'grab';
  }, []);

  if (!isLoading && items.length === 0) return null;

  return (
    <div
      className="featured-carousel-static d-flex"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {items.map((article, index) => {
        const articleData = article?.attributes || article || {};
        const imageUrl = getStrapiMedia(articleData.cover);
        const category = articleData.category?.name || articleData.category?.data?.attributes?.name || t.news;
        const slug = articleData.slug || '#';
        const title = articleData.title || t.loading;
        const isPlaceholder = isLoading || !article;

        return (
          <div key={article?.id || index} className="news-list-item">
            <div className="img-wrapper">
              <Link href={isPlaceholder ? '#' : `/article/${slug}`} className="thumb">
                <img
                  src={imageUrl}
                  alt={title}
                  className="img-fluid"
                  onError={(e) => { e.target.src = '/default.jpg'; }}
                  draggable={false}
                />
                <div className="link-icon">
                  <i className="fa fa-camera" />
                </div>
              </Link>
            </div>
            <div className="post-info-2">
              <span className="post-category">{category}</span>
              <h5 className="mb-0">
                <Link href={isPlaceholder ? '#' : `/article/${slug}`} className="title">
                  {title}
                </Link>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeFeatureCarousal;