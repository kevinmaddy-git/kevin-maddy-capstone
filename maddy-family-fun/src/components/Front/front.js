import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Front = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8090/home/1')
      .then(response => {
        setHomeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  return (
    <div>
      {homeData ? (
        <div>
          <h1>{homeData.title}</h1>
          <p>{homeData.image}</p>
          <p>{homeData.description}</p>
        </div>
      ) : (
        <p>Loading home data...</p>
      )}
    </div>
  );
};

export default Front;
