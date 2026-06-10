import './ProfilePage.scss';

import { useEffect } from 'react';

import type { profileContent } from '../../lib/interfaceHandler';
import { getProfileData } from '../../lib/dataHandler';

import AppHeader from '../Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StudentDashboard from './StudentDashboard/StudentDashboard';


function ProfilePage() {

    const content : profileContent = getProfileData();

    useEffect(() => {
        document.title = 'ILSE - Profile';
    }, []);


    return(
        <section className='profile-wrapper'>
            <AppHeader />

            <ProfileInfo content={content} />

            {(content.userType == "teacher" && content.studentsInfo != null) ? (
                <StudentDashboard studentsInfo={content.studentsInfo} />
                ) : ( null )
            }
            
        </section>
    );

}

export default ProfilePage;