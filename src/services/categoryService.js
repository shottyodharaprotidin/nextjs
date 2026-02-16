
import { fetchAPI, getStrapiLocale } from '@/lib/strapi';

export async function getCategories(locale = 'bn') {
  const strapiLocale = getStrapiLocale(locale);
  return await fetchAPI(`/categories?populate=*&locale=${strapiLocale}`);
}

export async function getCategoryBySlug(slug, locale = 'bn') {
  const strapiLocale = getStrapiLocale(locale);
  const data = await fetchAPI(`/categories?filters[slug][$eq]=${encodeURIComponent(slug)}&locale=${strapiLocale}`);
  return data?.data?.[0] || null;
}
