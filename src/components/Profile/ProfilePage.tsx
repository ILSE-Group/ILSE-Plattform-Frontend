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

            {content.userType == "teacher" ? (
                <StudentDashboard studentsInfo={content.studentsInfo} />
                ) : ( null )
            }
            
        </section>
    );

}

export default ProfilePage;