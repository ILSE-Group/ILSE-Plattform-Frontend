import './AccountControl.scss';

import React from 'react';

import AlertBox from '../../../General/AlertBox';
import { manageUserAcc } from '../../../../lib/apiHandler';
import { UserManagementType } from '../../../../lib/ManagementType';


interface AccountControlProps {
    userName: string;
}

function AccountControl( {userName} : AccountControlProps ) {

    const [accDelCtrlOpened, setAccDelCtrControlOpened] = React.useState(false);
    
    const toggleAccDelState = () => {
        setAccDelCtrControlOpened(!accDelCtrlOpened);
    }
    const onAccDelAlertClose = () => {
        setAccDelCtrControlOpened(false);
        let msg : string = manageUserAcc(UserManagementType.DELETE, userName);
    }

    return (
        <div className='account-control-wrapper'>
            <div className='control-elements-wrapper'>
                <p className="account-control-element"
                
                >
                    Profilbild ändern
                </p>

                <p className="account-control-element"

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