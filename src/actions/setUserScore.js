import actionsEnum from './actionsEnum';

export default function setUserScore(score) {
    return {
        type: actionsEnum.SET_USER_SCORE,
        payload: score
    }
}