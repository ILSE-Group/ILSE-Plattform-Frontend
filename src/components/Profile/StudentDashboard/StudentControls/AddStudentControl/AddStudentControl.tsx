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
        <div>
            <p>input number</p>
            <input type="text" name="" id="" />

            <p onClick={requestAddNewStudents}>
                Benutzer erstellen
            </p>

            {createdUsers  &&
                <NewStudentsList students={newUsers} />
            }
        </div>

    );

}

export default AddStudentControl;