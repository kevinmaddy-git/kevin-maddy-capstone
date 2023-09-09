import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './video.scss'; // Import the CSS styles for this component

const VideoPage = () => {
  // State to store the fetched videos
  const [videos, setVideos] = useState([]);

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8090/video')
      .then(response => {
        // Set the fetched video data to the 'videos' state
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once (on mount)

  return (
    <div className='video'>
      <div className="video-videos">
        {/* Map through the 'videos' array to render each video */}
        {videos.map(video => (
          <div key={video.id} className="video-item">
            {/* Display the video title */}
            <h3 className="video-item-title">{video.title}</h3>
            {/* Embed the video using an iframe */}
            <iframe
              className="video-item-iframe"
              width="600"
              height="300"
              src={video.url}
              title={video.description}
              frameBorder={0}
              allowFullScreen
            ></iframe>
            {/* Display the video description */}
            <p className="video-item-description">{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage; // Export the VideoPage component

