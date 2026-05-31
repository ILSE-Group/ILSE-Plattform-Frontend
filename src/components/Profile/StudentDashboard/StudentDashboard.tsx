import './StudentDashboard.scss';

import StudentControls from "./StudentControls/StudentControls";
import StudentList from "./StudentList/StudentList";


function StudentDashboard() {

    return(
        <section>
            <StudentControls />

            <StudentList />
        </section>
    );
}

export default StudentDashboard;