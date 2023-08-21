import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage/frontpage';
import About from './pages/AboutPage/aboutpage';
import Video from './pages/VideoPage/videopage';
import Shop from './pages/ShopPage/shoppage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/home" element={<FrontPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
