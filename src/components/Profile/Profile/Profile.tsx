import './Profile.scss';


function Profile() {

    return(
        <section className='profile-wrapper'>

            <div className='profile-card'>

                <div className='profile-avatar'>

                </div>

                <h1 className='profile-name'>
                    Beispiel Name
                </h1>

                <p className='profile-level'>
                    Leven 1 Anfänger
                </p>

                <div className='progress-bar'>
                    <div className='progress-fill'></div>
                </div>
                
            </div>
            
        </section>
    );

}

export default Profile;