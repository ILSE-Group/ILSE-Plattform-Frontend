import './StudentDashboard.scss';

import StudentControls from "./StudentControls/StudentControls";
import StudentList from "./StudentList/StudentList";
import type { profileStudentsInfo } from '../../../lib/interfaceHandler';


// StudentControls: used to add/delete/passwordReset student accounts
// StudentList: see student progress through RoomsStatus components
interface StudDashProps {
    studentsInfo: profileStudentsInfo[] | null;
}

function StudentDashboard( { studentsInfo } : StudDashProps ) {

    return(
        <section>

            { studentsInfo == null ? null :
                <>
                    <StudentControls studentsInfo={studentsInfo} />
                    
                    <StudentList studentsInfo={studentsInfo} />
                </>  
            }

        </section>
    );
}

export default StudentDashboard;