import React from 'react';

import './LoginPage.scss'

import Header from '../Header/Header';
import Login from './Login/Login';
import Signup from './Signup/Signup';


function LoginPage() {
    const [isLoggingIn, setLoginState] = React.useState(true);
    
    return (
        <>
            <Header />

            <div className='login-page-wrapper'>
                {isLoggingIn && 
                    <>
                        <Login />
                        <div className='login-change-method-wrapper'
                         onClick={() => setLoginState(!isLoggingIn)}>
                            <p>Sie haben noch keinen Account?</p>
                            <p>Registrieren</p>
                        </div>

                    </>
                }    
                {!isLoggingIn && 
                   <>
                        <Signup />
                        <div className='login-change-method-wrapper'
                         onClick={() => setLoginState(!isLoggingIn)}>
                            <p>Sie haben bereits einen Account?</p>
                            <p>Einloggen</p>
                        </div>
                    </> 
                } 
            </div>
        </>
    );

}

export default LoginPage;