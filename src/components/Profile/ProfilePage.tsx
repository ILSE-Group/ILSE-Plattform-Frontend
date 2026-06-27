import './ProfilePage.scss';

import { useState, useEffect } from 'react';

import type { profileContent, profileIconElement } from '../../lib/interfaceHandler';
import { getProfileData } from '../../lib/dataHandler';

import AppHeader from '../Header/Header';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import StudentDashboard from './StudentDashboard/StudentDashboard';


function ProfilePage() {

    const [pageContent, setPageContent] = useState<profileContent>(getProfileData());

    useEffect(() => {
        document.title = 'ILSE - Profile';
    }, []);

    const updateIcon = ( newIcon : profileIconElement ) => {
        let newContent : profileContent = getProfileData();
        newContent.userIcon = newIcon;

        setPageContent(newContent);
    }


    return(
        <section className='profile-wrapper'>
            <AppHeader />

            <ProfileInfo 
                content={pageContent}
                updateIcon={updateIcon}
            />

            {
                (pageContent.userType == "teacher" && pageContent.studentsInfo != null) ? (
                    <StudentDashboard 
                        studentsInfo={pageContent.studentsInfo} 
                    />
                ) : ( null )
            }
            
        </section>
    );

}

export default ProfilePage;