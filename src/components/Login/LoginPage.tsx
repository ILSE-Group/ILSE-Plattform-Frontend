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
                        <p onClick={() => setLoginState(!isLoggingIn)}>Registrieren</p>
                    </>
                }    
                {!isLoggingIn && 
                   <>
                        <Signup />
                        <p onClick={() => setLoginState(!isLoggingIn)}>Einloggen</p>
                    </> 
                } 
            </div>
        </>
    );

}

export default LoginPage;