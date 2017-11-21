import actionsEnum from './actionsEnum';

export default function setRecommendations(tracks) {
    return {
        type: actionsEnum.SET_RECOMMEDATIONS,
        payload: tracks
    }
}