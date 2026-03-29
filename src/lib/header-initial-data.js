import { formatDate, getStrapiMedia } from '@/lib/strapi';
import { getCategoriesWithChildren } from '@/services/categoryService';
import { getHeaderTop, getMenuItems } from '@/services/globalService';
import { getCurrentWeather } from '@/services/weatherService';
import { unstable_cache } from 'next/cache';

const getCachedHeaderInitialData = unstable_cache(async (locale = 'bn') => {
  try {
    const [headerTopRes, headerMenuRes, sidebarMenuRes, categoryTreeRes, headerWeatherRes] = await Promise.allSettled([
      getHeaderTop(locale),
      getMenuItems('header', locale),
      getMenuItems('sidebar', locale),
      getCategoriesWithChildren(locale),
      getCurrentWeather(undefined, undefined, locale),
    ]);

    const headerTopData = headerTopRes.status === 'fulfilled'
      ? (headerTopRes.value?.data || headerTopRes.value || null)
      : null;

    const headerMenuItems = headerMenuRes.status === 'fulfilled'
      ? (headerMenuRes.value?.data || [])
      : [];

    const headerAttrs = headerMenuRes.status === 'fulfilled'
      ? (headerMenuRes.value?.attributes || {})
      : {};

    const mobileMenuItems = headerAttrs.mobileMenu || [];
    const headerLogo = headerAttrs.logo ? getStrapiMedia(headerAttrs.logo, null) : null;

    const sidebarMenuItems = sidebarMenuRes.status === 'fulfilled'
      ? (sidebarMenuRes.value?.data || [])
      : [];

    const sidebarData = sidebarMenuRes.status === 'fulfilled'
      ? (sidebarMenuRes.value?.attributes || null)
      : null;

    const categoryTree = categoryTreeRes.status === 'fulfilled'
      ? (categoryTreeRes.value || [])
      : [];

    const headerWeather = headerWeatherRes.status === 'fulfilled'
      ? (headerWeatherRes.value || { temp: null, weatherCode: null, icon: 'cloudy' })
      : { temp: null, weatherCode: null, icon: 'cloudy' };

    return {
      headerTopData,
      headerMenuItems,
      mobileMenuItems,
      sidebarMenuItems,
      sidebarData,
      categoryTree,
      headerLogo,
      headerWeather,
      headerCurrentDate: formatDate(new Date().toISOString(), locale, true),
    };
  } catch {
    return {
      headerTopData: null,
      headerMenuItems: [],
      mobileMenuItems: [],
      sidebarMenuItems: [],
      sidebarData: null,
      categoryTree: [],
      headerLogo: null,
      headerWeather: { temp: null, weatherCode: null, icon: 'cloudy' },
      headerCurrentDate: '',
    };
  }
}, ['header-initial-data'], { revalidate: 60 });

export async function getHeaderInitialData(locale = 'bn') {
  return getCachedHeaderInitialData(locale);
}
