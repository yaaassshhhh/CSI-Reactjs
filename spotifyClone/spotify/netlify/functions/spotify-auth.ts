// netlify/functions/spotify-auth.ts
import axios from 'axios';
import querystring from 'querystring';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID as string;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET as string;
const REDIRECT_URI = 'http://localhost:3000/callback';

exports.handler = async (event: any, context: any) => {
  const { code } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch access token' })
    };
  }
};
