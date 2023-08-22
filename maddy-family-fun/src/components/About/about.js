import React, { useState, useEffect } from 'react';
import axios from 'axios';

const About = () => {
  const [selectedPersonId, setSelectedPersonId] = useState(null);
  const [peopleData, setPeopleData] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8090/about')
      .then(response => {
        setPeopleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching people data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedPersonId !== null) {
      axios.get(`http://localhost:8090/about/${selectedPersonId}`)
        .then(response => {
          setSelectedPerson(response.data);
        })
        .catch(error => {
          console.error('Error fetching selected person data:', error);
        });
    } else {
      setSelectedPerson(null);
    }
  }, [selectedPersonId]);

  const handlePersonClick = (id) => {
    setSelectedPersonId(id);
  };

  return (
    <div>
      <h2>About Us</h2>
      <div className="names">
        <ul>
          {peopleData.map(person => (
            <li key={person.id} onClick={() => handlePersonClick(person.id)}>
              {person.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedPerson && (
        <div className="selected-person">
          <h3>{selectedPerson.name}</h3>
          <p>{selectedPerson.image}</p>
          <p>{selectedPerson.description}</p>
        </div>
      )}
    </div>
  );
};

export default About;
