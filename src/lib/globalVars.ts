import { sendLogoutSignal } from "./apiHandler";
import type { webToken } from "./interfaceHandler";
import { getFromSessionStorage, saveToSessionStorage } from "./sessionStorageHandler";


export const HOME_URL : string = '/';
export const LOGIN_URL : string = '/login';
export const ABOUT_URL : string = '/about';
export const PROFILE_URL : string = '/profile';
export const ROOMS_LINK_URL : string = '/rooms';

export const API_URL : string = 'ilse.backend.lab:3000/';

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
 * gets the login token from session storage
 * @returns webToken if logged in, otherwise null
 */
export const getLoginToken = () : webToken|null => {
    let tokenString = getFromSessionStorage(loginTokenKey).trim();
    if( tokenString.length <= 0 )
        return null;

    return JSON.parse(tokenString);
}

/**
 * saves the api recieved jwt to session storage 
 * when token is null: sends logout singal to api and clears token
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