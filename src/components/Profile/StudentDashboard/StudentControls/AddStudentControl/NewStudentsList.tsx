import './NewStudentsList.scss';

import type { createdStudentsInfo } from "../../../../../lib/interfaceHandler";


interface NewStudListProps {
    students: createdStudentsInfo | null;
}

function NewStudentsList({ students } : NewStudListProps ) {

    return (
        <div className='new-students-wrapper'>
            <div className='new-student-element'>
                <p>Benutzername:</p>
                <p>Passwort:</p>
            </div>

            {students == null ? null : (
                students.studentInfo.map((student, idx) => (
                    <div key={idx}
                        className='new-student-element'
                    >
                        <p>{student.username} </p>
                        <p>{student.tempPassword}</p>
                    </div>
                ))
            )}
        </div>
    );

}

export default NewStudentsList;