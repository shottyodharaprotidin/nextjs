'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { getStrapiMedia, formatDate } from '@/lib/strapi';
import { searchArticles } from '@/services/searchService';
import ImageWithFallback from '@/components/ui/ImageWithFallback';
import { useLanguage } from '@/context/LanguageContext';

const SearchResults = ({ params }) => {
    const { language, translateNumber } = useLanguage();
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const locale = language === 'bn' ? 'bn' : 'en';

    const t = {
        bn: {
            title: 'অনুসন্ধান ফলাফল',
            resultsFor: 'ফলাফল:',
            noResults: 'কোনো ফলাফল পাওয়া যায়নি।',
            loading: 'অনুসন্ধান করা হচ্ছে...',
            by: 'দ্বারা',
            readMore: 'আরও পড়ুন'
        },
        en: {
            title: 'Search Results',
            resultsFor: 'Results for:',
            noResults: 'No results found.',
            loading: 'Searching...',
            by: 'By',
            readMore: 'Read More'
        }
    };

    const currentT = t[language] || t.bn;

    useEffect(() => {
        const fetchResults = async () => {
            if (!query) {
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                const response = await searchArticles(query, locale);
                setArticles(response?.data || []);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [query, locale]);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 mb-4">
                    <h2 className="border-bottom pb-2">
                        {currentT.title} <small className="text-muted ms-2">{query && `- ${query}`}</small>
                    </h2>
                </div>
            </div>

            {loading ? (
                 <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">{currentT.loading}</p>
                </div>
            ) : articles.length > 0 ? (
                <div className="row">
                    {articles.map((article) => {
                         const data = article.attributes || article;
                         const { title, slug, category, author, publishedAt, cover, excerpt } = data;
                         const imageUrl = getStrapiMedia(cover);
                         const date = formatDate(publishedAt, locale);
                         const categoryName = category?.data?.attributes?.name;

                         return (
                            <div key={article.id} className="col-md-6 col-lg-4 mb-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="position-relative" style={{ height: '200px', overflow: 'hidden' }}>
                                         <Link href={`/${language}/article/${slug}`}>
                                            <ImageWithFallback
                                                src={imageUrl}
                                                alt={title}
                                                fill
                                                className="card-img-top"
                                                style={{ objectFit: 'cover' }}
                                            />
                                         </Link>
                                         {categoryName && (
                                             <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                                                 {categoryName}
                                             </span>
                                         )}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link href={`/${language}/article/${slug}`} className="text-decoration-none">
                                                {title}
                                            </Link>
                                        </h5>
                                        <div className="small text-muted mb-2">
                                            {date} {author?.data?.attributes?.name && ` | ${author.data.attributes.name}`}
                                        </div>
                                        <p className="card-text text-truncate-3">
                                            {excerpt?.substring(0, 100)}...
                                        </p>
                                    </div>
                                </div>
                            </div>
                         );
                    })}
                </div>
            ) : (
                <div className="alert alert-info text-center">
                    {currentT.noResults} <strong>{query}</strong>
                </div>
            )}
        </div>
    );
};

export default function SearchPage({ params }) {
    return (
        <Suspense fallback={<div className="container py-5 text-center">Loading...</div>}>
            <SearchResults params={params} />
        </Suspense>
    );
}
