import './RoomsStatus.scss';

import type { profileRoomsProgress } from '../../../lib/interfaceHandler';


// used to display lib/interfaceHandler.profileRoomsProgress
// for own status information and students status information
interface RoomsStatusProps {
    roomInfo: profileRoomsProgress;
}

function RoomsStatus( { roomInfo } : RoomsStatusProps ) {

    return(
        <div className='rooms-status-wrapper'>
            <p className='rooms-status-element'>
                {roomInfo?.roomName}
            </p>

            <div className='status-progress-bar'> {/* TODO: progress bar */}
                <div>

                </div>
            </div>

            <p className='rooms-status-element'>
                {roomInfo?.roomProgress} %
            </p>

        </div>
    )
}

export default RoomsStatus;