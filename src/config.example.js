export default function() {
    return { 
        customPlaylistTitle: 'Mi Playlist',
        customPlaylistDescription: 'Generada con recomendaciones según mi perfil.',
        clientId: '', // Your client id
        clientSecret: '', // Your secret
        redirectUri: 'http://localhost:3000/callback', // Your redirect uri
        // Scopes: https://developer.spotify.com/web-api/using-scopes/
        scopes: [
            'user-read-email',
            'user-library-read',
            'user-read-recently-played'
        ]
    }
}