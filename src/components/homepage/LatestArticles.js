'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getLatestArticles } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { useLanguage } from "@/context/LanguageContext";

const LatestArticles = ({ categorySlug }) => {
  const { language, translateNumber, isLoaded } = useLanguage();
  const [articles, setArticles] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const t = {
    bn: {
      titleStrong: 'সর্বশেষ',
      titleRest: 'সংবাদ',
      by: 'দ্বারা',
      loading: 'সংবাদ লোড হচ্ছে...',
      noData: 'কোনো সংবাদ পাওয়া যায়নি।',
      updating: 'আপডেট হচ্ছে...',
      authorFallback: 'সম্পাদক'
    },
    en: {
      titleStrong: 'Latest',
      titleRest: 'Articles',
      by: 'By',
      loading: 'Loading articles...',
      noData: 'No articles found.',
      updating: 'Updating...',
      authorFallback: 'Editor'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    if (!isLoaded) return;
    
    async function fetchLatest() {
      setLoading(true);
      setArticles([]); // Clear articles to show skeleton loading state
      try {
        let response;
        if (categorySlug) {
            const { getArticlesByCategoryEnhanced } = require("@/services/articleService");
            response = await getArticlesByCategoryEnhanced(categorySlug, 5, { 
                sort: 'publishedAt:desc',
                'pagination[page]': page 
            }, locale);
        } else {
            response = await getLatestArticles(page, 7, locale);
        }
        
        setArticles(response?.data || []);
        setMeta(response?.meta || null);
      } catch (error) {
        console.error('Error fetching latest articles:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatest();
  }, [page, categorySlug, language, isLoaded]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= (meta?.pagination?.pageCount || 1)) {
      setPage(newPage);
      const section = document.getElementById('latest-articles');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (loading && articles.length === 0) {
    return (
      <div id="latest-articles" className="latest-post-inner">
        <div className="post-head">
           <h2 className="title"><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h2>
        </div>
        <div className="row">
           {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="col-12 mb-4">
                 <div className="news-list-item">
                    <div className="row g-0">
                       <div className="col-md-5 col-sm-6">
                          <figure className="mb-0">
                             <Skeleton className="w-100" style={{ height: '200px' }} />
                          </figure>
                       </div>
                       <div className="col-md-7 col-sm-6">
                          <div className="post-info-2 ms-0 ms-sm-3 mt-3 mt-sm-0">
                             <Skeleton style={{ width: '80px', height: '16px' }} className="mb-2" />
                             <Skeleton className="w-100 mb-2" style={{ height: '28px' }} />
                             <Skeleton className="w-75 mb-3" style={{ height: '28px' }} />
                             <div className="d-flex gap-2 mb-3">
                                <Skeleton style={{ width: '100px', height: '14px' }} />
                                <Skeleton style={{ width: '80px', height: '14px' }} />
                             </div>
                             <Skeleton className="w-100 mb-1" style={{ height: '16px' }} />
                             <Skeleton className="w-100 mb-1" style={{ height: '16px' }} />
                             <Skeleton className="w-50" style={{ height: '16px' }} />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    );
  }

  if (!loading && articles.length === 0) {
    return (
      <div id="latest-articles" className="latest-post-inner">
        <div className="post-head">
           <h2 className="title"><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h2>
        </div>
        <div className="row">
           <div className="col-12 py-5 text-center text-muted empty-state-box">
              {currentT.noData}
           </div>
        </div>
      </div>
    );
  }

  const { pageCount, page: currentPage } = meta?.pagination || { pageCount: 1, page: 1 };

  return (
    <div id="latest-articles" className="latest-post-inner">
      <div className="post-head">
        <h2 className="title"><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h2>
      </div>
      <div className="row">
        {articles.map((article) => {
          const data = article.attributes || article;
          const { title, slug, category, author, publishedAt, cover, excerpt } = data;
          const categoryName = category?.data?.attributes?.name || (language === 'bn' ? 'সংবাদ' : 'News');
          const authorName = author?.data?.attributes?.name || currentT.authorFallback;
          const imageUrl = getStrapiMedia(cover);
          const date = formatDate(publishedAt, language === 'bn' ? 'bn' : 'en');

          return (
            <div key={article.id} className="col-12 mb-4">
              <div className="news-list-item">
                <div className="row g-0">
                  <div className="col-md-5 col-sm-6">
                    <figure className="mb-0">
                      <Link href={`/article/${slug}`}>
                        <ImageWithFallback
                          src={imageUrl}
                          alt={title}
                          className="img-fluid"
                          width={400} // Approximate width
                          height={200}
                          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="col-md-7 col-sm-6">
                    <div className="post-info-2">
                       <span className="post-category">{categoryName}</span>
                      <h4 className="mb-2">
                        <Link href={`/article/${slug}`}>
                          {title}
                        </Link>
                      </h4>
                      <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                        <li>
                          {currentT.by} <span className="editor-name">{authorName}</span>
                        </li>
                        <li>{date}</li>
                      </ul>
                      <p className="d-none d-lg-block">
                        {excerpt?.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {loading && articles.length > 0 && (
           <div className="text-center py-2 text-muted">{currentT.updating}</div>
        )}
      </div>

      {pageCount > 1 && (
        <div className="row">
          <div className="col-12">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous"
                >
                  <i className="ti ti-angle-left"></i>
                </button>
              </li>
              
              {(() => {
                const total = pageCount;
                const current = currentPage;
                const size = 5;
                let start = Math.max(1, current - Math.floor(size / 2));
                let end = Math.min(total, start + size - 1);
                if (end - start + 1 < size) start = Math.max(1, end - size + 1);
                
                const pages = [];
                // Add first page and ellipsis if needed
                if (start > 1) {
                    pages.push(<li key={1} className="page-item"><button className="page-link" onClick={() => handlePageChange(1)}>{translateNumber(1)}</button></li>);
                    if (start > 2) pages.push(<li key="sep-start" className="page-item disabled"><span className="page-link">...</span></li>);
                }
                
                // Add window pages
                for (let p = start; p <= end; p++) {
                    pages.push(
                        <li key={p} className={`page-item ${current === p ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(p)}>{translateNumber(p)}</button>
                        </li>
                    );
                }
                
                // Add ellipsis and last page if needed
                if (end < total) {
                    if (end < total - 1) pages.push(<li key="sep-end" className="page-item disabled"><span className="page-link">...</span></li>);
                    pages.push(<li key={total} className="page-item"><button className="page-link" onClick={() => handlePageChange(total)}>{translateNumber(total)}</button></li>);
                }
                
                return pages;
              })()}

              <li className={`page-item ${currentPage === pageCount ? 'disabled' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next"
                >
                  <i className="ti ti-angle-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LatestArticles;
