import './AccountControl.scss';

interface AccountControlProps {
    userName: string;
}

function AccountControl( {userName} : AccountControlProps ) {

    return (
        <div className='account-control-wrapper'>
            <div className='control-elements-wrapper'>
                <p className="account-control-element">
                    Profilbild ändern
                </p>

                <p className="account-control-element">
                    Passwort ändern
                </p>

                <p className="account-control-element">
                    Account löschen
                </p>
            </div>

            {/* TODO: input new Password element */}

            {/* TODO: select ProfilePicture element */}
        </div>
    );
}

export default AccountControl;