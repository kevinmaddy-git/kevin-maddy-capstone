import React from 'react';
import "../Footer/footer.scss" // Import the corresponding CSS styles

// Define the Footer functional component
const Footer = () => {
  return (
    <footer className="footer"> {/* Create a footer element with a "footer" class */}
      <div className="footer-content"> {/* Create a div with a "footer-content" class */}
        <p>&copy; 2023 Maddy Family Fun</p> {/* Display the copyright text */}
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component for use in other parts of your application

