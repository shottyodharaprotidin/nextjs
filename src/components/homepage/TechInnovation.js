"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getArticlesByCategoryEnhanced } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const TechInnovation = () => {
  const { language } = useLanguage();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      titleStrong: 'প্রযুক্তি ও',
      titleRest: 'উদ্ভাবন',
      tech: 'প্রযুক্তি'
    },
    en: {
      titleStrong: 'TECH &',
      titleRest: 'INNOVATION',
      tech: 'Tech'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getArticlesByCategoryEnhanced('technology', 5, {}, locale);
        setData(response?.data || []);
      } catch (error) {
        console.error("Error fetching Tech & Innovation:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [language]);

  if (loading) {
    return (
      <div className="panel_inner">
        <div className="panel_header">
          <h4>
            <strong>{currentT.titleStrong}</strong> {currentT.titleRest}
          </h4>
        </div>
        <div className="panel_body">
           <div className="border-bottom pb-3 mb-3">
             <Skeleton className="w-100 mb-3" style={{ height: '215px' }} />
             <Skeleton className="w-100 mb-2" style={{ height: '24px' }} />
             <div className="d-flex gap-2 mb-2">
                <Skeleton style={{ width: '60px', height: '15px' }} />
                <Skeleton style={{ width: '80px', height: '15px' }} />
             </div>
             <Skeleton className="w-100" style={{ height: '40px' }} />
           </div>
           {[1, 2, 3].map((i) => (
             <div key={i} className="py-3 border-bottom">
               <Skeleton className="w-100 mb-2" style={{ height: '20px' }} />
               <Skeleton style={{ width: '80px', height: '15px' }} />
             </div>
           ))}
        </div>
      </div>
    );
  }

  if (!data.length) return null;

  const firstArticle = data[0];
  const firstData = firstArticle.attributes || firstArticle;
  const otherArticles = data.slice(1);

  return (
    <div className="panel_inner">
      <div className="panel_header">
        <h4>
          <strong>{currentT.titleStrong}</strong> {currentT.titleRest}
        </h4>
      </div>
      <div className="panel_body">
        <div className="border-bottom">
          <Link href={`/article/${firstData.slug}`} className="d-block mb-3">
            <ImageWithFallback
              src={getStrapiMedia(firstData.cover)}
              alt={firstData.title}
              className="img-fluid w-100"
              width={500}
              height={300}
            />
          </Link>
          <h5>
            <Link href={`/article/${firstData.slug}`}>
              {firstData.title}
            </Link>
          </h5>
          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
            <li>
              <span className="post-category mb-0">
                {firstData.category?.data?.attributes?.name || currentT.tech}
              </span>
            </li>
            <li>{formatDate(firstData.publishedAt, language === 'bn' ? 'bn' : 'en')}</li>
          </ul>
          <p>
            {firstData.excerpt?.substring(0, 80)}...
          </p>
        </div>

        {otherArticles.map((article, index) => {
          const data = article.attributes || article;
          return (
            <div key={article.id} className={`py-3 ${index !== otherArticles.length - 1 ? 'border-bottom' : ''}`}>
              <div className="d-flex gap-2 align-items-start">
                <Link href={`/article/${data.slug}`} className="flex-shrink-0">
                  <ImageWithFallback
                    src={getStrapiMedia(data.cover)}
                    alt={data.title}
                    className="rounded"
                    width={70}
                    height={55}
                    style={{ width: '70px', height: '55px', objectFit: 'cover' }}
                  />
                </Link>
                <div>
                  <h6 className="posts-title" style={{ fontSize: '13px', lineHeight: '1.4', marginBottom: '4px' }}>
                    <Link href={`/article/${data.slug}`}>
                      {data.title}
                    </Link>
                  </h6>
                  <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                    <li style={{ fontSize: '11px' }}>{formatDate(data.publishedAt, language === 'bn' ? 'bn' : 'en')}</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechInnovation;
