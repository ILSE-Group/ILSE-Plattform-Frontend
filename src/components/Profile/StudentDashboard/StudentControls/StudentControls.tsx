import './StudentControls.scss';

import React from 'react';

import type { profileStudentsInfo } from '../../../../lib/interfaceHandler';
import StudentControlElement from './StudCtrlElement';
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
        <div>
            <p onClick={toggleAddStudents}>
                Add Students by count
            </p>
            {addStudentOpened &&
                <AddStudentControl  />
            }

            {studentsInfo.map((info, idx) => 
                <StudentControlElement key={idx} studentName={info.studentName} />
            )}

        </div>
    );

}

export default StudentControls;