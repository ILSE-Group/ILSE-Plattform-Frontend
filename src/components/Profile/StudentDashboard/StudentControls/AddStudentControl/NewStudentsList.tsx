import './NewStudentsList.scss';

import type { createdStudentsInfo } from "../../../../../lib/interfaceHandler";


interface NewStudListProps {
    students: createdStudentsInfo | null;
}

function NewStudentsList({ students } : NewStudListProps ) {

    return (
        <div>
            {students == null ? null : (
                students.studentInfo.map((student, idx) => (
                    <div key={idx}>
                        <p>Benutzername: {student.username}</p>
                        <p>Temporäres Passwort: {student.tempPassword}</p>
                    </div>
                ))
            )}
        </div>
    );

}

export default NewStudentsList;