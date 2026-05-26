import './Login.scss';

import React, { useRef } from 'react';

import type { webToken } from '../../../lib/interfaceHandler';
import { sendLoginData } from '../../../lib/apiHandler';


function Login() {
    let nameRef = React.useRef<HTMLInputElement|null>(null);
    let nameInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let passwordRef = React.useRef<HTMLInputElement|null>(null);
    let passwordInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let generalInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let username: string;
    let password: string;
    let inputValid : boolean[] = [false, false];


    function checkInput() {
        // reset info text and inputValid
        if( generalInfoRef.current )
            generalInfoRef.current.textContent = "";
        inputValid = [false, false];


        // check username
        if( nameRef.current ) {
            if( nameRef.current.value.length > 0) {
                username = nameRef.current.value.trim();
                inputValid[0] = true;
                if( nameInfoRef.current )
                    nameInfoRef.current.textContent = "";
            }
            else {
                username = "";
                inputValid[0] = false;
                if( nameInfoRef.current )
                    nameInfoRef.current.textContent = "Bitte geben Sie einen Benutzernamen ein.";
            }
        }
        else {
            inputValid[0] = false;
            if( nameInfoRef.current )
                    nameInfoRef.current.textContent = "Bitte geben Sie einen Benutzernamen ein.";
        }
        
        // check password
        if( passwordRef.current ) {
            if( passwordRef.current.value.length > 0) {
                password = passwordRef.current.value.trim();
                inputValid[1] = true;
                if( passwordInfoRef.current )
                    passwordInfoRef.current.textContent = "";
            }
            else {
                password = "";
                inputValid[1] = false;
                if( passwordInfoRef.current )
                    passwordInfoRef.current.textContent = "Bitte geben Sie ein Passwort ein.";
            }
        }
        else {
            inputValid[1] = false;
            if( passwordInfoRef.current )
                    passwordInfoRef.current.textContent = "Bitte geben Sie ein Passwort ein.";
        }

        if( !inputValid.every(v => v) )
            return;


        // if not: send username and password to api
        let token : webToken|null = null;
        if( generalInfoRef.current )
            generalInfoRef.current.textContent = "Überprüfe Ihre Daten...";

        token = sendLoginData(username, password);

        if( generalInfoRef.current ) {
            if( token == null )
                generalInfoRef.current.textContent = "Ihre Benutzerdaten waren falsch. Bitte prüfen Sie ihre Eingabe und versuchen Sie es erneut";
            else
                generalInfoRef.current.textContent = "";
        }


    }


    return (
        <div className="login-container">
            <h2>Einloggen</h2>

            <div className="login-form">
                <div className="input-group">
                    <label>Benutzername</label>
                    <input type="text"
                        ref={nameRef} 
                    />
                    <p className='info-text'
                        ref={nameInfoRef}
                    ></p>
                </div>

                <div className="input-group">
                    <label>Passwort</label>
                    <input type="password"
                        ref={passwordRef} 
                    />
                    <p className='info-text'
                        ref={passwordInfoRef}
                    ></p>
                </div>

                <button className="login-btn"
                    onClick={checkInput}
                >
                    Login
                </button>

                <div className="input-group">
                    <p className='info-text'
                        ref={generalInfoRef}
                    ></p>
                </div>
            </div>
        </div>
    );
}

export default Login;