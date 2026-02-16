
import { fetchAPI } from '@/lib/strapi';

export async function searchArticles(query, locale = 'bn', limit = 20) {
  // Manual query string construction to preserve brackets (Strapi doesn't like encoded brackets)
  const encodedQuery = encodeURIComponent(query);
  const queryString = [
    `filters[$or][0][title][$containsi]=${encodedQuery}`,
    `filters[$or][1][content][$containsi]=${encodedQuery}`,
    `filters[$or][2][excerpt][$containsi]=${encodedQuery}`,
    `populate[0]=cover`,
    `populate[1]=category`,
    `populate[2]=author`,
    `pagination[limit]=${limit}`,
    `locale=${locale}`
  ].join('&');
  
  return await fetchAPI(`/articles?${queryString}`);
}
