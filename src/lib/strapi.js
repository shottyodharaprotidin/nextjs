const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://app.shottyodharaprotidin.com';
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

/**
 * Helper to make requests to Strapi API
 */
export async function fetchAPI(path, options = {}) {
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
