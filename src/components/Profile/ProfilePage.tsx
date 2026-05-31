import './ProfilePage.scss';

import AppHeader from '../Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StudentDashboard from './StudentDashboard/StudentDashboard';

function ProfilePage() {

    return(
        <section className='profile-wrapper'>
            <AppHeader />

            <ProfileInfo />

            <StudentDashboard />
        </section>
    );

}

export default ProfilePage;