import './Footer.scss'

import navigateToPage from '../../lib/navigationHandler';
import { getRoomNames } from '../../lib/dataHandler';
import { ROOMS_LINK_URL } from '../../lib/globalVars';


function AppFooter() {

    let roomNames: string[] = getRoomNames();
    const navigate = navigateToPage();
    let roomsLink : string = ROOMS_LINK_URL.concat("/");

    return (
        <footer className='footer'>
            <div className='footer-wrapper footer-info'>
                <p>Interactive Learning System Entertainments</p>
            </div>
            <div className='footer-wrapper footer-links'>
                {roomNames.map((roomName, id) => (
                    <p key={id} 
                       onClick={() => navigate({ pageUrl: roomsLink.concat(roomName)})}>
                        {roomName}
                    </p>
                ))}
            </div>
        </footer>
    );
}

export default AppFooter;