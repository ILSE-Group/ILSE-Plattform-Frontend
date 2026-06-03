import './StudentList.scss';

import StudentInfoElement from './StudentInfoElement/StudentInfoElement';
import type { profileStudentsInfo } from '../../../../lib/interfaceHandler';


// output the Rooms status for each student
interface StudListProps {
    studentsInfo: profileStudentsInfo[];
}

function StudentList( { studentsInfo } : StudListProps ) {

    return(
        <div>

            {studentsInfo.map((info, idx) => 
                <div className='student-info-wrapper'>
                    <StudentInfoElement key={idx} studentInfo={info} />
                </div>
            )}

        </div>
    );
}

export default StudentList;