import './AlertBox.scss';

import { useRef } from 'react';
import { sanitizeString } from '../../lib/stringHandler';


interface AlertBoxProps {
    onClose: (result: string) => void;
}

function PasswordAlertBox( { onClose} : AlertBoxProps) {

    let passwordInputRef = useRef<HTMLInputElement>(null);
    let errorMessageRef = useRef<HTMLParagraphElement>(null);
    
    const handlePasswordChange = () => {
        let password : string;

        if( passwordInputRef.current )
            password = passwordInputRef.current.value;
        else {
            setError();
            return;
        }
            
        let sanitizedPassword : string = sanitizeString(password);
        
        if(sanitizedPassword.length <= 0) {
            setError();
            return;
        }

        onClose(sanitizedPassword);
    }

    const closeAlert = () => {
        onClose('');
    }

    const setError = () => {
        if( errorMessageRef.current )
            errorMessageRef.current.innerText = "Beim Setzen ihres neuen Passworts ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
    }


    return (
        <section className="alert-wrapper">

            <div className='alert-box-wrapper'>
                <p className='alert-header'>
                    Bitte geben Sie ihr neues Passwort ein.
                </p>

                <input className='password-input'
                    type="text"
                    ref={passwordInputRef}
                />

                <p className='error-message'
                    ref={errorMessageRef}
                />

                <div className='options-wrapper'>
                    <p className='options-button'
                       onClick={() => handlePasswordChange()}>
                        Bestätigen
                    </p>
                    <p className='options-button'
                       onClick={() => closeAlert()}>
                        Abbrechen
                    </p>
                </div>
    
            </div>

        </section>
    )
}

export default PasswordAlertBox;