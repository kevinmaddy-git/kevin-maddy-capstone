import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Front from '../../components/Front/front';
import Footer from '../../components/Footer/footer'

// Front Page component
const FrontPage = () => {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Render the Front component */}
      <Front />
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
};

export default FrontPage;
