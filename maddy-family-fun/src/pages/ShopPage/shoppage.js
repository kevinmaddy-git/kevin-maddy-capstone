import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Shop from '../../components/Shop/shop'
import Footer from '../../components/Footer/footer'

// Shop Page component
function shopPage() {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Render the Shop component */}
      <Shop />
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default shopPage;
