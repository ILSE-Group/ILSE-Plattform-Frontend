import './StudentControls.scss';

import type { profileStudentsInfo } from '../../../../lib/interfaceHandler';
import StudentControlElement from './StudCtrlElement';


interface StudCtrlProps {
    studentsInfo: profileStudentsInfo[];
}

// Add/delete students (adding by number of students) or initiate student-password reset
function StudentControls( { studentsInfo } : StudCtrlProps ) {

    return(
        <div>
            <p>Add Students by count</p>

            {studentsInfo.map((info, idx) => 
                <StudentControlElement key={idx} studentName={info.studentName} />
            )}

        </div>
    );

}

export default StudentControls;