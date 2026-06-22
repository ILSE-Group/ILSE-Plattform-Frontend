import './AddStudentControl.scss';

import React from 'react';

import type { createdStudentsInfo } from '../../../../../lib/interfaceHandler';
import { addNewStudents } from '../../../../../lib/apiHandler';
import NewStudentsList from './NewStudentsList';


function AddStudentControl() {

    const [createdUsers, setCreatedUsers] = React.useState(false);
    const [newUsers, setNewUsers] = React.useState<createdStudentsInfo | null>(null);

    const requestAddNewStudents = () => {
        let users : createdStudentsInfo | null = addNewStudents(2);
        if( users == null)
            return; // TODO: add error message


        setNewUsers(users);
        setCreatedUsers(true);
    }

    return(
        <div className='add-student-wrapper'>
            <p>Geben Sie eine Zahl ein</p>
            <input type="text" name="" id="" />

            <p className='add-students-button'
               onClick={requestAddNewStudents}>
                Benutzer erstellen
            </p>

            {createdUsers  &&
                <NewStudentsList students={newUsers} />
            }
        </div>

    );

}

export default AddStudentControl;