import './Header.scss';

import React from 'react';
import { useNavigate} from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { getRoomNames } from '../../lib/dataHandler';


function AppHeader() {

    const [navVisible, setNavVisibility] = React.useState(false);
    const navigate = useNavigate();

    const roomNames: string[] = getRoomNames();   //TODO: add room name and links in Navigation 
    
    function handleNavigationToggle() {
        setNavVisibility(!navVisible);
    }

    return (
        <header className='header'>
            <div className='header-container'>
                <div className={`header-button header-menubtn-container ${navVisible ? 'clicked' : ''}`} onClick={handleNavigationToggle}>
                    <span className='header-menubtn-line'></span>
                    <span className='header-menubtn-line'></span>
                    <span className='header-menubtn-line'></span>
                </div>
                <div className='header-button header-homebtn-container' onClick={() => navigate('/')}>
                    <img src={logo} alt="" className='header-logo'/>
                    <p className='header-homebtn-label'>ILSE</p>
                </div>
                <div className='header-button header-loginbtn-container' onClick={() => navigate('/login')}>
                    <p className='header-loginbtn-label highlight-btn-medium'>Login</p>
                </div>
            </div>
        
            {navVisible === true && 
                <section className='navigation'>
                    <div className='navigation-container' >
                        <div className='nav-content-container navigation-quickactions-container'>
                            <p>GoToProfile</p>
                            <p>ToggleDark/Light</p>
                        </div>
                        <div className='nav-content-container navigation-links-container'>
                            <p onClick={() => navigate('/')}>Home</p>
                            <p onClick={() => navigate('/login')}>Login</p>
                            <p onClick={() => navigate('/about')}>Impressum</p>
                        </div>
                        <div className='nav-content-container navigation-pagelinks-container'>
                            <p>Raum 1</p>
                            <p>Raum 2</p>
                            <p>Raum 3</p>
                        </div>
                    </div>
                    <div className='navigation-side-container' onClick={handleNavigationToggle}></div>
                </section>
            }
        </header>
    );

}

export default AppHeader;