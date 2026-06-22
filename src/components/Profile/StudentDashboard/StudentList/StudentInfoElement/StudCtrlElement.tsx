import './StudCtrlElement.scss';

import React from 'react';

import AlertBox from '../../../../General/AlertBox';
import { manageUserAcc } from '../../../../../lib/apiHandler';
import { UserManagementType } from '../../../../../lib/ManagementType'; 


interface StudCtrlElemProps {
    studentName: string;
}
function StudentControlElement( { studentName } : StudCtrlElemProps ) {

    const [newTempPass, setNewTempPass] = React.useState('');
    
    const [deleteAlertOpen, setDeleteAlertOpened] = React.useState(false);
    const [resetAlertOpen, setResetAlertOpened] = React.useState(false);
    
    const [deleteAlertResult, setDelAlertRes] = React.useState(false);
    const [resetAlertResult, setResAlertRes] = React.useState(false);

    React.useEffect(() => {
        if( !deleteAlertResult  )
            return;

        manageUserAcc(UserManagementType.DELETE, studentName);
        setDelAlertRes(false);
    }, [deleteAlertResult]);

    React.useEffect(() => {
        if( !resetAlertResult )
            return;

        setNewTempPass(manageUserAcc(UserManagementType.PASSWORD_RESET, studentName));
        setResAlertRes(false);
    }, [resetAlertResult]);

    const requestDelete = () => {
        setDeleteAlertOpened(true);
    }
    const requestPassReset = () => {
        setResetAlertOpened(true);
    }

     const handleDeleteAlertClose = ( result : boolean) => {
        setDeleteAlertOpened(false);
        setDelAlertRes(result);
    }
    const handleResetAlertClose = ( result : boolean) => {
        setResetAlertOpened(false);
        setResAlertRes(result);
    }


    return (
        <div className='control-wrapper'>
            <div className='student-control-wrapper'>

                <p className='control-button'
                   onClick={requestDelete}
                >
                    Account Löschen
                </p>

                <p className='control-button'
                   onClick={requestPassReset}
                >
                    Passwort Zurücksetzen
                </p>

            </div>

            {newTempPass.length > 0 ? (
                    <p>Neues Passwort: {newTempPass}</p>
            ) : ( null ) }

            {deleteAlertOpen &&
                <AlertBox
                    titleText="Account Löschen"
                    messageText="Wollen Sie diesen Account wirklich löschen?"
                    onClose={handleDeleteAlertClose}
                />
            }
            {resetAlertOpen &&
                <AlertBox
                    titleText="Passwort Zurücksetzen"
                    messageText="Wollen Sie das Passwort dieses Accounts zurücksetzen?"
                    onClose={handleResetAlertClose}
                />
            }
        </div>
    );

}

export default StudentControlElement;