import './ProfilePage.scss';

import type { profileContent } from '../../lib/interfaceHandler';
import { recieveProfileData } from '../../lib/apiHandler';

import AppHeader from '../Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StudentDashboard from './StudentDashboard/StudentDashboard';


function ProfilePage() {

    let content : profileContent = recieveProfileData();

    return(
        <section className='profile-wrapper'>
            <AppHeader />

            <ProfileInfo content={content} />

            <StudentDashboard studentsInfo={content.studentsInfo} />
        </section>
    );

}

export default ProfilePage;