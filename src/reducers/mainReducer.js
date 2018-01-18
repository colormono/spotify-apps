import actionsEnum from '../actions/actionsEnum';

class mainState {
    constructor() {
        this.isLogin = false; // Estado del login
        this.accessToken = ''; // Token de acceso

        this.user = {}; // Datos del usuario
        this.userPlaylists = {}; // Sus playlists
        this.userTopArtists = {}; // Sus artistas favoritos
        this.userTopTracks = {}; // Sus canciones favoritas
        this.audioFeatures = {}; // Características de las canciones

        this.userScore = {}; // Puntos 

        this.recommendations = {};
        this.customPlaylist = {};
    }
}

const mainReducer = (state= new mainState(), action) => {
    
    switch (action.type) {
        case actionsEnum.SET_ACCESS_TOKEN:
        return handleSetAccessToken(state, action);

        case actionsEnum.SET_USER_LOGIN:
        return handleSetUserLogin(state, action);
        
        case actionsEnum.SET_USER_INFO:
        return handleSetUserInfo(state, action);
        
        case actionsEnum.SET_USER_PLAYLISTS:
        return handleSetUserPlaylists(state, action);
        
        case actionsEnum.SET_USER_TOP_ARTISTS:
        return handleSetUserTopArtists(state, action);
        
        case actionsEnum.SET_USER_TOP_TRACKS:
        return handleSetUserTopTracks(state, action);
        
        case actionsEnum.SET_AUDIO_FEATURES:
        return handleSetAudioFeatures(state, action);

        case actionsEnum.SET_RECOMMEDATIONS:
        return handleSetRecommendations(state, action);
        
        case actionsEnum.SET_CUSTOM_PLAYLIST:
        return handleSetCustomPlaylist(state, action);
        
        case actionsEnum.SET_USER_SCORE:
        return handleSetUserScore(state, action);
        
        default:
        return state;
    }
}

const handleSetAccessToken = (state, action)=> {
    return {
        ...state,
        accessToken: action.payload
    }
}

const handleSetUserLogin = (state, action)=> {
    if( action.payload ){
        return {
            ...state,
            isLogin: action.payload
        }
    } else {
        return {
            state: undefined,
            isLogin: action.payload
        }
    }
}

const handleSetUserInfo = (state, action) => {
    return{
        ...state,
        user: action.payload
    }
}

const handleSetUserPlaylists = (state, action) => {
    return{
        ...state,
        userPlaylists: action.payload
    }
}

const handleSetUserTopArtists = (state, action) => {
    return{
        ...state,
        userTopArtists: action.payload
    }
}

const handleSetUserTopTracks = (state, action) => {
    return{
        ...state,
        userTopTracks: action.payload
    }
}

const handleSetAudioFeatures = (state, action) => {
    return {
        ...state,
        audioFeatures: action.payload
    }
}

const handleSetRecommendations = (state, action) => {
    return {
        ...state,
        recommendations: action.payload
    }
}

const handleSetCustomPlaylist = (state, action) => {
    return {
        ...state,
        customPlaylist: action.payload
    }
}

const handleSetUserScore = (state, action) => {
    return {
        ...state,
        userScore: action.payload
    }
}

export default mainReducer;