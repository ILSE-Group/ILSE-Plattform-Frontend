import './StudentControls.scss';

import React from 'react';

import type { profileStudentsInfo } from '../../../../lib/interfaceHandler';
import AddStudentControl from './AddStudentControl/AddStudentControl';


interface StudCtrlProps {
    studentsInfo: profileStudentsInfo[];
}

// Add/delete students (adding by number of students) or initiate student-password reset
function StudentControls( { studentsInfo } : StudCtrlProps ) {

    const [addStudentOpened, setAddStudentOpened] = React.useState(false);

    const toggleAddStudents = () => {
        setAddStudentOpened(!addStudentOpened);
    }

    return(
        <div className="student-controls">
            <button 
                className="add-student-btn"
                onClick={toggleAddStudents}

                > Schüler/-in hinzufügen  

                </button>

                {addStudentOpened &&
                    <AddStudentControl />
                }
                </div>
                );

}

export default StudentControls;