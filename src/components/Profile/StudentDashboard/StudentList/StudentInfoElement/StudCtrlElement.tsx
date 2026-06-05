import './StudCtrlElement.scss';

import React from 'react';

import { manageStudentAcc } from '../../../../../lib/apiHandler';


interface StudCtrlElemProps {
    studentName: string;
}
function StudentControlElement( { studentName } : StudCtrlElemProps ) {

    const [newTempPass, setNewTempPass] = React.useState('');

    const requestDelete = () => {
        manageStudentAcc("delete", studentName);
    }
    const requestPassReset = () => {
        setNewTempPass(manageStudentAcc("passReset", studentName));
    }

    return (
        <div className='student-control-wrapper'>

            <p onClick={requestDelete}>
                Delete
            </p>

            <p onClick={requestPassReset}>
                PasswordReset
            </p>

            {newTempPass.length > 0 ? (
                <p>Neues Passwort: {newTempPass}</p>
            ) : ( null ) }

        </div>
    );

}

export default StudentControlElement;