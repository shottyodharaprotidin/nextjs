
import { fetchAPI } from '@/lib/strapi';

export async function getArticles(params = {}, locale = 'bn') {
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

export async function getArticleBySlug(slug, locale = 'bn') {
  const data = await fetchAPI(`/articles?filters[slug][$eq]=${slug}&populate=*&locale=${locale}`);
  return data?.data?.[0] || null;
}

export async function getLatestArticles(page = 1, limit = 5, locale = 'bn') {
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

export async function getRelatedArticles(categorySlug, currentArticleId, limit = 4, locale = 'bn') {
    const queryParams = new URLSearchParams({
        'filters[category][slug][$eq]': categorySlug,
        'filters[id][$ne]': currentArticleId,
        'populate': ['cover', 'category'],
        'pagination[limit]': limit,
        'sort': 'publishedAt:desc',
        'locale': locale
    });
    return await fetchAPI(`/articles?${queryParams}`);
}

export async function getFeaturedArticles(limit = 6, locale = 'bn') {
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
    
    if (!response?.data || response.data.length === 0) {
       return getLatestArticles(1, limit, locale);
    }

    return response;
  } catch (error) {
    return getLatestArticles(1, limit, locale);
  }
}

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
    return getLatestArticles(1, limit, locale);
  }
}

export async function getPopularArticles(limit = 5, locale = 'bn') {
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
    return getLatestArticles(1, limit, locale);
  }
}

export async function getMostViewedArticles(limit = 5, locale = 'bn') {
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
    return getLatestArticles(1, limit, locale);
  }
}

export async function getVideoArticles(limit = 6, locale = 'bn') {
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
    return getLatestArticles(1, limit, locale);
  }
}

export async function getYoutubeVideos(limit = 5, locale = 'bn') {
  try {
    const queryParams = new URLSearchParams({
      'populate': '*',
      'pagination[limit]': limit,
      'sort': 'publishedAt:desc',
      'locale': locale,
    });
    return await fetchAPI(`/youtubes?${queryParams}`);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return { data: [] };
  }
}

export async function getEditorPicks(limit = 4, locale = 'bn') {
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
    return getLatestArticles(1, limit, locale);
  }
}

export async function getArticlesByCategorySlug(categorySlug, limit = 20, locale = 'bn') {
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

export async function getArticlesByCategory(categorySlug, limit = 10, locale = 'bn') {
  const queryParams = new URLSearchParams({
    'filters[category][slug][$eq]': categorySlug,
    'populate': ['cover', 'author', 'category'],
    'pagination[limit]': limit,
    'sort': 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

export async function getArticlesByCategoryEnhanced(categorySlug, limit = 10, options = {}, locale = 'bn') {
  const queryParams = new URLSearchParams({
    'filters[category][slug][$eq]': categorySlug,
    'populate': '*', 
    'pagination[limit]': limit,
    'sort': options.sort || 'createdAt:desc',
    'locale': locale,
  });

  return await fetchAPI(`/articles?${queryParams}`);
}

export async function incrementViewCount(articleId, currentViews) {
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
