
import { fetchAPI } from '@/lib/strapi';

export async function getPopularTags(limit = 20, locale = 'bn') {
  try {
    const queryParams = new URLSearchParams({
      'pagination[limit]': limit,
      'locale': locale,
    });

    return await fetchAPI(`/tags?${queryParams}`);
  } catch (error) {
    console.warn('getTags failed, returning empty array:', error);
    return { data: [] };
  }
}
