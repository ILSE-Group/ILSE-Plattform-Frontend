import './StudentInfoElement.scss';

import React, { useEffect } from 'react';

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

    const studentIconRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if( studentIconRef.current )
            studentIconRef.current.style.backgroundColor = studentInfo.studentIcon.iconBgColorHex;
    }, [studentInfo.studentIcon.iconBgColorHex])

    return(
        <div className='students-wrapper'>
                    
            <div className="student-card"
                onClick={toggleRoomInfoShown}
            >
                
                <div className="student-left">
                    <div className="student-avatar-wrapper"
                        ref={studentIconRef}
                    >
                        <img className="student-avatar"
                            src={studentInfo.studentIcon.iconSrc} 
                            alt="" 
                        />
                    </div>

                    <span className="student-name">
                        {studentInfo.studentName}
                    </span>
                </div>

                <button className={`view-profile-btn ${roomInfoShown ? 'expanded' : ''}`}
                    type="button"
                >
                    {roomInfoShown ? "Ausblenden" : "Profil anzeigen"}
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