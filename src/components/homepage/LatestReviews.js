"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getReviewArticles } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const LatestReviews = () => {
  const { language } = useLanguage();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      titleStrong: "সর্বশেষ",
      titleRest: "রিভিউ",
      review: "রিভিউ"
    },
    en: {
      titleStrong: "Latest",
      titleRest: "Reviews",
      review: "Review"
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getReviewArticles(4, locale);
        setReviews(response?.data || []);
      } catch (error) {
        console.error("Error fetching latest reviews:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  if (loading) {
    return (
        <div className="panel_inner review-inner">
          <div className="panel_header">
            <h4>
              <strong>{currentT.titleStrong}</strong> {currentT.titleRest}
            </h4>
          </div>
          <div className="panel_body">
            {/* Featured Review Skeleton */}
            <div className="more-post">
               <Skeleton className="w-100 mb-2" style={{ height: '215px' }} />
               <div className="d-flex gap-1 mb-2">
                 {[1,2,3,4,5].map(i => <Skeleton key={i} style={{ width: '15px', height: '15px' }} />)}
               </div>
               <Skeleton className="w-100 mb-1" style={{ height: '24px' }} />
               <Skeleton style={{ width: '60%', height: '15px' }} />
            </div>
            
            {/* List Reviews Skeleton */}
            <div className="mt-4 news-list">
               {[1, 2, 3].map(i => (
                 <div key={i} className="news-list-item p-0 mb-4">
                    <div className="img-wrapper">
                       <Skeleton style={{ width: '115px', height: '85px' }} />
                    </div>
                    <div className="post-info-2 w-100 ms-3">
                       <Skeleton className="w-100 mb-2" style={{ height: '20px' }} />
                       <Skeleton className="w-75 mb-2" style={{ height: '20px' }} />
                       <div className="d-flex gap-1">
                         {[1,2,3,4,5].map(s => <Skeleton key={s} style={{ width: '12px', height: '12px' }} />)}
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
    );
  }

  if (!reviews.length) return null;

  const firstReview = reviews[0];
  const firstData = firstReview.attributes || firstReview;
  const otherReviews = reviews.slice(1);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star" />);
        } else if (i - 0.5 === rating) {
            stars.push(<i key={i} className="fas fa-star-half-alt" />);
        } else {
            stars.push(<i key={i} className="far fa-star" />);
        }
    }
    return stars;
  };

  return (
    <div className="panel_inner review-inner">
      <div className="panel_header">
        <h4>
          <strong>{currentT.titleStrong}</strong> {currentT.titleRest}
        </h4>
      </div>
      <div className="panel_body">
        {/* Featured Review */}
        <div className="more-post">
          <Link href={`/article/${firstData.slug}`} className="news-image">
            <ImageWithFallback
              src={getStrapiMedia(firstData.cover)}
              alt={firstData.title}
              className="img-fluid w-100"
              width={500}
              height={300}
            />
          </Link>
          <div className="reatting">
             {renderStars(firstData.rating || 0)}
          </div>
          <div className="post-text">
            <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-1">
              <li>
                <span className="post-category mb-0">
                    {firstData.category?.data?.attributes?.name || currentT.review}
                </span>
              </li>
              <li>{formatDate(firstData.publishedAt, language === 'bn' ? 'bn' : 'en')}</li>
            </ul>
            <h4 className="mb-0">
              <Link href={`/article/${firstData.slug}`}>
                 {firstData.title}
              </Link>
            </h4>
          </div>
        </div>

        {/* Small List Reviews */}
        <div className="mt-4 news-list">
          {otherReviews.map((review) => {
            const data = review.attributes || review;
            return (
            <div key={review.id} className="news-list-item p-0 mb-4">
              <div className="img-wrapper">
                <Link href={`/article/${data.slug}`} className="thumb">
                  <ImageWithFallback
                    src={getStrapiMedia(data.cover)}
                    alt={data.title}
                    className="img-fluid"
                    width={100}
                    height={75}
                  />
                </Link>
              </div>
              <div className="post-info-2">
                <h5>
                  <Link href={`/article/${data.slug}`} className="title">
                    {data.title}
                  </Link>
                </h5>
                <div className="reviews-reatting">
                    {renderStars(data.rating || 0)}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestReviews;
