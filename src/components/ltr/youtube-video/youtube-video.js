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
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
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
    // Clear inner HTML so YT.Player gets a fresh div
    playerContainerRef.current.innerHTML = '';
    const div = document.createElement('div');
    playerContainerRef.current.appendChild(div);
    playerRef.current = new window.YT.Player(div, {
      videoId,
      playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: (e) => {
          e.target.setVolume(volume);
          if (isMuted) e.target.mute();
        },
      },
    });
  }, [volume, isMuted]);

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

  const handleVolumeChange = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (playerRef.current?.setVolume) {
      playerRef.current.setVolume(val);
      if (val === 0) { playerRef.current.mute(); setIsMuted(true); }
      else { playerRef.current.unMute(); setIsMuted(false); }
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(volume || 80);
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
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
          <div ref={playerContainerRef} className="RYPP-video-player-container" />
          <div className="yt-volume-bar">
            <button
              type="button"
              className="yt-mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0
                ? <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
                : volume < 50
                  ? <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>
                  : <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
              }
            </button>
            <input
              type="range"
              className="yt-volume-slider"
              min="0"
              max="100"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
            <span className="yt-volume-value">{isMuted ? 0 : volume}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;