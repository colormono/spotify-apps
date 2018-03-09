// Environment
let backendHost;
const hostname = window && window.location && window.location.hostname;
if (hostname === 'dominio.com') {
  backendHost = 'https://dominio.com';
} else if (hostname === 'socialsnacksandbox.com') {
  backendHost = 'https://socialsnacksandbox.com/spotify-test';
} else if (/^qa/.test(hostname)) {
  backendHost = `https://${hostname}`;
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:3000';
}
export const APP_ROOT = `${backendHost}`;

// Spotify 
// Scopes: https://developer.spotify.com/web-api/using-scopes/
export const SPOTIFY_CLIENT_ID = ''; // Your client id
export const SPOTIFY_REDIRECT_URI = `${backendHost}/callback`; // Your redirect uri
export const SPOTIFY_SCOPES = [
  'user-read-private',
  'user-read-birthdate',
  'user-read-email',
  'user-library-read',
  'user-top-read',
  'user-read-recently-played',
  'playlist-modify-public',
  'playlist-modify-private',
  'ugc-image-upload'
];
