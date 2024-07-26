import axios from 'axios';
import conf from '../../src/conf/conf';
const CLIENT_ID = conf.ClientId;
const CLIENT_SECRET = conf.SecretId;
const REDIRECT_URI = 'http://localhost:5173/callback';

export const handler = async (event: any) => {
  const { code } = JSON.parse(event.body);

  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', REDIRECT_URI);
    params.append('client_id', CLIENT_ID);
    params.append('client_secret', CLIENT_SECRET);

    const response = await axios.post('https://accounts.spotify.com/api/token', params.toString(), {
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
