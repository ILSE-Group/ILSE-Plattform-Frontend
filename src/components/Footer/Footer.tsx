import './Footer.scss'

import { getRoomNames } from '../../lib/dataHandler';


function AppFooter() {

    let roomNames: string[] = getRoomNames();

    return (
        <footer className='footer'>
            <div className='footer-wrapper footer-info'>
                <p>Interactive Learning System Entertainments</p>
            </div>
            <div className='footer-wrapper footer-links'>
                {roomNames.map((roomName, id) => (
                    <p key={id}>{roomName}</p>  //TODO add links with navigate()
                ))}
            </div>
        </footer>
    );
}

export default AppFooter;