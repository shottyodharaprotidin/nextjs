
import { fetchAPI } from '@/lib/strapi';

export async function getCategories(locale = 'bn') {
  return await fetchAPI(`/categories?populate=*&locale=${locale}`);
}

export async function getCategoryBySlug(slug, locale = 'bn') {
  const data = await fetchAPI(`/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${locale}`);
  return data?.data?.[0] || null;
}
