import './Signup.scss';

import React from 'react';

import { sendSignupData } from '../../../lib/apiHandler';


interface signupProps {
    setLogin: () => void;
}

function Signup( { setLogin } : signupProps ) {
    let nameRef = React.useRef<HTMLInputElement|null>(null);
    let nameInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let passRef = React.useRef<HTMLInputElement|null>(null);
    let passInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let validatePassRef = React.useRef<HTMLInputElement|null>(null);
    let passValidInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let generalInfoRef = React.useRef<HTMLParagraphElement|null>(null);

    let username : string = "";
    let password : string = "";
    let inputValid : boolean[] = [false, false, false];


    function validateInput() : boolean {
        // reset info text and inputValid
        if( generalInfoRef.current )
            generalInfoRef.current.textContent = "";
        inputValid = [false, false, false];
        
        
        // check username input
        if( nameRef.current ) {
            if( nameRef.current.value.trim().length > 0) {
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
                
        // check password input
        if( passRef.current ) {
            if( passRef.current.value.trim().length > 0) {
                password = passRef.current.value.trim();
                inputValid[1] = true;
                if( passInfoRef.current )
                    passInfoRef.current.textContent = "";
            }
            else {
                password = "";
                inputValid[1] = false;
                if( passInfoRef.current )
                    passInfoRef.current.textContent = "Bitte geben Sie ein Passwort ein.";
            }
        }
        else {
            inputValid[1] = false;
            if( passInfoRef.current )
                passInfoRef.current.textContent = "Bitte geben Sie ein Passwort ein.";
        }

        // check verify password input
        if( validatePassRef.current ) {
            if( validatePassRef.current.value.trim().length > 0) {
                if( password != validatePassRef.current.value ) {
                    if( passValidInfoRef.current )
                        passValidInfoRef.current.textContent = "Ihre Passwörter stimmen nicht überein.";
                    return false;
                }
                inputValid[2] = true;
                if( passValidInfoRef.current )
                    passValidInfoRef.current.textContent = "";
            }
            else {
                password = "";
                inputValid[2] = false;
                if( passValidInfoRef.current )
                    passValidInfoRef.current.textContent = "Bitte geben Sie ihr Passwort erneut ein.";
            }
        }
        else {
            inputValid[2] = false;
            if( passValidInfoRef.current )
                passValidInfoRef.current.textContent = "Bitte geben Sie ihr ein Passwort erneut ein.";
        }

        
        if( !inputValid.every(v => v) )
            return false;
        
        
        // if not: send username and password to api
        // and save result in lib/globalVars/loginToken
        if( generalInfoRef.current )
            generalInfoRef.current.textContent = "Überprüfe Ihre Daten...";
        
        let singupErrMsg : string = sendSignupData(username, password);
        singupErrMsg = singupErrMsg.trim();
        
        // login not successful: 
        if( singupErrMsg.length > 0 ) {
            if( generalInfoRef.current )
                generalInfoRef.current.textContent = singupErrMsg;
            return false;
        }
        // login successful: 
        else {
            if( generalInfoRef.current )
                generalInfoRef.current.textContent = "";
            return true;
        }
    }

    function performSignup() {
        if( !validateInput() )
            return;

        if( generalInfoRef.current )
            generalInfoRef.current.textContent = "Ihre Registrierung war erfolgreich. Bitte loggen Sie sich ein.";

        setLogin();

        if( nameRef.current )
            nameRef.current.value = "";
        if( passRef.current )
            passRef.current.value = "";
        if( validatePassRef.current )
            validatePassRef.current.value = "";

    }


    return(
        <div className="signup-container">
            <h2>Registrieren</h2>
            
            <div className="signup-form">
                <div className="input-group" >
                    <label>Benutzername</label>
                    <input type="text"
                        ref={nameRef} 
                    />
                    <p className='info-text'
                        ref={nameInfoRef}
                    ></p>
                </div>

                <div className="input-group" >
                    <label>Passwort</label>
                    <input type="text"
                        ref={passRef}
                    />
                    <p className='info-text'
                        ref={passInfoRef}
                    ></p>
                </div>

                <div className="input-group" >
                    <label>Passwort bestätigen</label>
                    <input type="text"
                     ref={validatePassRef} 
                    />
                    <p className='info-text'
                        ref={passValidInfoRef}
                    ></p>
                </div>

                <button className="signup-btn"
                    onClick={performSignup}
                >
                    Registrieren
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

export default Signup;