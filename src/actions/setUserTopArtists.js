import actionsEnum from './actionsEnum';

export default function setUserTopArtists(artists) {
    return {
        type: actionsEnum.SET_USER_TOP_ARTISTS,
        payload: artists
    }
}