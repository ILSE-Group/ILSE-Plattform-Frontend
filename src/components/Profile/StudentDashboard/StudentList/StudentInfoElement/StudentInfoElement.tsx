import './StudentInfoElement.scss';

import React from 'react';

import type { profileStudentsInfo } from '../../../../../lib/interfaceHandler';
import RoomsStatus from '../../../RoomsStatusPage/RoomsStatus';
import StudentControlElement from './StudCtrlElement';


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
                    
            <div 
                className="student-card"
                onClick={toggleRoomInfoShown}
            >
                
            <div className="student-left">
        <div className="student-avatar">
            
        </div>

        <span className="student-name">
            {studentInfo.studentName}
        </span>
    </div>

    <button
        className="view-profile-btn"
        type="button"
    >
        Profil anzeigen
    </button>
</div>
            
            {roomInfoShown && (
    <>
        {studentInfo.studentProgress.map((studentRoomStatus, idx) => (
            <RoomsStatus
                key={idx}
                roomInfo={studentRoomStatus}
            />
        ))}


        

        <StudentControlElement studentName={studentInfo.studentName} />
    </>
)}

        </div>
    );

}

export default StudentInfoElement;