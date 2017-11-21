import actionsEnum from './actionsEnum';

export function setAccessToken(token) {
    return {
        type: actionsEnum.SET_ACCESS_TOKEN,
        payload: token
    };
}

export function setUserLogin(status) {
    return {
        type: actionsEnum.SET_USER_LOGIN,
        payload: status
    };
}