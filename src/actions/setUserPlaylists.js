import actionsEnum from './actionsEnum';

export default function setUserPlaylists(playlists=null) {
    return {
        type: actionsEnum.SET_USER_PLAYLISTS,
        payload: playlists
    }
}