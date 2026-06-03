import './StudentInfoElement.scss';

import React from 'react';

import type { profileStudentsInfo } from '../../../../../lib/interfaceHandler';
import RoomsStatus from '../../../RoomsStatusPage/RoomsStatus';


interface studInfoElemProps {
    studentInfo: profileStudentsInfo;
}

function StudentInfoElement( { studentInfo } : studInfoElemProps ) {

    const [roomInfoShown, setRoomInfoSchown] = React.useState(false);

    const toggleRoomInfoShown = () => {
        setRoomInfoSchown(!roomInfoShown);
    }

    return(
        <div>
                    
            <p onClick={toggleRoomInfoShown}>
                {studentInfo.studentName}
            </p>
            
            {roomInfoShown ? (
                studentInfo.studentProgress.map((studentRoomStatus, idx) => (
                    <RoomsStatus key={idx} roomInfo={studentRoomStatus} />
                )) 
                ) : ( null )
            }

        </div>
    );

}

export default StudentInfoElement;