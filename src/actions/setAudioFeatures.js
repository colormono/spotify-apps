import actionsEnum from './actionsEnum';

export default function setAudioFeatures(tracks) {
    return {
        type: actionsEnum.SET_AUDIO_FEATURES,
        payload: tracks
    }
}