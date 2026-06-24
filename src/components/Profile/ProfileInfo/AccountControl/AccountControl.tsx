import './AccountControl.scss';

import React from 'react';

import AlertBox from '../../../General/AlertBox';
import PasswordAlertBox from '../../../General/PasswordAlertBox';

import { manageUserAcc } from '../../../../lib/apiHandler';
import { UserManagementType } from '../../../../lib/ManagementType';


interface AccountControlProps {
    userName: string;
}

function AccountControl( {userName} : AccountControlProps ) {

    const [passChngCtrlOpened, setPassChngCtrlOpened] = React.useState(false);
    const [accDelCtrlOpened, setAccDelCtrControlOpened] = React.useState(false);
    
    const togglePassChngState = () => {
        setPassChngCtrlOpened(!passChngCtrlOpened);
    }
    const onPassChngAlertClose = ( password : string  ) => {
        setPassChngCtrlOpened(false);
        //if( password.length > 0 )
        //    let msg : string = manageUserAcc(UserManagementType.PASSWORD_CHANGE, userName, password);
    }

    const toggleAccDelState = () => {
        setAccDelCtrControlOpened(!accDelCtrlOpened);
    }
    const onAccDelAlertClose = ( result : boolean) => {
        setAccDelCtrControlOpened(false);

        let msg : string;
        if(result)
            msg = manageUserAcc(UserManagementType.DELETE, userName);

        // TODO: handle error-msg
    }

    return (
        <div className='account-control-wrapper'>
            <div className='control-elements-wrapper'>
                <p className="account-control-element"
                
                >
                    Profilbild ändern
                </p>

                <p className="account-control-element"
                    onClick={togglePassChngState}
                >
                    Passwort ändern
                </p>

                <p className="account-control-element"
                    onClick={toggleAccDelState}
                >
                    Account löschen
                </p>
            </div>

            {/* TODO: input new Password element */}

            {/* TODO: select ProfilePicture element */}

            {passChngCtrlOpened &&
                <PasswordAlertBox
                    onClose={onPassChngAlertClose}
                />
            }

            {accDelCtrlOpened &&
                <AlertBox 
                    titleText='Account löschen'
                    messageText='Wollen Sie ihren Account endgültig löschen?' 
                    onClose={onAccDelAlertClose} 
                />
            }

        </div>
    );
}

export default AccountControl;