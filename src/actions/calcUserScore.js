// Analizar gustos (features de cancioes) según reglas de la mecanica
import setUserScore from './setUserScore';

export default function calcUserScore(tracks) {
    return function(dispatch, getState) {

        // Estado
        //var self = this;
        let state = getState();
        ////console.log(state.mecanica);

        // Armar arreglo de generos y ordenarlo alfabeticamente
        // Queda algo como: ["argentine rock", "cumbia pop", "rock en espanol", ...]
        let generos = [];
        if( state.main.userTopArtists.length > 5 ){
            state.main.userTopArtists.map((track, index) => {
                for(let g=0; g<track.genres.length; g++){
                    generos.push(track.genres[g]);
                }
            });
        } 
        // Si no tiene X generos, cargar X generos random
        else {
            let fakeGenres = [ "acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music"];
            for(let i=0; i<200; i++){
                let r = Math.round(Math.random() * fakeGenres.length);
                generos.push(fakeGenres[r]);
            }
        }
        // Ordenarlos
        generos.sort();
        //console.log("generos: ", generos);

        // Calcular scores en el arreglo
        // Para que quede algo como: [argentine rock: 16, cumbia pop: 13, ...]
        let scorePorGenero = [];
        let current = '';
        let currentScore = 1;
        for(let i=0; i<generos.length; i++){
            // Si es el mismo genero
            if( generos[i] === current ){
                // Incrementar score
                currentScore += 1;
            } else {
                // Guardar el score para este genero
                scorePorGenero.push([generos[i], currentScore]);
                // Reiniciar valores
                current = generos[i];
                currentScore = 1;
            }
        }
        //console.log("scorePorGenero: ", scorePorGenero);

        // Calcular score para cada serie de la mecanica
        let scorePorSerie = [];
        
        for(let s=0; s<state.mecanica.length; s++){
            let serie = state.mecanica[s];
            let serieID = state.mecanica[s].id;
            let serieScore = 0;
            
            // Para todos los generos
            for(let i=0; i<serie.genres.length; i++){
                for(var j=0; j<scorePorGenero.length; j++){
                    // Si el genero coinside, sumar puntos
                    if( serie.genres[i] === scorePorGenero[j][0] ){
                        serieScore += scorePorGenero[j][1];
                    }
                }
            }
            scorePorSerie.push([serieID, serieScore]);
        }

        // Reordenar series por score (segundo valor)
        scorePorSerie.sort(function(a,b){
            return a[1] - b[1];
        });
        scorePorSerie.reverse();
        //console.log("scorePorSerie: ", scorePorSerie);

        /**
         * Calcular porcentajes para las series destacadas
         */
        let seriesElegidas = 4;
        let scoreTotal = 0;
        let porcentajePorSerie = [];

        // Suman scores
        for(let i=0; i<seriesElegidas; i++){
            scoreTotal += scorePorSerie[i][1];
        }

        // Calcular porcentajes
        for(let i=0; i<seriesElegidas; i++){
            // % = scoreSerie * 100 / scoreTotal
            let scoreSerie = scorePorSerie[i][1];
            let porcentajeDeLaSerie =  (scoreSerie * 100) / scoreTotal;
            
            porcentajePorSerie.push({
                id: scorePorSerie[i][0],
                percent: porcentajeDeLaSerie.toFixed(2),
            });
        }

        // Actualizar estado
        dispatch(setUserScore(porcentajePorSerie));
    };
}