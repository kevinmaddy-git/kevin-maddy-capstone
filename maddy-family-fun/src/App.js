import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage/frontpage';
import AboutPage from './pages/AboutPage/aboutpage';
import VideoPage from './pages/VideoPage/videopage';
import ShopPage from './pages/ShopPage/shoppage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the "Home" page */}
          <Route path="/home" element={<FrontPage />} />

          {/* Route for the "About" page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Route for the "Video" page */}
          <Route path="/video" element={<VideoPage />} />

          {/* Route for the "Shop" page */}
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

