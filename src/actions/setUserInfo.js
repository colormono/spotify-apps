import actionsEnum from './actionsEnum';

export default function setUserInfo(user) {
    return {
        type: actionsEnum.SET_USER_INFO,
        payload: user
    }
}