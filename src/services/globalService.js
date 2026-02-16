
import { fetchAPI } from '@/lib/strapi';

export async function getGlobalSettings(locale = 'bn') {
  return fetchAPI(`/global?populate=*&locale=${locale}`);
}

export async function getAuthors(locale = 'bn') {
  return fetchAPI(`/authors?populate=*&locale=${locale}`);
}

export async function getTrendingCategories(limit = 5, locale = 'bn') {
  try {
      return await fetchAPI(`/categories?populate=*&filters[isTrending][$eq]=true&pagination[limit]=${limit}&locale=${locale}`);
  } catch (e) {
      console.warn("getTrendingCategories failed. Returning empty.", e);
      return { data: [] };
  }
}
