import React from "react";
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

    // check date and reset token if logged in longer than one day
    /*if( (Date.now()-token?.date) > 1 ) {
        setLoginToken(null);
        return false;
    }*/

    return true;
}

export const setLoginState = (token : webToken|null) => {
    // TODO
    //if( token == null )
        // set logout signal to backend to remove cookie
        
    saveToSessionStorage( loginTokenKey, JSON.stringify(token) );
}