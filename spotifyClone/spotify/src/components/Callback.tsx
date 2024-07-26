// src/components/Callback.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      fetch('/.netlify/functions/spotify-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      })
      .then(response => response.json())
      .then(data => {
        // Save the access token in local storage or state
        localStorage.setItem('spotify_access_token', data.access_token);
        navigate('/profile');
      })
      .catch(error => console.error('Error:', error));
    }
  }, [navigate]);

  return (
    <div>
      Redirecting...
    </div>
  );
};

export default Callback;
