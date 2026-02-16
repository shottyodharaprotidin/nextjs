
import { fetchAPI, getStrapiLocale } from '@/lib/strapi';

export async function getPopularTags(limit = 20, locale = 'bn') {
  const strapiLocale = getStrapiLocale(locale);
  try {
    const queryParams = new URLSearchParams({
      'pagination[limit]': limit,
      'locale': strapiLocale,
    });

    return await fetchAPI(`/tags?${queryParams}`);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return { data: [] };
  }
}
