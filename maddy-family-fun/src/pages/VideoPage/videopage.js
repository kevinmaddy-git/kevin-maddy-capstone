import React from 'react';
import Navbar from '../../components/Navbar/navbar';
import Video from '../../components/Video/video'
import Footer from '../../components/Footer/footer';

// Video Page component
function videoPage() {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      
      {/* Render the Video component */}
      <Video />
      
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default videoPage;