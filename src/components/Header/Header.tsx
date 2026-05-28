import './Header.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ROOMS_LINK_URL, PROFILE_URL, isLoggedIn, setLoginState } from '../../lib/globalVars';
import { getRoomNames } from '../../lib/dataHandler';
import { getFromSessionStorage, saveToSessionStorage } from '../../lib/sessionStorageHandler';


function AppHeader() {

    // -----------
    // NAVIGATION
    // -----------
    let roomNames: string[] = getRoomNames();
    let roomLink: string = ROOMS_LINK_URL.concat("/");
    const navigate = useNavigate();

    // -----------
    //  NAV-PAGE
    // -----------
    const [navVisible, setNavVisibility] = React.useState(false);
    function handleNavigationToggle() {
        setNavVisibility(!navVisible);
    }

    // -----------
    //    STATE
    // -----------
    let loggedIn : boolean = isLoggedIn();

    // -----------
    // THEME LOGIC
    // -----------
    const getInitialTheme = (): "light" | "dark" => {
        //get theme from session storage
        const saved = getFromSessionStorage("theme");
        if (saved === "light" || saved === "dark") {
            return saved;
        }

        //get theme from browser
        const prefersDarkMode:boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if(prefersDarkMode) {
            return "dark";
        }
        else {
            return "light";
        }

    };
    const [theme, setTheme] = React.useState<"light" | "dark">(getInitialTheme());


    React.useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);

        saveToSessionStorage("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }


    return (
        <header className='header'>
            <div className='header-container'>

                {/* MENU BUTTON */}
                <div className={`header-button header-menubtn-container ${navVisible ? 'navOpened' : 'navClosed'}`} 
                onClick={handleNavigationToggle}>
                    <span className='header-menubtn-line'></span>
                    <span className='header-menubtn-line'></span>
                    <span className='header-menubtn-line'></span>
                </div>

                {/* LOGO */}
                <div className='header-button header-homebtn-container' 
                onClick={() => navigate('/')}>
                    <img src={logo} alt="" className='header-logo'/>
                    <p className='header-homebtn-label'>ILSE</p>
                </div>

                {/* LOGIN-BUTTON */}
                <div className='header-button header-loginbtn-container'>
                {
                    loggedIn ? (
                        <p className="header-loginbtn-label highlight-btn-medium"
                            onClick={() => { setLoginState(null); }}
                        >
                            Abmelden
                        </p>
                    ) : (
                    <p className="header-loginbtn-label highlight-btn-medium"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </p>
                )}
                </div>

            </div>

            {/* NAVIGATION */}
            {navVisible && 
                <section className='navigation'>
                    <div className='navigation-container'>

                        {/* QUICK ACTIONS */}
                        <div className='nav-content-container navigation-quickactions-container'>

                            <div className="theme-switch" onClick={toggleTheme}>
                                <div className={`switch ${theme}`}>
                                    <span className="icon left">⏾</span> 
                                    <span className="icon right">☀︎</span> 
                                    <div className="thumb" />
                                </div>
                            </div>

                            <p onClick={() => navigate(PROFILE_URL)}>
                                Profil
                            </p>

                            {/* LINKS */}
                            <div className='navigation-links-container'>
                                <p onClick={() => navigate('/')}>
                                    Home
                                </p>
                                <p onClick={() => navigate('/login')}>
                                    Login
                                </p>
                                <p onClick={() => navigate('/about')}>
                                    Impressum
                                </p>
                            </div>

                        </div>

                        {/* ROOMS */}
                        <div className='nav-content-container navigation-pagelinks-container'>
                            {roomNames.map((roomName, id) => (
                                <p key={id} 
                                   onClick={() => {navigate(roomLink.concat(roomName)); setNavVisibility(false); }}>
                                    {roomName}
                                </p>
                            ))}
                        </div>

                    </div>

                    <div 
                        className='navigation-side-container' 
                        onClick={handleNavigationToggle}
                    />
                </section>
            }

        </header>
    );
}

export default AppHeader;