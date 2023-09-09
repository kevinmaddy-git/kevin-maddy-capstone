import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../About/about.scss';

// Define the About functional component
const About = () => {
  // Initialize state variables using the useState hook
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [peopleData, setPeopleData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Fetch initial data from the server when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:8090/about')
      .then(response => {
        // Set the people data retrieved from the server
        setPeopleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching people data:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Fetch data for the selected person when 'selectedPersonId' changes
  useEffect(() => {
    if (selectedPersonId !== null) {
      axios
        .get(`http://localhost:8090/about/${selectedPersonId}`)
        .then(response => {
          // Set the selected person's data retrieved from the server
          setSelectedPerson(response.data);
        })
        .catch(error => {
          console.error('Error fetching selected person data:', error);
        });
    } else {
      // Reset 'selectedPerson' when 'selectedPersonId' is null
      setSelectedPerson(null);
    }
  }, [selectedPersonId]); // This effect runs whenever 'selectedPersonId' changes

  // Handler function to update 'selectedPersonId' when a person is clicked
  const handlePersonClick = id => {
    setSelectedPersonId(id);
  };

  // Render the About component
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <div className="about-names">
        <ul>
          {/* Map through 'peopleData' to display a list of names */}
          {peopleData.map(person => (
            <li
              key={person.id}
              onClick={() => handlePersonClick(person.id)}
              className={`about-name ${selectedPersonId === person.id ? 'active' : ''}`}
            >
              {person.name}
            </li>
          ))}
        </ul>
      </div>
      {/* Render selected person's details if 'selectedPerson' is not null */}
      {selectedPerson && (
        <div className="selected-person" key={selectedPerson.id}>
          <h3 className="selected-person-name">{selectedPerson.name}</h3>
          <img
            className="selected-person-image"
            src={selectedPerson.image}
            alt={selectedPerson.name}
            key={selectedPerson.id}
          />
          <p className="selected-person-description">{selectedPerson.description}</p>
        </div>
      )}
    </div>
  );
};

export default About; // Export the About component