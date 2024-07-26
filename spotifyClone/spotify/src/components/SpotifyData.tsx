// src/components/SpotifyData.tsx
import React, { useEffect, useState } from 'react';

interface UserData {
  display_name: string;
  images: { url: string }[];
}

const SpotifyData: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('spotify_access_token');

    if (accessToken) {
      fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error:', error));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.display_name}</h1>
      <img src={userData.images[0].url} alt="User Avatar" />
    </div>
  );
};

export default SpotifyData;
