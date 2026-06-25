import './AccountControl.scss';

import React from 'react';

import AlertBox from '../../../General/AlertBox';
import PasswordAlertBox from '../../../General/PasswordAlertBox';

import { manageOwnAcc } from '../../../../lib/apiHandler';
import { AccountManagementType } from '../../../../lib/ManagementType';


interface AccountControlProps {
    userName: string;
}

function AccountControl( {userName} : AccountControlProps ) {

    const [iconChngCtrlOpened, setIconChngCtrlOpened] = React.useState(false);
    const [passChngCtrlOpened, setPassChngCtrlOpened] = React.useState(false);
    const [accDelCtrlOpened, setAccDelCtrControlOpened] = React.useState(false);
    
    const toggleIconChngState = () => {
        setIconChngCtrlOpened(!iconChngCtrlOpened);
    }
    const onIconChngAlertClose = ( newIcon : string ) => {
        setIconChngCtrlOpened(false);

        //TODO
    }

    const togglePassChngState = () => {
        setPassChngCtrlOpened(!passChngCtrlOpened);
    }
    const onPassChngAlertClose = ( password : string  ) => {
        setPassChngCtrlOpened(false);

        //TODO: add Password-Length Check
        
        let msg : string;
        if( password.length > 0 )
            msg = manageOwnAcc(AccountManagementType.CHANGE_PASSWORD, password);
    }

    const toggleAccDelState = () => {
        setAccDelCtrControlOpened(!accDelCtrlOpened);
    }
    const onAccDelAlertClose = ( result : boolean) => {
        setAccDelCtrControlOpened(false);

        let msg : string;
        if(result)
            msg = manageOwnAcc(AccountManagementType.DELETE_ACCOUNT, '');

        // TODO: handle error-msg
    }


    return (
        <div className='account-control-wrapper'>
            <div className='control-elements-wrapper'>
                <p className="account-control-element"
                    onClick={toggleIconChngState}
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

            

            {/* TODO: select ProfilePicture element
            {iconChngCtrlOpened &&
                <
                    onClose={onIconChngAlertClose}
                />
            }
            */}

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