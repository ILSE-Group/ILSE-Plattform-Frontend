import './RoomsStatus.scss';

import React from 'react';

import type { profileRoomsProgress } from '../../../lib/interfaceHandler';


// used to display lib/interfaceHandler.profileRoomsProgress
// for own status information and students status information
interface RoomsStatusProps {
    roomInfo: profileRoomsProgress;
}

function RoomsStatus( { roomInfo } : RoomsStatusProps ) {

    let progBarFillRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if( !Number.isInteger(roomInfo.roomProgress) || roomInfo.roomProgress > 100 || roomInfo.roomProgress < 0 )
            return;

        if( progBarFillRef.current )
            progBarFillRef.current.style.width = roomInfo.roomProgress.toString().concat("%");
        
    }, [roomInfo.roomProgress]);

    return(
        <div className='rooms-status-wrapper'>
            <p className='rooms-status-element'>
                {roomInfo?.roomName}
            </p>

            <div className='status-progress-bar'> {/* TODO: progress bar */}
                <div className='status-progressbar-fill'
                    ref={progBarFillRef}
                ></div>
            </div>

            <p className='rooms-status-element'>
                {roomInfo?.roomProgress} %
            </p>

        </div>
    )
}

export default RoomsStatus;