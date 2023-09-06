import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './video.scss';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8090/video')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  return (
    <div className='video'>
      <div className="video-videos">
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <h3 className="video-item-title">{video.title}</h3>
            <iframe
              className="video-item-iframe"
              width="600"
              height="300"
              src={video.url}
              title={video.description}
              frameBorder={0}
              allowFullScreen
            ></iframe>
            <p className="video-item-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
