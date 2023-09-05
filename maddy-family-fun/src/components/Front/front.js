import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Front/front.scss';

const Front = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8090/home/1')
      .then(response => {
        setHomeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  return (
    <div className="front-container">
      {homeData ? (
        <div className="home-data">
          <h1 className="title">{homeData.title}</h1>
          <p className="image">{homeData.image}</p>
          <p className="description">{homeData.description}</p>
        </div>
      ) : (
        <p>Loading home data...</p>
      )}
    </div>
  );
};

export default Front;

