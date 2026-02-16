"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getArticlesByCategoryEnhanced, getMostViewedArticles, getPopularArticles } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const SidebarTabs = ({ categorySlug }) => {
    const { language, translateNumber } = useLanguage();
    const [activeTab, setActiveTab] = useState('most-viewed');
    const [mostViewed, setMostViewed] = useState([]);
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);
    const locale = language === 'bn' ? 'bn' : 'en';

    const t = {
    bn: {
            mostViewed: 'সর্বাধিক পঠিত',
            popularNews: 'জনপ্রিয় সংবাদ',
            noData: 'কোনো সংবাদ পাওয়া যায়নি।',
            likes: 'পছন্দ'
        },
        en: {
            mostViewed: 'Most Viewed',
            popularNews: 'Popular News',
            noData: 'No articles found.',
            likes: 'likes'
        }
    };

    const currentT = t[language] || t.bn;

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let viewedPromise, popularPromise;

                if (categorySlug) {
                    viewedPromise = getArticlesByCategoryEnhanced(categorySlug, 5, { sort: 'viewCount:desc' }, locale);
                    popularPromise = getArticlesByCategoryEnhanced(categorySlug, 5, { sort: 'likes:desc' }, locale);
                } else {
                    viewedPromise = getMostViewedArticles(5, locale);
                    popularPromise = getPopularArticles(5, locale);
                }

                const [viewedRes, popularRes] = await Promise.all([
                    viewedPromise,
                    popularPromise
                ]);

                setMostViewed(viewedRes?.data || []);
                setPopular(popularRes?.data || []);
            } catch (error) {
                console.error("Error fetching sidebar tabs:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [categorySlug, language]);

    const renderSkeletonList = () => (
        <div className="most-viewed">
            {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="most-viewed-list border-bottom py-2">
                    <div className="most-viewed-count">
                        <Skeleton style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
                    </div>
                    <div className="most-viewed-text w-100">
                        <Skeleton className="w-100 mb-2" style={{ height: '18px' }} />
                        <Skeleton className="w-75 mb-2" style={{ height: '18px' }} />
                        <div className="d-flex gap-2">
                            <Skeleton style={{ width: '80px', height: '12px' }} />
                            <Skeleton style={{ width: '40px', height: '12px' }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderArticleList = (articles) => {
        if (!articles.length) return <div className="p-3">{currentT.noData}</div>;
        return (
            <div className="most-viewed">
                {articles.map((article, index) => {
                    const data = article.attributes || article;
                    const count = index + 1;
                    const displayCount = count < 10 ? `0${count}` : `${count}`;
                    const imageUrl = getStrapiMedia(data.cover);
                    return (
                        <div key={article.id} className="most-viewed-list">
                            <div className="most-viewed-count" style={{ fontSize: '14px' }}>{translateNumber(displayCount)}</div>
                            <div className="d-flex gap-2 align-items-start flex-grow-1">
                                {imageUrl && (
                                    <Link href={`/article/${data.slug}`} className="flex-shrink-0">
                                        <ImageWithFallback
                                            src={imageUrl}
                                            alt={data.title}
                                            className="rounded"
                                            style={{ width: '60px', height: '50px', objectFit: 'cover' }}
                                        />
                                    </Link>
                                )}
                                <div className="most-viewed-text">
                                    <h6 style={{ fontSize: '13px', lineHeight: '1.4', marginBottom: '4px' }}>
                                        <Link href={`/article/${data.slug}`}>
                                            {data.title}
                                        </Link>
                                    </h6>
                                    <ul className="authar-info d-flex flex-wrap" style={{ fontSize: '11px' }}>
                                        <li className="date">
                                            <span className="me-2"><i className="ti ti ti-timer" /> {formatDate(data.publishedAt, language === 'bn' ? 'bn' : 'en')}</span>
                                        </li>
                                        {data.viewCount && (
                                            <li className="like">
                                                <span><i className="ti ti ti-eye" /> {translateNumber(data.viewCount.toString())}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };
    
    const renderPopularList = (articles) => {
        if (!articles.length) return <div className="p-3">{currentT.noData}</div>;
        return (
            <div className="popular-news">
                 {articles.map((article) => {
                    const data = article.attributes || article;
                    const imageUrl = getStrapiMedia(data.cover);
                    return (
                        <div key={article.id} className="p-post">
                            <div className="d-flex gap-2 align-items-start">
                                {imageUrl && (
                                    <Link href={`/article/${data.slug}`} className="flex-shrink-0">
                                        <ImageWithFallback
                                            src={imageUrl}
                                            alt={data.title}
                                            className="rounded"
                                            width={60}
                                            height={50}
                                            style={{ width: '60px', height: '50px', objectFit: 'cover' }}
                                        />
                                    </Link>
                                )}
                                <div>
                                    <h6 style={{ fontSize: '13px', lineHeight: '1.4', marginBottom: '4px' }}>
                                        <Link href={`/article/${data.slug}`}>
                                            {data.title}
                                        </Link>
                                    </h6>
                                    <ul className="authar-info d-flex flex-wrap" style={{ fontSize: '11px' }}>
                                        <li className="date">
                                            <span className="me-2"><i className="ti ti ti-timer" /> {formatDate(data.publishedAt, language === 'bn' ? 'bn' : 'en')}</span>
                                        </li>
                                        <li className="like">
                                            <span><i className="ti ti ti-thumb-up" /> {translateNumber((data.likes || 0).toString())} {currentT.likes}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                 })}
            </div>
        );
    }

    if (loading) {
        return (
            <div className="panel_inner">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active" type="button">{currentT.mostViewed}</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" type="button">{currentT.popularNews}</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active">
                        {renderSkeletonList()}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="panel_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'most-viewed' ? 'active' : ''}`}
                        onClick={() => setActiveTab('most-viewed')}
                        type="button"
                    >
                        {currentT.mostViewed}
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'popular-news' ? 'active' : ''}`}
                        onClick={() => setActiveTab('popular-news')}
                        type="button"
                    >
                        {currentT.popularNews}
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">

                <div className={`tab-pane fade ${activeTab === 'most-viewed' ? 'show active' : ''}`}>
                    {renderArticleList(mostViewed)}
                </div>
                <div className={`tab-pane fade ${activeTab === 'popular-news' ? 'show active' : ''}`}>
                    {renderPopularList(popular)}
                </div>
            </div>
        </div>
    );
};

export default SidebarTabs;
