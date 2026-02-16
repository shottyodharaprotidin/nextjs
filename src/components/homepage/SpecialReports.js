"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getStrapiMedia, formatDate } from "@/lib/strapi";
import { getArticlesByCategory } from "@/services/articleService";
import Skeleton from "@/components/skeleton";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { useLanguage } from "@/context/LanguageContext";

const SpecialReports = () => {
    const { language } = useLanguage();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const t = {
        bn: {
            titleStrong: 'বিশেষ',
            titleRest: 'প্রতিবেদন'
        },
        en: {
            titleStrong: 'Special',
            titleRest: 'Reports'
        }
    };

    const currentT = t[language] || t.bn;
    const locale = language === 'bn' ? 'bn' : 'en';

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getArticlesByCategory("special-report", 3, locale);
                if (response?.data?.length > 0) {
                    setArticles(response.data);
                } else {
                    const fallback = await getArticlesByCategory("news", 3, locale);
                    setArticles(fallback?.data || []);
                }
            } catch (error) {
                console.error("Error fetching special reports:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [language]);

    if (loading) {
        return (
            <section className="special-reports-section py-5">
                <div className="container">
                    <div className="panel_header mb-4">
                        <h4><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h4>
                    </div>
                    <div className="row">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="col-md-4 mb-4">
                                <Skeleton style={{ height: '250px', borderRadius: '8px' }} />
                                <Skeleton className="mt-3 w-75" style={{ height: '24px' }} />
                                <Skeleton className="mt-2 w-100" style={{ height: '16px' }} />
                                <Skeleton className="mt-2 w-50" style={{ height: '12px' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!articles.length) {
        return (
            <section className="special-reports-section py-5">
                <div className="container">
                    <div className="panel_header mb-4">
                        <h4><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h4>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center py-5">
                            <p className="text-muted">{language === 'bn' ? 'কোনো প্রতিবেদন পাওয়া যায়নি' : 'No reports found'}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="special-reports-section py-5">
            <div className="container">
                <div className="panel_header mb-4">
                    <h4><strong>{currentT.titleStrong}</strong> {currentT.titleRest}</h4>
                </div>
                <div className="row">
                    {articles.map((article) => {
                        const data = article.attributes || article;
                        return (
                            <div key={article.id} className="col-md-4 mb-4">
                                <div className="post-grid">
                                    <div className="posts-inner p-0">
                                        {getStrapiMedia(data.cover) && (
                                            <div className="post-img overflow-hidden rounded-3 mb-3">
                                                <Link href={`/article/${data.slug}`}>
                                                    <ImageWithFallback
                                                        src={getStrapiMedia(data.cover)}
                                                        className="img-fluid"
                                                        alt={data.title}
                                                        width={400} // Approximate width
                                                        height={200}
                                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                            </div>
                                        )}
                                        <h4 className="posts-title">
                                            <Link href={`/article/${data.slug}`}>
                                                {data.title}
                                            </Link>
                                        </h4>
                                        <ul className="authar-info d-flex flex-wrap gap-2 mb-2">
                                            <li>{formatDate(data.publishedAt, language === 'bn' ? 'bn-BD' : 'en')}</li>
                                        </ul>
                                        <p className="description mb-0 text-muted">
                                            {data.excerpt || (data.content ? data.content.substring(0, 100).replace(/<[^>]*>/g, '') : '')}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SpecialReports;
