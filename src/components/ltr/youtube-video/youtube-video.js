"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getStrapiMedia } from "@/lib/strapi";
import { useLanguage } from '@/lib/LanguageContext';

const dictionary = {
  en: {
    latestVideoNews: 'Latest Video News',
    playlist: 'Playlist',
    videoNews: 'Video News',
    loadingVideo: 'Loading: Video News...',
    pleaseWait: 'Please wait...',
    loading: 'Loading...'
  },
  bn: {
    latestVideoNews: 'সর্বশেষ ভিডিও সংবাদ',
    playlist: 'প্লেলিস্ট',
    videoNews: 'ভিডিও সংবাদ',
    loadingVideo: 'লোড হচ্ছে: ভিডিও সংবাদ...',
    pleaseWait: 'অপেক্ষা করুন...',
    loading: 'লোড হচ্ছে...'
  }
};

const getVideoId = (url) => {
  if (!url) return '';
  // Handle if only ID is passed
  if (url.length === 11 && !url.includes('/')) return url;
  
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const dummyVideos = [
  {
    id: 'rqJDO3TWnac',
    thumbnailUrl: 'https://i.ytimg.com/vi/rqJDO3TWnac/default.jpg',
    title: 'লোড হচ্ছে: ভিডিও সংবাদ...',
    author: 'ভিজুয়ালডন',
  },
  {
    id: '3WWlhPmqXQI',
    thumbnailUrl: 'https://i.ytimg.com/vi/3WWlhPmqXQI/default.jpg',
    title: 'অপেক্ষা করুন...',
    author: 'চ্যানেল',
  },
  {
    id: 'kssD4L2NBw0',
    thumbnailUrl: 'https://i.ytimg.com/vi/kssD4L2NBw0/default.jpg',
    title: 'লোড হচ্ছে...',
    author: 'নিউজ ডেস্ক',
  },
  {
    id: 'YcwrRA2BIlw',
    thumbnailUrl: 'https://i.ytimg.com/vi/YcwrRA2BIlw/default.jpg',
    title: 'লোড হচ্ছে...',
    author: 'আপডেট',
  },
  {
    id: 'HMpmI2F2cMs',
    thumbnailUrl: 'https://i.ytimg.com/vi/HMpmI2F2cMs/default.jpg',
    title: 'লোড হচ্ছে...',
    author: 'লাইভ',
  },
];

const YoutubeVideo = ({ data = [], isLoading = false }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const apiReadyRef = useRef(false);
  const pendingVideoRef = useRef(null);
  const { locale } = useLanguage();
  const t = dictionary[locale] || dictionary.bn;

  // Re-define dummyVideos inside component to use t
  const dummyVideos = [
    {
      id: 'rqJDO3TWnac',
      thumbnailUrl: 'https://i.ytimg.com/vi/rqJDO3TWnac/default.jpg',
      title: t.loadingVideo,
      author: 'VisualDon',
    },
    {
      id: '3WWlhPmqXQI',
      thumbnailUrl: 'https://i.ytimg.com/vi/3WWlhPmqXQI/default.jpg',
      title: t.pleaseWait,
      author: 'Channel',
    },
    {
      id: 'kssD4L2NBw0',
      thumbnailUrl: 'https://i.ytimg.com/vi/kssD4L2NBw0/default.jpg',
      title: t.loading,
      author: 'News Desk',
    },
    {
      id: 'YcwrRA2BIlw',
      thumbnailUrl: 'https://i.ytimg.com/vi/YcwrRA2BIlw/default.jpg',
      title: t.loading,
      author: 'Update',
    },
    {
      id: 'HMpmI2F2cMs',
      thumbnailUrl: 'https://i.ytimg.com/vi/HMpmI2F2cMs/default.jpg',
      title: t.loading,
      author: 'Live',
    },
  ];

  // Load YouTube IFrame API once
  useEffect(() => {
    const existingReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (existingReady) existingReady();
      apiReadyRef.current = true;
      if (pendingVideoRef.current) {
        initPlayer(pendingVideoRef.current);
        pendingVideoRef.current = null;
      }
    };
    if (window.YT && window.YT.Player) {
      apiReadyRef.current = true;
    } else if (!document.getElementById('yt-iframe-api')) {
      const script = document.createElement('script');
      script.id = 'yt-iframe-api';
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    }
    return () => {
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch (_) {}
        playerRef.current = null;
      }
    };
  }, []);

  const initPlayer = useCallback((videoId) => {
    if (!playerContainerRef.current) return;
    if (playerRef.current) {
      try { playerRef.current.destroy(); } catch (_) {}
      playerRef.current = null;
    }
    playerRef.current = new window.YT.Player(playerContainerRef.current, {
      videoId,
      playerVars: { autoplay: 0, rel: 0, modestbranding: 1, controls: 1 },
    });
  }, []);

  useEffect(() => {
    if (isLoading) {
      setVideos(dummyVideos);
    } else if (data && data.length > 0) {
      const formattedVideos = data.map(item => {
        const v = item.attributes || item;
        const videoId = getVideoId(v.youtubeUrl || v.videoUrl);
        
        // Handle thumbnail from dedicated collection or fallback to youtube default
        const thumbData = v.thumbnail?.data?.attributes || v.thumbnail?.attributes || v.thumbnail?.data || v.thumbnail;
        const thumbUrl = thumbData ? getStrapiMedia(thumbData) : `https://i.ytimg.com/vi/${videoId}/default.jpg`;

        return {
          id: videoId || 'rqJDO3TWnac', // fallback
          thumbnailUrl: thumbUrl,
          title: v.title,
          author: 'Youtube',
        };
      });
      setVideos(formattedVideos);
    } else {
      setVideos(dummyVideos); // Fallback to dummy if empty or show empty state? Let's show dummy for now or logic to hide
    }
  }, [data, isLoading]);

  // Auto-init first video once both videos and API are ready
  useEffect(() => {
    if (!videos.length || isLoading) return;
    const firstId = videos[0]?.id;
    if (!firstId) return;
    if (apiReadyRef.current && window.YT?.Player) {
      if (!playerRef.current) initPlayer(firstId);
    } else {
      pendingVideoRef.current = firstId;
    }
  }, [videos, isLoading]);

  const handleThumbnailClick = (index) => {
    setSelectedVideo(index);
    const vid = videos.slice(0, 5)[index];
    if (!vid) return;
    if (apiReadyRef.current && window.YT?.Player) {
      if (playerRef.current?.loadVideoById) {
        playerRef.current.loadVideoById(vid.id);
      } else {
        initPlayer(vid.id);
      }
    } else {
      pendingVideoRef.current = vid.id;
    }
  };

  if (!isLoading && data.length === 0) return null; // Hide if no real data

  const displayVideos = videos.slice(0, 5);

  return (
    <div className="youtube-wrapper">
      <div className="playlist-title">
        <h4>{t.latestVideoNews}</h4>
      </div>
      <div id="rypp-demo-1" className="RYPP r16-9" data-rypp="da4e5dd6">
        <div>
          <div className="RYPP-playlist">
            <header>
              <h2 className="_h1 RYPP-title">{t.playlist}</h2>
              <p className="RYPP-desc">
                {t.videoNews} <a href="#" target="_blank">#Video</a>
              </p>
            </header>
            <div className="RYPP-items">
              <ol>
                {displayVideos.map((video, index) => (
                  <li
                    key={`thumbnail-${index}`}
                    data-video-id={video.id}
                    className={selectedVideo === index ? 'selected' : ''}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <p className={`title ${locale === 'bn' ? 'title-bn' : ''}`}>
                      {video.title}
                      <small className="author">
                        <br />
                        {video.author}
                      </small>
                    </p>
                    <img
                      src={video.thumbnailUrl}
                      className="thumb"
                      alt={`Thumbnail ${index + 1}`}
                      onError={(e) => e.target.src = '/default.jpg'}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="RYPP-video">
          <div ref={playerContainerRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }} />
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;