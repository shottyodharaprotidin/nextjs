
import { fetchAPI, getStrapiLocale } from '@/lib/strapi';

export async function searchArticles(query, locale = 'bn', limit = 20) {
  const strapiLocale = getStrapiLocale(locale);
  // Manual query string construction to preserve brackets (Strapi doesn't like encoded brackets)
  const encodedQuery = encodeURIComponent(query);
  const queryString = [
    `filters[title][$containsi]=${encodedQuery}`,
    `populate[0]=cover`,
    `populate[1]=category`,
    `populate[2]=author`,
    `pagination[limit]=${limit}`,
    `locale=${strapiLocale}`
  ].join('&');
  
  return await fetchAPI(`/articles?${queryString}`);
}
