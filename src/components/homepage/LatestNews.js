'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getFeaturedArticles, getArticlesByCategorySlug } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { useLanguage } from "@/context/LanguageContext";

const MainNewsSection = ({ categorySlug }) => {
  const { language, isLoaded } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      by: 'দ্বারা',
      authorFallback: 'সম্পাদক',
      news: 'সংবাদ',
      clickToRead: 'আরও পড়তে ক্লিক করুন...'
    },
    en: {
      by: 'By',
      authorFallback: 'Editor',
      news: 'News',
      clickToRead: 'Click to read more about this article...'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    if (!isLoaded) return;
    
    async function fetchMainNews() {
      setLoading(true);
      setArticles([]);
      try {
        let response;
        if (categorySlug) {
           response = await getArticlesByCategorySlug(categorySlug, 7, locale);
        } else {
           response = await getFeaturedArticles(7, locale);
        }
        
        setArticles(response?.data || []);
      } catch (error) {
        console.error('Error fetching main news:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMainNews();
  }, [categorySlug, language, isLoaded]);

  if (loading) {
    return (
      <>
        {/* Main Article Skeleton */}
        <div className="post-inner">
           <div className="post-body py-0">
              <Skeleton className="w-100 mb-3" style={{ height: '350px' }} />
              <div className="post-info">
                 <Skeleton className="w-75 mb-3" style={{ height: '28px' }} />
                 <div className="d-flex gap-2 mb-3">
                    <Skeleton style={{ width: '100px', height: '16px' }} />
                    <Skeleton style={{ width: '120px', height: '16px' }} />
                 </div>
                 <Skeleton className="w-100" style={{ height: '60px' }} />
              </div>
           </div>
        </div>
        
        {/* Grid Articles Skeleton */}
        <div className="news-grid-2 border-top pt-4 mb-4">
           <div className="row gx-3 gx-lg-4 gy-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                 <div key={i} className="col-6 col-md-4 col-sm-6">
                    <div className="grid-item mb-0">
                       <Skeleton className="w-100 mb-3" style={{ height: '125px' }} />
                       <Skeleton className="w-100 mb-2" style={{ height: '20px' }} />
                       <Skeleton style={{ width: '80px', height: '16px' }} />
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </>
    );
  }
  const renderMainArticle = (article) => {
    if (!article) return null;
    const data = article.attributes || article;
    const { title, slug, category, author, publishedAt, cover, excerpt } = data;
    const categoryName = category?.data?.attributes?.name || currentT.news;
    const authorName = author?.data?.attributes?.name || currentT.authorFallback;
    const imageUrl = getStrapiMedia(cover);
    const date = formatDate(publishedAt, language === 'bn' ? 'bn' : 'en');

    return (
      <article>
        <figure>
          <Link href={`/article/${slug}`}>
            {imageUrl && (
            <ImageWithFallback
              src={imageUrl}
              width={557}
              height={352}
              alt={title}
              className="img-fluid"
            />
            )}
          </Link>
        </figure>
        <div className="post-info">
          <h3 className="fs-4">
            <Link href={`/article/${slug}`}>
              {title}
            </Link>
          </h3>
          <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
            <li>
              <span className="post-category mb-0">{categoryName}</span>
            </li>
            <li>
              {currentT.by} <span className="editor-name">{authorName}</span>
            </li>
            <li>{date}</li>
          </ul>
          <p>
            {excerpt || currentT.clickToRead}
          </p>
        </div>
      </article>
    );
  };

  if (!articles.length) {
    return (
      <>
        {/* START POST CATEGORY STYLE ONE (Popular news) */}
        <div className="post-inner">
          <div className="post-body py-0">
             <div className="alert alert-info">{currentT.news} - {language === 'bn' ? 'কোনো সংবাদ পাওয়া যায়নি' : 'No news found'}</div>
          </div>
        </div>
      </>
    );
  }

  const mainArticle = articles[0];
  const gridArticles = articles.slice(1, 7);

  return (
    <>
      {/* START POST CATEGORY STYLE ONE (Popular news) */}
      <div className="post-inner">
        {/* post body */}
        <div className="post-body py-0">
          {renderMainArticle(mainArticle)}
        </div>
      </div>
      {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
      
      <div className="news-grid-2 border-top pt-4 mb-4">
        <div className="row gx-3 gx-lg-4 gy-4">
          {gridArticles.map((article) => {
            const data = article.attributes || article;
            const { title, slug, publishedAt, cover, videoUrl } = data;
            const imageUrl = getStrapiMedia(cover);
            const date = formatDate(publishedAt, language === 'bn' ? 'bn' : 'en');
            const isVideo = !!videoUrl;

            return (
              <div key={article.id} className="col-6 col-md-4 col-sm-6">
                <div className="grid-item mb-0">
                  <div className="grid-item-img">
                    <Link href={`/article/${slug}`}>
                      <ImageWithFallback
                        src={imageUrl}
                        className="img-fluid"
                        alt={title}
                        width={300} // Approximate width for grid item
                        height={125}
                        style={{ width: '100%', height: '125px', objectFit: 'cover' }}
                      />
                      {isVideo && (
                        <div className="link-icon">
                          <i className="fa fa-play" />
                        </div>
                      )}
                    </Link>
                  </div>
                  <h5>
                    <Link href={`/article/${slug}`} className="title">
                      {title}
                    </Link>
                  </h5>
                  <ul className="align-items-center authar-info d-flex flex-wrap gap-1 mb-0">
                    <li>{date}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainNewsSection;
