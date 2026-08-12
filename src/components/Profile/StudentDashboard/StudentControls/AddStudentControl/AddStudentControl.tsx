import './AddStudentControl.scss';

import React from 'react';

import type { createdStudentsInfo } from '../../../../../lib/interfaceHandler';
import { addNewStudents } from '../../../../../lib/apiHandler';
import NewStudentsList from './NewStudentsList';


function AddStudentControl() {

    const [newUserCount, setNewUserCount] = React.useState(1);
    const [createdUsers, setCreatedUsers] = React.useState(false);
    const [newUsers, setNewUsers] = React.useState<createdStudentsInfo | null>(null);

    const handleUserCountChange = (e : any) => {
        let newCount : number = Number(e.target.value);

        if(typeof newCount != 'number' || 
           newCount < 1 || newCount > 100) {
            setNewUserCount(1);
        }
        setNewUserCount(Number(e.target.value));
    }

    const requestAddNewStudents = () => {
        let users : createdStudentsInfo | null = addNewStudents(newUserCount);
        if( users == null)
            return; // TODO: add error message


        setNewUsers(users);
        setCreatedUsers(true);
    }

    return(
        <div className='add-student-wrapper'>
            <p>Geben Sie ein,<br/>wie viele Accounts Sie erstellen möchten.</p>
            <input 
                className='student-count-input' 
                type="number"
                value={newUserCount}
                min='1'
                max='100'
                onChange={handleUserCountChange}
            />

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