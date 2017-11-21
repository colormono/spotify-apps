import actionsEnum from './actionsEnum';

export default function setUserTopTracks(tracks){
    return {
        type: actionsEnum.SET_USER_TOP_TRACKS,
        payload: tracks
    }
}