/**
 * Strapi API Client
 * Handles all API calls to the Strapi CMS backend
 * Uses native Strapi i18n for locale filtering
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://app.shottyodharaprotidin.com';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

// MOCK DATA CONFIGURATION
const USE_MOCK_DATA = false; // Using real Strapi data only
import { mockArticles, mockCategories, mockAuthors, mockTags } from './mock-data';

/**
 * Helper to make requests to Strapi API
 */
async function fetchAPI(path, options = {}) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Add authorization if token is available
  if (API_TOKEN) {
    defaultOptions.headers.Authorization = `Bearer ${API_TOKEN}`;
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const requestUrl = `${STRAPI_URL}/api${path}`;
  
  try {
    const response = await fetch(requestUrl, mergedOptions);
    
    if (!response.ok) {
      console.error(`Strapi API Error: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch from Strapi: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Strapi fetch error:', error);
    throw error;
  }
}

/**
 * Increment view count for an article
 */
export async function incrementViewCount(articleId, currentViews) {
  if (USE_MOCK_DATA) return;
  
  try {
    await fetchAPI(`/articles/${articleId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          viewCount: (parseInt(currentViews) || 0) + 1
        }
      })
    });
  } catch (error) {
    console.error('Failed to increment view count:', error);
  }
}

// ============================================================================
// CORE API FUNCTIONS
// ============================================================================

/**
 * Get all articles with populated relations
 */
export async function getArticles(params = {}, locale = 'bn') {
  if (USE_MOCK_DATA) return { data: mockArticles };

  const defaultParams = {
    populate: ['cover', 'author', 'category'],
    sort: ['createdAt:desc'],
    locale: locale,
  };

  const queryParams = new URLSearchParams({
    ...defaultParams,
    ...params,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

/**
 * Get a single article by slug
 */
export async function getArticleBySlug(slug, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const article = mockArticles.find(a => a.attributes.slug === slug);
    return article || null;
  }
  const data = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*&locale=${locale}`);
  return data?.data?.[0] || null;
}

/**
 * Get all categories
 */
export async function getCategories(locale = 'bn') {
  if (USE_MOCK_DATA) return { data: mockCategories };
  return await fetchAPI(`/categories?populate=*&locale=${locale}`);
}

/**
 * Get a single category by slug
 */
export async function getCategoryBySlug(slug, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const category = mockCategories.find(c => c.attributes.slug === slug);
    return category || null;
  }
  const data = await fetchAPI(`/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${locale}`);
  return data?.data?.[0] || null;
}

/**
 * Get articles by category slug with pagination
 */
export async function getArticlesByCategorySlug(categorySlug, limit = 20, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.category.data.attributes.slug === categorySlug);
    return { data: filtered.slice(0, limit) };
  }

  const queryParams = new URLSearchParams({
    'filters[category][slug][$eq]': categorySlug,
    'populate[0]': 'cover',
    'populate[1]': 'category',
    'populate[2]': 'author',
    'pagination[limit]': limit,
    'sort': 'publishedAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

/**
 * Get articles by category
 */
export async function getArticlesByCategory(categorySlug, limit = 10, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.category.data.attributes.slug === categorySlug);
    return { data: filtered.slice(0, limit) };
  }

  const queryParams = new URLSearchParams({
    'filters[category][slug][$eq]': categorySlug,
    'populate': ['cover', 'author', 'category'],
    'pagination[limit]': limit,
    'sort': 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

/**
 * Get all authors
 */
export async function getAuthors(locale = 'bn') {
  if (USE_MOCK_DATA) return { data: mockAuthors };
  return fetchAPI(`/authors?populate=*&locale=${locale}`);
}

/**
 * Get global site settings (includes logos, banners, SEO)
 */
export async function getGlobalSettings(locale = 'bn') {
  return fetchAPI(`/global?populate=*&locale=${locale}`);
}

// ============================================================================
// MEDIA & FORMATTING HELPERS
// ============================================================================

/**
 * Helper to get image URL from Strapi media
 * Supports both Strapi 4 (with .data.attributes) and Strapi 5 (flat structure)
 */
export function getStrapiMedia(media) {
  const fallback = '/default.jpg';
  
  if (!media) return fallback;
  
  // Strapi 5 flat structure
  if (media.url) {
    return media.url.startsWith('http') ? media.url : `${STRAPI_URL}${media.url}`;
  }
  
  // Strapi 4 structure with data wrapper
  if (media.data?.attributes?.url) {
    const { url } = media.data.attributes;
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
  }
  
  return fallback;
}

/**
 * Format Strapi date to readable format
 * Supports 'bn' (Bengali) and 'en' (English)
 */
export function formatDate(dateString, localeArg) {
  const date = new Date(dateString);
  const locale = localeArg || 'bn'; 
  
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ============================================================================
// HOMEPAGE SECTION API FUNCTIONS
// ============================================================================

/**
 * Get featured/latest articles for homepage
 */
export async function getFeaturedArticles(limit = 6, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.isFeatured);
    return { data: filtered.slice(0, limit) };
  }

  const queryParams = new URLSearchParams({
    'filters[isFeatured][$eq]': 'true',
    'populate[0]': 'cover',
    'populate[1]': 'author',
    'populate[2]': 'category',
    'pagination[limit]': limit,
    'sort': 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

/**
 * Get trending news for ticker
 */
export async function getTrendingNews(limit = 10, locale = 'bn') {
  try {
    const queryParams = new URLSearchParams({
      'populate[0]': 'cover',
      'populate[1]': 'category',
      'pagination[limit]': limit,
      'sort[0]': 'viewCount:desc',
      'sort[1]': 'publishedAt:desc',
      'locale': locale,
    });

    const response = await fetchAPI(`/articles?${queryParams}`);
    
    // Fallback to latest if no trending found (to avoid empty ticker)
    if (!response?.data || response.data.length === 0) {
       console.warn("No trending news found, falling back to latest.");
       return getLatestArticles(1, limit, locale);
    }

    return response;
  } catch (error) {
    console.warn("getTrendingNews failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get trending categories
 */
export async function getTrendingCategories(limit = 5, locale = 'bn') {
  try {
      return await fetchAPI(`/categories?populate=*&filters[isTrending][$eq]=true&pagination[limit]=${limit}&locale=${locale}`);
  } catch (e) {
      console.warn("getTrendingCategories failed. Returning empty.", e);
      return { data: [] };
  }
}

/**
 * Get review articles
 */
export async function getReviewArticles(limit = 4, locale = 'bn') {
  try {
    const queryParams = new URLSearchParams({
      'populate[0]': 'cover',
      'populate[1]': 'category',
      'populate[2]': 'author',
      'pagination[limit]': limit,
      'sort': 'publishedAt:desc',
      'locale': locale,
    });

    return await fetchAPI(`/articles?${queryParams}`);
  } catch (error) {
    console.warn("getReviewArticles failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get latest articles with pagination
 */
export async function getLatestArticles(page = 1, limit = 5, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const start = (page - 1) * limit;
    const end = start + limit;
    return { 
      data: mockArticles.slice(start, end),
      meta: { pagination: { page, pageSize: limit, pageCount: Math.ceil(mockArticles.length / limit), total: mockArticles.length } }
    };
  }

  const queryParams = new URLSearchParams({
    'populate[0]': 'cover',
    'populate[1]': 'author',
    'populate[2]': 'category',
    'pagination[page]': page,
    'pagination[pageSize]': limit,
    'sort': 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

/**
 * Get popular articles
 */
export async function getPopularArticles(limit = 5, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.isPopular);
    return { data: filtered.slice(0, limit) };
  }

  try {
    const queryParams = new URLSearchParams({
      'populate[0]': 'cover',
      'populate[1]': 'author',
      'populate[2]': 'category',
      'pagination[limit]': limit,
      'sort[0]': 'viewCount:desc',
      'sort[1]': 'createdAt:desc',
      'locale': locale,
    });

    return await fetchAPI(`/articles?${queryParams}`);
  } catch (error) {
    console.warn("getPopularArticles failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get most viewed articles
 */
export async function getMostViewedArticles(limit = 5, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const sorted = [...mockArticles].sort((a, b) => b.attributes.viewCount - a.attributes.viewCount);
    return { data: sorted.slice(0, limit) };
  }

  try {
    const queryParams = new URLSearchParams({
      'populate[0]': 'cover',
      'populate[1]': 'category',
      'pagination[limit]': limit,
      'sort[0]': 'viewCount:desc',
      'sort[1]': 'createdAt:desc',
      'locale': locale,
    });

    return await fetchAPI(`/articles?${queryParams}`);
  } catch (error) {
    console.warn("getMostViewedArticles failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get video articles
 */
export async function getVideoArticles(limit = 6, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.videoUrl);
    return { data: filtered.slice(0, limit) };
  }

  try {
    const queryParams = new URLSearchParams({
      'filters[videoUrl][$notNull]': 'true',
      'populate[0]': 'cover',
      'populate[1]': 'category',
      'pagination[limit]': limit,
      'sort': 'createdAt:desc',
      'locale': locale,
    });

    return await fetchAPI(`/articles?${queryParams}`);
  } catch (error) {
     console.warn("getVideoArticles failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get editor's picks
 */
export async function getEditorPicks(limit = 4, locale = 'bn') {
  if (USE_MOCK_DATA) {
    const filtered = mockArticles.filter(a => a.attributes.isEditorPick);
    if (filtered.length === 0) return { data: mockArticles.slice(0, limit) };
    return { data: filtered.slice(0, limit) };
  }

  try {
    const queryParams = new URLSearchParams({
      'populate[0]': 'cover',
      'populate[1]': 'author',
      'populate[2]': 'category',
      'pagination[limit]': limit,
      'sort': 'createdAt:desc',
      'locale': locale,
    });

    return await fetchAPI(`/articles?${queryParams}`);
  } catch (error) {
    console.warn("getEditorPicks failed, falling back to latest.");
    return getLatestArticles(1, limit, locale);
  }
}

/**
 * Get popular tags
 */
export async function getPopularTags(limit = 20, locale = 'bn') {
  if (USE_MOCK_DATA) return { data: mockTags.slice(0, limit) };
  
  try {
    const queryParams = new URLSearchParams({
      'pagination[limit]': limit,
      'sort': 'articleCount:desc',
      'locale': locale,
    });

    return await fetchAPI(`/tags?${queryParams}`);
  } catch (error) {
    console.warn('getTags failed, returning empty array:', error);
    return { data: [] };
  }
}

/**
 * Get articles by category with limit (Enhanced)
 */
export async function getArticlesByCategoryEnhanced(categorySlug, limit = 10, options = {}, locale = 'bn') {
  if (USE_MOCK_DATA) {
     const filtered = mockArticles.filter(a => a.attributes.category.data.attributes.slug === categorySlug);
     return { data: filtered.slice(0, limit) };
  }

  const queryParams = new URLSearchParams({
    'filters[category][slug][$eq]': categorySlug,
    'populate': '*', 
    'pagination[limit]': limit,
    'sort': options.sort || 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}
