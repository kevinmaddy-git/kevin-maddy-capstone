import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Front/front.scss'; // Import the corresponding CSS styles

// Define the Front functional component
const Front = () => {
  // Initialize state for home data using the useState hook
  const [homeData, setHomeData] = useState(null);

  // Fetch home data from the server when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:8090/home/1')
      .then(response => {
        // Set the home data retrieved from the server
        setHomeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching home data:', error);
      });
  }, []);

  return (
    <div className="front-container"> {/* Create a container with a "front-container" class */}
      {homeData ? ( // Check if homeData is available
        <div className="home-data"> {/* Create a container with a "home-data" class */}
          <h1 className="title">{homeData.title}</h1> {/* Display the title */}
          <img className="image" src={homeData.image} alt={homeData.title} /> {/* Display the image */}
          <p className="description">{homeData.description}</p> {/* Display the description */}
        </div>
      ) : (
        <p>Loading home data...</p>
      )}
    </div>
  );
};

export default Front; // Export the Front component for use in other parts of your application
