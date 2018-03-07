export default function () {
  return {
    clientId: '', // Your client id
    clientSecret: '', // Your secret
    baseUri: 'http://localhost:3000', // Your redirect uri
    redirectUri: 'http://localhost:3000/callback', // Your redirect uri

    // Scopes: https://developer.spotify.com/web-api/using-scopes/
    scopes: [
      'user-read-private',
      'user-read-birthdate',
      'user-read-email',
      'user-library-read',
      'user-top-read',
      'user-read-recently-played',
      'playlist-modify-public',
      'playlist-modify-private',
      'ugc-image-upload'
    ]
  }
}