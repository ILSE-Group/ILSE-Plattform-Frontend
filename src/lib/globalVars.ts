import { sendLogoutSignal } from "./apiHandler";
import type { webToken } from "./interfaceHandler";
import { getFromSessionStorage, saveToSessionStorage } from "./sessionStorageHandler";


export const ROOMS_LINK_URL : string = '/rooms';
export const PROFILE_URL : string = '/profile';

export const API_URL : string = 'our.api.com/';

const loginTokenKey : string = 'loginToken';

// TODO
export const isLoggedIn = () => {
    let tokenString : string = getFromSessionStorage(loginTokenKey);
    if( tokenString.trim().length <= 0 ) 
        return false

    let token : webToken = JSON.parse(getFromSessionStorage(loginTokenKey));
    if( token == null || typeof token == 'undefined' )
        return false;

    // check date and logout, if logged in longer than one day
    if( (Date.now()-token?.date) > 86400000 ) {
        setLoginState(null);
        return false;
    }

    return true;
}

/**
 * saves the api recieved jwt to session storage 
 * sends logout singal to api when token is null and clears token
 * @param token 
 */
export const setLoginState = (token : webToken|null) => {
    // if token is null
    // set logout signal to api to remove cookie
    if( token == null ) {
        sendLogoutSignal();
        sessionStorage.removeItem(loginTokenKey);
        return;
    }
        
    saveToSessionStorage( loginTokenKey, JSON.stringify(token) );
}