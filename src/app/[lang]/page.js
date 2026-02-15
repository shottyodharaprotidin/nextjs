"use client"
import dynamic from "next/dynamic";
const SunnyWeather = dynamic(() => import("@/components/ltr/sunny-wether/sunny-weather"), { ssr: false });
const YoutubeVideo = dynamic(() => import("@/components/ltr/youtube-video/youtube-video"), { ssr: false });

const DatePickerComponents = dynamic(() => import("@/components/ltr/date-picker/date-picker"), { ssr: false });

import HomeFeatureCarousal from "@/components/ltr/home-feature-carousal/home-feature-carousal";
import HeroSection from "@/components/ltr/hero-grid/hero-section";
import MainNewsSection from "@/components/ltr/main-content/main-news-section";

// Below-the-fold components — lazy loaded for better initial performance
const LatestArticles = dynamic(() => import("@/components/ltr/latest-articles/latest-articles"));
const TechInnovation = dynamic(() => import("@/components/ltr/tech-innovation/tech-innovation"));
const EditorsPick = dynamic(() => import("@/components/ltr/editors-pick/editors-pick"));
const TrendingTopics = dynamic(() => import("@/components/ltr/trending-topics/trending-topics"));

const SidebarTabs = dynamic(() => import("@/components/ltr/sidebar-tabs/sidebar-tabs"));
const Tags = dynamic(() => import("@/components/ltr/tags/tags"));
const LiveTV = dynamic(() => import("@/components/ltr/sidebar/live-tv"));
const SpecialReports = dynamic(() => import("@/components/ltr/special-reports/special-reports"));

import Link from "next/link";
import { useState, useEffect } from "react";
import { getTrendingNews, formatDate, getStrapiMedia } from "@/lib/strapi";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language, translateNumber } = useLanguage();
  const [topStories, setTopStories] = useState([]);

  const t = {
    bn: {
      topStories: { strong: 'শীর্ষ', rest: 'সংবাদ' },
      loadingTop: 'শীর্ষ সংবাদ লোড হচ্ছে...',
      join: 'যোগ দিন',
      followers: 'অনুসারী',
      social: {
        subscribers: 'সাবস্ক্রাইবার',
        fans: 'ফ্যান',
        followers: 'অনুসারী'
      },
      weather: {
        partlySunny: 'আংশিক রৌদ্রোজ্জ্বল',
        realFeel: 'অনুভব হচ্ছে',
        changeOfRain: 'বৃষ্টির সম্ভাবনা',
        days: ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'],
        city: 'ঢাকা, বাংলাদেশ',
        date: 'শনিবার, ২৬ মার্চ'
      },
      video: {
        title: 'সর্বশেষ ভিডিও সংবাদ',
        desc: 'আমাদের সর্বশেষ ভিডিও রিপোর্ট এবং গ্রাউন্ড জিরো থেকে কভারেজ দেখুন।'
      }
    },
    en: {
      topStories: { strong: 'Top', rest: 'Stories' },
      loadingTop: 'Loading top stories...',
      join: 'Join',
      followers: 'Followers',
      social: {
        subscribers: 'Subscribers',
        fans: 'Fans',
        followers: 'Followers'
      },
      weather: {
        partlySunny: 'Partly Sunny',
        realFeel: 'Real Feel',
        changeOfRain: 'Change of Rain',
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        city: 'San Francisco, CA',
        date: 'Saturday, March 26th'
      },
      video: {
        title: 'Latest Video News',
        desc: 'Watch our latest video reports and coverage from ground zero.'
      }
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchTopStories() {
      try {
        const response = await getTrendingNews(5, locale);
        setTopStories(response?.data || []);
      } catch (error) {
        console.error("Failed to fetch top stories", error);
      }
    }
    fetchTopStories();
  }, [language]);

  return (
    <>
      {/* *** START PAGE MAIN CONTENT *** */}
      <main className="page_main_wrapper">
        {/* START FEATURE SECTION */}
        <div
          className="bg-img feature-section py-4 py-lg-3 py-xl-4"
          style={{ backgroundImage: "url('assets/images/bg-shape.png')" }}
        >
          <div className="container">
            <HomeFeatureCarousal />
          </div>
        </div>
        <HeroSection />
        <div className="container">
          <div className="row gx-lg-5">
            {/* START MAIN CONTENT */}
            <div className="col-md-3 leftSidebar d-none d-xl-block">
              <div className="sidebar-sticky">
                <div className="panel_header">
                  <h4>
                    <strong>{currentT.topStories.strong}</strong> {currentT.topStories.rest}
                  </h4>
                </div>
                <div className="border-bottom posts">
                  <ul>
                    {topStories.length > 0 ? (
                      topStories.map((story) => {
                        const data = story.attributes || story;
                        return (
                          <li key={story.id} className="post-grid">
                            <div className="posts-inner px-0">
                              <div className="row g-0 align-items-start">
                                {getStrapiMedia(data.cover) && (
                                  <div className="col-4 pe-2">
                                    <Link href={`/article/${data.slug}`}>
                                      <img
                                        src={getStrapiMedia(data.cover)}
                                        alt={data.title}
                                        className="img-fluid rounded"
                                        style={{ width: '100%', height: '70px', objectFit: 'cover' }}
                                      />
                                    </Link>
                                  </div>
                                )}
                                <div className={getStrapiMedia(data.cover) ? 'col-8' : 'col-12'}>
                                  <h5 className="posts-title" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                    <Link href={`/article/${data.slug}`}>
                                      {data.title}
                                    </Link>
                                  </h5>
                                  <ul className="align-items-center authar-info d-flex flex-wrap gap-1">
                                    <li>
                                      <span className="post-category">
                                        {data.category?.data?.attributes?.name || (language === 'bn' ? 'সংবাদ' : 'News')}
                                      </span>
                                    </li>
                                    <li style={{ fontSize: '11px' }}>{formatDate(data.publishedAt, language === 'bn' ? 'bn' : 'en')}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })
                    ) : (
                      <div className="text-muted py-2">{currentT.loadingTop}</div>
                    )}
                  </ul>
                </div>
                {/* START DYNAMIC SIDEBAR TABS (Top Stories, Most Viewed, Popular) */}
                <SidebarTabs />
                {/* END OF /. DYNAMIC SIDEBAR TABS */}
              </div>
            </div>
            <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
              <div>
                {/* START POST CATEGORY STYLE ONE (Popular news) */}
                <MainNewsSection />
                {/* END OF /. POST CATEGORY STYLE ONE (Popular news) */}
                {/* START ADVERTISEMENT */}
                <div className="add-inner">
                  <img
                    src="/assets/images/add728x90-1.jpg"
                    className="img-fluid"
                    alt=""
                    width={728}
                    height={90}
                    loading="lazy"
                  />
                </div>
                {/* END OF /. ADVERTISEMENT */}
              </div>
            </div>
            {/* END OF /. MAIN CONTENT */}
            {/* START SIDE CONTENT */}
            <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
              <div>
                {/* START SOCIAL COUNTER TEXT */}
                <div className="align-items-center d-flex fs-6 justify-content-center mb-1 text-center social-counter-total">
                  <i className="fa-solid fa-heart text-primary me-1" /> {currentT.join}{" "}
                  <span className="fw-bold mx-1">{translateNumber('2.5')}M</span> {currentT.followers}
                </div>
                {/* END OF /. SOCIAL COUNTER TEXT */}
                {/* START SOCIAL ICON */}
                <div className="social-media-inner">
                  <ul className="g-1 row social-media">
                    <li className="col-4">
                      <a href="#" className="rss">
                        <i className="fas fa-rss" />
                        <div>{translateNumber('2,035')}</div>
                        <p>{currentT.social.subscribers}</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="fb">
                        <i className="fab fa-facebook-f" />
                        <div>{translateNumber('3,794')}</div>
                        <p>{currentT.social.fans}</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="insta">
                        <i className="fab fa-instagram" />
                        <div>{translateNumber('941')}</div>
                        <p>{currentT.social.followers}</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="you_tube">
                        <i className="fab fa-youtube" />
                        <div>{translateNumber('7,820')}</div>
                        <p>{currentT.social.subscribers}</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="twitter">
                        <i className="fab fa-twitter" />
                        <div>{translateNumber('1,562')}</div>
                        <p>{currentT.social.followers}</p>
                      </a>
                    </li>
                    <li className="col-4">
                      <a href="#" className="pint">
                        <i className="fab fa-pinterest-p" />
                        <div>{translateNumber('1,310')}</div>
                        <p>{currentT.social.followers}</p>
                      </a>
                    </li>
                  </ul>{" "}
                  {/* /.social icon */}
                </div>
                {/* END OF /. SOCIAL ICON */}
                {/* START TRENDING TOPICS */}
                <TrendingTopics />
                {/* END OF /. TRENDING TOPICS */}
                {/* START LIVE TV */}
                <LiveTV />
                {/* END OF /. LIVE TV */}

              </div>
            </div>
            {/* END OF /. SIDE CONTENT */}
          </div>
        </div>
        {/* START YOUTUBE VIDEO */}
        <div className="mb-4 py-5 position-relative video-section">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6 text-center">
                <h3 className="text-white">{currentT.video.title}</h3>
                <p className="text-white mb-0">
                  {currentT.video.desc}
                </p>
              </div>
            </div>
            <YoutubeVideo />
          </div>
        </div>
        {/* END OF /. YOUTUBE VIDEO */}
        <SpecialReports />
        <section className="articles-wrapper">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-md-3 leftSidebar d-none d-xl-block">
                <div>
                  {/* START TECH & INNOVATION */}
                  <TechInnovation />
                  {/* END OF /. TECH & INNOVATION */}
                  {/* START EDITOR'S PICKS */}
                  <EditorsPick />
                  {/* END OF /. EDITOR'S PICKS */}
                </div>
              </div>
              <div className="col-sm-7 col-md-8 col-xl-6 border-start border-end main-content">
                <div>
                  {/* START POST CATEGORY STYLE FOUR (Latest articles ) */}
                  <LatestArticles />
                  {/* END OF /. POST CATEGORY STYLE FOUR (Latest articles ) */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner mb-0">
                    <img
                      src="/assets/images/add728x90-2.jpg"
                      className="img-fluid"
                      alt=""
                      width={728}
                      height={90}
                      loading="lazy"
                    />
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-xl-3 rightSidebar">
                <div>
                  {/* START WEATHER */}
                  <div className="weather-wrapper-2 weather-bg-2">
                    <div className="weather-temperature">
                      <div className="weather-now">
                        <span className="big-degrees">{translateNumber('39')}</span>
                        <span className="circle">°</span>
                        <span className="weather-unit">C</span>
                      </div>
                      <div className="weather-icon-2">
                        <SunnyWeather />
                      </div>
                    </div>
                    <div className="weather-info">
                      <div className="weather-name">{currentT.weather.partlySunny}</div>
                      <span>
                        {currentT.weather.realFeel}: {translateNumber('67')} <sup>°</sup>
                      </span>
                      <span>{currentT.weather.changeOfRain}</span>
                    </div>
                    <div className="weather-week-2">
                      <div className="weather-days">
                        <div className="day-0">{currentT.weather.days[0]}</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sunny" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-0">{translateNumber('45')}</span>
                          <span className="td-circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-1">{currentT.weather.days[1]}</div>
                        <div className="day-icon">
                          <i className="wi wi-day-cloudy-high" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-1">{translateNumber('21')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-2">{currentT.weather.days[2]}</div>
                        <div className="day-icon">
                          <i className="wi wi-day-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-2">{translateNumber('29')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-3">{currentT.weather.days[3]}</div>
                        <div className="day-icon">
                          <i className="wi wi-day-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-3">{translateNumber('19')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">{currentT.weather.days[4]}</div>
                        <div className="day-icon">
                          <i className="wi wi-sleet" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-4">{translateNumber('54')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">{currentT.weather.days[5]}</div>
                        <div className="day-icon">
                          <i className="wi wi-smog" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-5">{translateNumber('68')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                      <div className="weather-days">
                        <div className="day-4">{currentT.weather.days[6]}</div>
                        <div className="day-icon">
                          <i className="wi wi-lightning" />
                        </div>
                        <div className="day-degrees">
                          <span className="degrees-6">{translateNumber('28')}</span>
                          <span className="circle">°</span>
                        </div>
                      </div>
                    </div>
                    <div className="weather-footer">
                      <div className="weather-date">{currentT.weather.date}</div>
                      <div className="weather-city">{currentT.weather.city}</div>
                    </div>
                  </div>
                  {/* END OF /. WEATHER */}
                  {/* START ADVERTISEMENT */}
                  <div className="add-inner">
                    <img
                      src="/assets/images/add320x270-1.jpg"
                      className="img-fluid"
                      alt=""
                      width={320}
                      height={270}
                      loading="lazy"
                    />
                  </div>
                  {/* END OF /. ADVERTISEMENT */}
                  {/* START ARCHIVE */}
                  <div className="archive-wrapper">
                    <DatePickerComponents />
                  </div>
                  {/* END OF /. ARCHIVE */}

                  {/* START TAGS */}
                  <Tags />
                  {/* END OF /. TAGS */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* *** END OF /. PAGE MAIN CONTENT *** */}
      </>
  );
}
