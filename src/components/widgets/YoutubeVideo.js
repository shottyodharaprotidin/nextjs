"use client"
import React, { useState, useCallback, useEffect } from 'react';
import { fetchAPI, getStrapiMedia, formatDate } from "@/lib/strapi";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { getYoutubeVideos } from "@/services/articleService";

const YoutubeVideo = () => {
  const { language } = useLanguage();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const t = {
    bn: {
      sectionTitle: 'সর্বশেষ ভিডিও সংবাদ',
      playlistTitle: 'ভিডিও প্লেলিস্ট',
      desc: 'আজকের সেরা ভিডিও সংবাদ',
      loading: 'ভিডিও সংবাদ লোড হচ্ছে...',
      authorFallback: 'নিউজ ডেস্ক'
    },
    en: {
      sectionTitle: 'Latest Video News',
      playlistTitle: 'Video Playlist',
      desc: 'Today\'s top video stories',
      loading: 'Loading video news...',
      authorFallback: 'News Desk'
    }
  };

  const currentT = t[language] || t.bn;
  const locale = language === 'bn' ? 'bn' : 'en';

  useEffect(() => {
    async function fetchVideos() {
      setLoading(true);
      setVideos([]);
      try {
        const response = await getYoutubeVideos(5, locale);
        if (response?.data?.length > 0) {
          const mappedVideos = response.data.map(item => {
            const data = item.attributes || item;
            // Extract YouTube ID from URL
            // Extract YouTube ID from URL - simplified and robust regex
            let videoId = 'rqJDO3TWnac';
            if (data.videoUrl) {
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
                const match = data.videoUrl.match(regExp);
                if (match && match[2].length === 11) {
                    videoId = match[2];
                }
            }
            return {
              id: videoId,
              title: data.title,
              slug: data.slug,
              author: data.author?.data?.attributes?.name || currentT.authorFallback,
            };
          });
          setVideos(mappedVideos);
        }
      } catch (error) {
        console.error("Error fetching video articles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [language]);

  const handleThumbnailClick = useCallback((index) => {
    setSelectedVideo(index);
    setIframeLoaded(true);
  }, []);

  const handlePlayClick = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  if (loading) return <div className="text-white text-center py-5">{currentT.loading}</div>;
  if (videos.length === 0) return null;

  const currentVideo = videos[selectedVideo];
  const thumbnailUrl = `https://i.ytimg.com/vi/${currentVideo.id}/mqdefault.jpg`;

  return (
    <div className="youtube-wrapper">
      <div className="playlist-title">
        <h4>{currentT.sectionTitle}</h4>
      </div>
      <div id="rypp-demo-1" className="RYPP r16-9" data-rypp="da4e5dd6">
        <div>
          <div className="RYPP-playlist">
            <header>
              <h2 className="_h1 RYPP-title">{currentT.playlistTitle}</h2>
              <p className="RYPP-desc">
                {currentT.desc} <a href="#" target="_blank">#VideoNews</a>
              </p>
            </header>
            <div className="RYPP-items">
              <ol>
                {videos.map((video, index) => (
                  <li
                    key={`thumbnail-${index}`}
                    data-video-id={video.id}
                    className={selectedVideo === index ? 'selected' : ''}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <div className="title">
                      <span className="text-white text-decoration-none">
                        {video.title}
                      </span>
                      <small className="author d-block text-muted mt-1">
                        {video.author}
                      </small>
                    </div>
                    <ImageWithFallback
                      src={`https://i.ytimg.com/vi/${video.id}/default.jpg`}
                      className="thumb"
                      alt={`Thumbnail ${index + 1}`}
                      width={120}
                      height={90}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="RYPP-video">
          {iframeLoaded ? (
            <iframe
              className="RYPP-video-player"
              style={{ display: 'block' }}
              frameBorder="0"
              allowFullScreen
              title="YouTube Video Player - Today's top video stories"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
            />
          ) : (
            <div
              className="youtube-facade"
              onClick={handlePlayClick}
              aria-label="Play video"
              role="button"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  cursor: 'pointer',
                  width: '100%',
                  height: '100%',
                  background: `#000 url(${thumbnailUrl}) center/cover no-repeat`,
                }}
            >
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '68px',
                height: '48px',
                backgroundColor: 'rgba(255,0,0,0.8)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;
