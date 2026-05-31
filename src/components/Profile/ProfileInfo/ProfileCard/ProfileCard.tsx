import './ProfileCard.scss';


function ProfileCard() {

    return(
        <div className='profile-card'>

            <div className='profile-avatar'>
            </div>

            <h1 className='profile-name'>
                Beispiel Name
            </h1>

            <p className='profile-level'>
                Level 1 Anfänger
            </p>

            <div className='progress-bar'>
                <div className='progress-fill'></div>
            </div>
                
        </div>
    );
}

export default ProfileCard;