
"use client"
import React, { useState } from 'react';

const YoutubeVideo = () => {
  const initialVideos = [
    {
      id: 'rqJDO3TWnac',
      thumbnailUrl: 'https://i.ytimg.com/vi/rqJDO3TWnac/default.jpg',
      title: 'The Drive - 12 Hours - 4K Ultra HD 60fps',
      author: 'VISUALDON',
    },
    {
      id: '3WWlhPmqXQI',
      thumbnailUrl: 'https://i.ytimg.com/vi/3WWlhPmqXQI/default.jpg',
      title: 'The Drive - 12 Hours - 4K Ultra HD 60fps',
      author: 'VISUALDON',
    },
    {
      id: 'kssD4L2NBw0',
      thumbnailUrl: 'https://i.ytimg.com/vi/kssD4L2NBw0/default.jpg',
      title: 'The Drive - 12 Hours - 4K Ultra HD 60fps',
      author: 'VISUALDON',
    },
    {
      id: 'YcwrRA2BIlw',
      thumbnailUrl: 'https://i.ytimg.com/vi/YcwrRA2BIlw/default.jpg',
      title: 'The Drive - 12 Hours - 4K Ultra HD 60fps',
      author: 'VISUALDON',
    },
    {
      id: 'HMpmI2F2cMs',
      thumbnailUrl: 'https://i.ytimg.com/vi/HMpmI2F2cMs/default.jpg',
      title: 'The Drive - 12 Hours - 4K Ultra HD 60fps',
      author: 'VISUALDON',
    },
    // Add more video objects here...
  ];

  const [selectedVideo, setSelectedVideo] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedVideo(index);
  };
  return (
    <div className="youtube-wrapper">
      <div className="playlist-title">
        <h4>Latest Video News</h4>
      </div>
      <div id="rypp-demo-1" className="RYPP r16-9" data-rypp="da4e5dd6">
        <div>
          <div className="RYPP-playlist">
            <header>
              <h2 className="_h1 RYPP-title">Playlist title</h2>
              <p className="RYPP-desc">
                Playlist subtitle <a href="#" target="_blank">#hashtag</a>
              </p>
            </header>
            <div className="RYPP-items">
              <ol>
                {initialVideos.map((video, index) => (
                  <li
                    key={`thumbnail-${index}`}
                    data-video-id={video.id}
                    className={selectedVideo === index ? 'selected' : ''}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <p className="title">
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
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="RYPP-video">
          {initialVideos.map((video, index) => (
            <iframe
              key={`RYPP-vp-da4e5dd6-${index}`}
              className="RYPP-video-player"
              style={{ display: index === selectedVideo ? 'block' : 'none' }}
              id={`RYPP-vp-da4e5dd6-${index}`}
              name={`RYPP-vp-da4e5dd6-${index}`}
              frameBorder="0"
              allowFullScreen
              title="YouTube Video Player"
              width="640"
              height="360"
              src={`https://www.youtube.com/embed/${video.id}`}
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideo;