import './Footer.scss'

import { useNavigate } from 'react-router-dom';
import { getRoomNames } from '../../lib/dataHandler';


function AppFooter() {

    let roomNames: string[] = getRoomNames();
    const navigate = useNavigate();
    let roomUrl: string = "/room/";

    return (
        <footer className='footer'>
            <div className='footer-wrapper footer-info'>
                <p>Interactive Learning System Entertainments</p>
            </div>
            <div className='footer-wrapper footer-links'>
                {roomNames.map((roomName, id) => (
                    <p key={id} onClick={() => navigate(roomUrl.concat(roomName))}>{roomName}</p>
                ))}
            </div>
        </footer>
    );
}

export default AppFooter;