import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'

// About Page component
function aboutPage() {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Render the About component */}
      <About />
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default aboutPage;
