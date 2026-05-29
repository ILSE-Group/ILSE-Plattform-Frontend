import React from 'react';

import './LoginPage.scss'

import Header from '../Header/Header';
import Login from './Login/Login';
import Signup from './Signup/Signup';


function LoginPage() {
    const [isLoggingIn, setLoginState] = React.useState(true);
    const [registrationSucessful, setRegSuccessful] = React.useState(false);
    
    const setToLogin = () => {
        setRegSuccessful(true);
        setLoginState(true);
    }
    
    return (
        <>
            <Header />

            <div className='login-page-wrapper'>

                {isLoggingIn ? ( 
                    <>
                        <Login registrSuccess={registrationSucessful} />

                        <div className='login-change-method-wrapper'
                         onClick={() => setLoginState(!isLoggingIn)}>
                            <p>Sie haben noch keinen Account?</p>
                            <p>Registrieren</p>
                        </div>

                    </>
                ) : (
                   <>
                        <Signup setLogin={setToLogin} />

                        <div className='login-change-method-wrapper'
                         onClick={() => setLoginState(!isLoggingIn)}>
                            <p>Sie haben bereits einen Account?</p>
                            <p>Einloggen</p>
                        </div>
                    </> 
                )}

            </div>
        </>
    );

}

export default LoginPage;