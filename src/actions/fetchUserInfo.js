import setUserInfo from './setUserInfo';
import { setUserLogin } from './loginActions';
import axios from 'axios';

export function fetchUserInfo() {
    
    return function(dispatch, getState) {
        
        let state = getState();
        
        axios({
            method: 'get',
            url: 'https://api.spotify.com/v1/me',
            headers: {
                'Authorization': 'Bearer ' + state.main.accessToken
            }
        }).then(
            // Login
            response => {
                dispatch(setUserInfo(response.data));
                dispatch(setUserLogin(true));
            }
        ).catch( (error) => { 
            // Logout
            dispatch(setUserLogin(false));
            console.log(error) 
        });
    };
    
}