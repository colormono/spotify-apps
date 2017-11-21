import actionsEnum from './actionsEnum';

export default function setCustomPlaylist(playlist=null) {
    return {
        type: actionsEnum.SET_CUSTOM_PLAYLIST,
        payload: playlist
    }
}