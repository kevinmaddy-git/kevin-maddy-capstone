import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Video Page</h2>
      <div className="videos">
        {videos.map(video => (
          <div key={video.id} className="video">
            <h3>{video.title}</h3>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.description}
              frameBorder={0}
              allowFullScreen
            ></iframe>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
