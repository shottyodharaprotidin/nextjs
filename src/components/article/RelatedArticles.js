"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getLatestArticles } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import { useLanguage } from "@/context/LanguageContext";

const RelatedArticles = ({ categorySlug }) => {
  const { language } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch latest articles as "related" content
        // In a real app, you might want a distinct getRelatedArticles function
        const response = await getLatestArticles(1, 6, locale);
        setArticles(response?.data || []);
      } catch (error) {
        console.error("Error fetching related articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [locale]);

  if (loading) {
    return (
      <div className="news-grid-2">
        <div className="row row-margin">
          {[1, 2, 3].map((i) => (
            <div key={i} className="col-xs-6 col-sm-4 col-md-4 col-padding">
              <Skeleton className="w-100 mb-2" style={{ height: '120px' }} />
              <Skeleton className="w-75 mb-1" style={{ height: '16px' }} />
              <Skeleton className="w-50" style={{ height: '12px' }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!articles.length) return null;

  return (
    <div className="news-grid-2">
      <div className="row row-margin">
        {articles.slice(0, 3).map((article) => {
          const data = article.attributes || article;
          const imageUrl = getStrapiMedia(data.cover);
          return (
            <div key={article.id} className="col-xs-6 col-sm-4 col-md-4 col-padding">
              <div className="grid-item">
                <div className="grid-item-img">
                  <Link href={`/article/${data.slug}`}>
                    <img
                      src={imageUrl}
                      className="img-fluid"
                      alt={data.title}
                    />
                  </Link>
                </div>
                <h5>
                  <Link href={`/article/${data.slug}`} className="title">
                    {data.title?.length > 60 ? data.title.substring(0, 60) + '...' : data.title}
                  </Link>
                </h5>
                <ul className="authar-info d-flex flex-wrap">
                  <li>{formatDate(data.publishedAt || data.createdAt, locale)}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedArticles;