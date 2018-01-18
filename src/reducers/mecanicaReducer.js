// La lista de generos que sirven como semillas se obtiene desde:
// https://developer.spotify.com/web-api/console/get-available-genre-seeds/#complete

// La lista de generos completa puede obtenerse de: http://everynoise.com/everynoise1d.cgi?scope=all
// Deberían tener cargados al menos los 100 generos principales

// IMPORTANTE:
// - No puede haber menos de 4 series
// - Cada serie debe tener por lo menos 11 generos
// - Cada serie debe tener por lo menos 4 generos semilla

export default function() {
    return [
        {
            serie: 'Ballers',
            id: 'ballers',
            portada: 'http://miseriehbo.com/images/cover-ballers.jpg',
            detalle: 'Trabaja duro y juega más duro. Ese es tu lema de vida. Sabes que los logros se obtienen con esfuerzo y no le temes a ningún desafío. Te ofrecemos una playlist para que siempre seas una súper estrella.',
            genres: ["reggaeton","latin hip hop","reggaeton flow","tropical","latin","trap latino","pop reggaeton","latin pop","crunk","deep funk carioca","pop rap","deep dutch hip hop","gangster rap","rap","dirty south rap","southern hip hop","hip pop","hip hop","g funk","west coast rap","trap music","trap francais","german hip hop","dwn trap","detroit hip hop","r&b","hardcore hip hop","new jack swing","east coast hip hop","dance pop","k-pop","urban contemporary","cumbia pop"],
            genresSeeds: ["groove","hip-hop","reggaeton","trip-hop"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Big Little Lies',
            id: 'bigLittleLies',
            portada: 'http://miseriehbo.com/images/cover-bigLittleLies.jpg',
            detalle: 'Eres perfeccionista y te gusta ser el mejor en cualquier cosa que hagas. Pero no seas duro contigo mismo porque nada es perfecto. Disfruta esta playlist, casi perfecta, exclusiva para gustos exigentes.',
            genres: ["urban contemporary","disco","quiet storm","classic funk rock","funk","motown","soul","memphis soul","southern soul","funk rock","urban contemporary","new jack swing","soul blues","soft rock","mellow gold","adult standards","new wave pop","brill building pop","neo soul","new romantic","dance rock","jazz blues","pagode","argentine rock","boy band","cantautor","blues-rock","italian arena pop","classic rock","rock en espanol","swedish pop","roots rock","latin pop"],
            genresSeeds: ["gospel","blues","piano","jazz"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Game of Thrones',
            id: 'gameOfThrones',
            portada: 'http://miseriehbo.com/images/cover-gameOfThrones.jpg',
            detalle: 'Tu música dice que tienes lo que se necesita para sentarte en el Trono de Hierro. Pero recuerda que en este juego ganas o mueres. Disfruta la playlist exclusiva de canciones de hielo y fuego.',
            genres: ["rock","argentine rock","album rock","classic rock","soft rock","southern rock","hard rock","british blues","psychedelic rock","mellow gold","blues-rock","alternative rock","folk rock","singer-songwriter","roots rock","glam metal","post-grunge","art rock","metal","alternative metal","funk rock","protopunk","pop rock","permanent wave","dance rock","electric blues","new wave","country rock","classic funk rock","garage rock","nu metal","new wave pop","modern rock","folk","indie rock","new romantic","rap rock","groove metal","rap metal","britpop","modern blues","punk","brill building pop","neo-psychedelic","synthpop","piano rock","argentine rock","canadian pop","lo-fi","rock en espanol"],
            genresSeeds: ["goth","hard-rock","psych-rock","punk","rock","black-metal","death-metal"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Girls',
            id: 'girls',
            portada: 'http://miseriehbo.com/images/cover-girls.jpg',
            detalle: 'Eres joven y te gusta vivir nuevas experiencias, pero las cosas no siempre salen como las planeas. Esta playlist exclusiva te ayudará a descubrir quién eres y qué quieres.',
            genres: ["k-pop","post-teen pop","hollywood","deep pop r&b","viral pop","dance pop","pop","indiecoustica","talent show","latin arena pop","acoustic pop","indie anthem-folk","boy band","canadian pop","neo mellow","indie poptimism","latin pop","worship","ccm","neo soul","new jack swing","christian music","vegas indie","deep indie r&b","indie r&b","deep german pop rock","swedish idol pop","folk-pop","vapor soul"],
            genresSeeds: ["acoustic","cantopop","happy","reggae","road-trip"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Insecure',
            id: 'insecure',
            portada: 'http://miseriehbo.com/images/cover-insecure.jpg',
            detalle: 'Todos tenemos algún tipo de inseguridad, lo importante es poder superarla. Te ofrecemos una playlist exclusiva para que disfrutes mientras te dedicas a enfrentar cada uno de tus miedos.',
            genres: ["pop","post-teen pop","dance pop","teen pop","viral pop","r&b","neo mellow","tropical house","pop rap","pop rock","urban contemporary","europop","hip pop","indie poptimism","indie r&b","deep pop r&b","metropopolis","edm","indietronica","neo soul","modern rock","folk-pop","southern hip hop","synthpop","rap","escape room","talent show","indie pop","acoustic pop","deep german pop rock"],
            genresSeeds: ["bossanova","new-age","romance","sad","rainy-day"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Silicon Valley',
            id: 'siliconValley',
            portada: 'http://miseriehbo.com/images/cover-siliconValley.jpg',
            detalle: 'Eres amante de la tecnología y tu música lo refleja. Pero estás navegando un mundo donde el éxito pesa más que un gigabyte. Deja que esta playlist te ayude a programar tu plan de acción.',
            genres: ["indie rock","modern rock","neo-psychedelic","alternative rock","indie pop","lo-fi","britpop","noise pop","chamber pop","freak folk","garage rock","dance-punk","indie folk","indietronica","stomp and holler","folk-pop","new rave","alternative dance","permanent wave","shimmer pop","chillwave","singer-songwriter","new wave"],
            genresSeeds: ["emo","british","honky-tonk","indie","indie-pop","party"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'The Deuce',
            id: 'theDeuce',
            portada: 'http://miseriehbo.com/images/cover-theDeuce.jpg',
            detalle: 'Te gustan los riesgos y te atraen las aventuras. Las reglas se hicieron para romperlas. No crees en los límites y la pasión define tus acciones. Te ofrecemos una playlist para que mantengas tu espíritu irreverente. ',
            genres: ["focus","compositional ambient","soundtrack","hollywood","vocal jazz","adult standards","freak folk","jazz blues","chamber pop","indie folk","mpb","folk-pop","stomp and holler","folk","lo-fi","indie anthem-folk","soul","art rock","new americana","electric blues","singer-songwriter","psychedelic rock","neo-psychedelic","noise pop","roots rock","indie pop","modern blues","chillwave","blues-rock","brill building pop","country rock","soul blues"],
            genresSeeds: ["disco","funk","chicago-house","soul"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        },
        {
            serie: 'Westworld',
            id: 'westworld',
            portada: 'http://miseriehbo.com/images/cover-westworld.jpg',
            detalle: 'Deseas un mundo sin reglas, donde todas tus fantasías se hagan realidad. Pon a volar tu imaginación con esta playlist. Pero nunca olvides que la mente es un laberinto en el que te puedes perder con facilidad.',
            genres: ["tropical house","edm","deep tropical house","deep pop edm","electro house","house","big room","progressive electro house","pop","progressive house","deep big room","deep groove house","indie poptimism","electronic trap","dance pop","vapor soul","post-teen pop","brostep","deep indie r&b","moombahton","bass trap","alternative dance","new rave","k-pop","europop","synthpop","electronic","deep dutch hip hop","indietronica","escape room"],
            genresSeeds: ["dubstep","drum-and-bass","deep-house","detroit-techno","club","house","minimal-techno","post-dubstep","techno","trance"],
            features: {
                acusticness: [0.5, 0.6],
                danceability: [0.5, 0.6],
                energy: [0.5, 0.6],
                instrumentalness: [0.5, 0.6],
                liveness: [0.5, 0.6],
                loudness: [0.5, 0.6],
                tempo: [0.5, 0.6],
                valence: [0.5, 0.6]
            }
        }
    ]
}