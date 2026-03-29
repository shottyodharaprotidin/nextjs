import {
  getTopNewsArticles,
  getHeadlineArticles,
  getTopSliderArticles,
  getMiddleSliderArticles,
  getMostReadArticles,
  getPopularNewsArticles,
  getTechInnovationArticles,
  getEditorChoiceArticles,
  getRecentPostArticles,
  getLatestArticles,
  selectRecentReviewArticles,
} from "@/services/articleService";
import { getYoutubeVideos, getActivePoll } from "@/services/mediaService";
import {
  getGlobalSettings,
  getTags,
  getTrendingCategories,
  getSidebarCategories,
  getAdsManagement,
} from "@/services/globalService";
import { getWeatherForecast } from "@/services/weatherService";
import { localizeLocationLabel } from "@/lib/locationLocalization";
import { unstable_cache } from "next/cache";

const getCachedHomeInitialData = unstable_cache(async (locale = "bn") => {
  try {
    const [
      topSliderRes,
      middleSliderRes,
      headlineRes,
      latestRes,
      youtubeRes,
      pollRes,
      globalRes,
      tagsRes,
      topNewsRes,
      mostReadRes,
      popularNewsRes,
      techRes,
      editorRes,
      recentPostRes,
      trendingRes,
      sidebarRes,
      adsRes,
      weatherRes,
    ] = await Promise.allSettled([
      getTopSliderArticles(10, locale),
      getMiddleSliderArticles(10, locale),
      getHeadlineArticles(15, locale),
      getLatestArticles(1, 20, locale),
      getYoutubeVideos(locale),
      getActivePoll(locale),
      getGlobalSettings(locale),
      getTags(10, locale),
      getTopNewsArticles(5, locale),
      getMostReadArticles(10, locale),
      getPopularNewsArticles(10, locale),
      getTechInnovationArticles(4, locale),
      getEditorChoiceArticles(5, locale),
      getRecentPostArticles(20, locale),
      getTrendingCategories(20, locale),
      getSidebarCategories(20, locale),
      getAdsManagement(),
      getWeatherForecast(undefined, undefined, locale),
    ]);

    const latestFallback = latestRes.value?.data || [];
    const recentPostData = recentPostRes.value?.data;
    const initialLatest = recentPostData?.length > 0 ? recentPostData : latestFallback;
    const initialLatestReviews = selectRecentReviewArticles(latestFallback, 7);

    let weatherData = {
      currentTemp: null,
      apparentTemp: null,
      description: "",
      icon: "partly-cloudy",
      iconClass: "wi wi-day-cloudy",
      rainChance: null,
      locationLabel: "",
      daily: [],
    };

    if (weatherRes.status === "fulfilled" && weatherRes.value) {
      weatherData = {
        ...weatherRes.value,
        locationLabel: weatherRes.value.locationLabel
          ? localizeLocationLabel(weatherRes.value.locationLabel, locale)
          : "",
      };
    }

    const globalRaw = globalRes.value?.data || globalRes.value || null;
    const globalData = globalRaw?.attributes || globalRaw;
    const adsRaw = adsRes.value?.data || adsRes.value || null;

    return {
      locale,
      featured: topSliderRes.value?.data || [],
      popular: middleSliderRes.value?.data || [],
      trending: headlineRes.value?.data || [],
      latest: initialLatest,
      topNews: topNewsRes.value?.data || [],
      mostRead: mostReadRes.value?.data || [],
      popularNews: popularNewsRes.value?.data || [],
      youtubeData: youtubeRes.value?.data || [],
      pollData: pollRes.value?.data?.[0] || null,
      globalSettings: globalData,
      tags: tagsRes.value?.data || [],
      techArticles: techRes.value?.data || [],
      editorPicks: editorRes.value?.data || [],
      latestReviews: initialLatestReviews,
      adsData: adsRaw,
      trendingCategories: trendingRes.value?.data || [],
      sidebarCategories: sidebarRes.value?.data || [],
      weatherData,
      totalPages: latestRes.value?.meta?.pagination?.pageCount || 1,
      serverTimestamp: Date.now(),
    };
  } catch {
    return {
      locale,
      featured: [],
      popular: [],
      trending: [],
      latest: [],
      topNews: [],
      mostRead: [],
      popularNews: [],
      youtubeData: [],
      pollData: null,
      globalSettings: null,
      tags: [],
      techArticles: [],
      editorPicks: [],
      latestReviews: [],
      adsData: null,
      trendingCategories: [],
      sidebarCategories: [],
      weatherData: {
        currentTemp: null,
        apparentTemp: null,
        description: "",
        icon: "partly-cloudy",
        iconClass: "wi wi-day-cloudy",
        rainChance: null,
        locationLabel: "",
        daily: [],
      },
      totalPages: 1,
      serverTimestamp: Date.now(),
    };
  }
}, ["home-initial-data"], { revalidate: 60 });

export async function getHomeInitialData(locale = "bn") {
  return getCachedHomeInitialData(locale);
}
