import './RoomsStatus.scss';

import type { profileRoomsProgress } from '../../../lib/interfaceHandler';


// used to display lib/interfaceHandler.profileRoomsProgress
// for own status information and students status information
interface RoomsStatusProps {
    roomInfo: profileRoomsProgress;
}

function RoomsStatus( { roomInfo } : RoomsStatusProps ) {

    return(
        <div>
            <p>{roomInfo?.roomName}</p>

            <div> {/* progress bar */}
                <div>

                </div>
            </div>

            <p>{roomInfo?.roomProgress} %</p>

        </div>
    )
}

export default RoomsStatus;