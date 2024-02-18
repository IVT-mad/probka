import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use the navigate function to go back to the main page
    navigate('/');
  };

  return (
    <div>
      <h2>About Page</h2>
      {/* Other content of the About Page */}
      <button onClick={handleGoBack}>Go Back to Main Page</button>
    </div>
  );
};

export default AboutPage;