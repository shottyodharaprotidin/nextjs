import { getArticleBySlug, getArticleBySlugPreview, getMostViewedArticles, getPopularArticles } from '@/services/articleService';
import { cookies, draftMode } from 'next/headers';
import { getGlobalSettings, getAdsManagement } from '@/services/globalService';
import { getStrapiMedia } from '@/lib/strapi';
import ClientArticleDetail from '@/components/article/article-details';

// Enable ISR - cache articles for 60 seconds, then revalidate
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'bn';
  let articleData = null;

  try {
    articleData = await getArticleBySlug(slug, locale);
  } catch (error) {
    console.error('Error generating article metadata:', error);
  }
  
  if (!articleData) {
    return {
      title: 'Article Not Found',
    };
  }

  const data = articleData.attributes || articleData;
  const seo = data.seo || {};
  const metaTitle = seo.metaTitle || data.title;
  const metaDescription = seo.metaDescription || data.excerpt || '';
  const shareImage = getStrapiMedia(seo.shareImage) || getStrapiMedia(data.cover);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shottyodharaprotidin.com';
  const articleUrl = `${siteUrl}/article/${slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: articleUrl,
      siteName: 'Satyadhara Protidin',
      type: 'article',
      images: shareImage ? [shareImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: shareImage ? [shareImage] : [],
    },
  };
}

const ArticleDetailPage = async ({ params, searchParams }) => {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'bn';

  // Parallel Data Fetching with Error Handling
  let articleData = null;
  let mostViewedResponse = { data: [] };
  let popularResponse = { data: [] };
  let globalSettingsResponse = { data: null };
  let adsResponse = { data: null };

  // Detect draft mode
  const { isEnabled } = await draftMode();

  // When in draft mode, use the locale from URL params (e.g. from preview redirect)
  // because the browser cookie might be in a different language from the article
  const previewLocale = resolvedSearchParams?.locale || locale;
  const articleFetcher = isEnabled ? getArticleBySlugPreview : getArticleBySlug;
  const fetchLocale = isEnabled ? previewLocale : locale;

  try {
    const results = await Promise.allSettled([
      articleFetcher(slug, fetchLocale),
    ]);

    articleData = results[0].status === 'fulfilled' ? results[0].value : null;

    // Fetch non-critical data in parallel on client side
    // For now, provide empty defaults - client will fetch these
    mostViewedResponse = { data: [] };
    popularResponse = { data: [] };
    globalSettingsResponse = { data: null };
    adsResponse = { data: null };
  } catch (error) {
    console.error("Error fetching article:", error);
  }

  if (!articleData) {
     // You might want to render a custom 404 component here
    return <div>Article not found</div>;
  }

  return (
    <ClientArticleDetail 
      article={articleData}
      mostViewed={mostViewedResponse?.data || []}
      popularNews={popularResponse?.data || []}
      globalSettings={globalSettingsResponse?.data}
      adsData={adsResponse?.data}
      locale={locale}
    />
  );
};


export default ArticleDetailPage;
