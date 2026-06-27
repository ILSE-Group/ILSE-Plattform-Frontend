import './ProfileInfo.scss';

import type { profileContent, profileIconElement } from '../../../lib/interfaceHandler';

import ProfileCard from './ProfileCard/ProfileCard';
import RoomsStatus from '../RoomsStatusPage/RoomsStatus';
import AccountControl from './AccountControl/AccountControl';

interface ProfInfoProps {
    content: profileContent;
    updateIcon: ( newIcon : profileIconElement ) => void;
}

function ProfileInfo( { content, updateIcon } : ProfInfoProps ) {
    return(
        <section className='info-wrapper' >
            
            <ProfileCard profileInfo={content} />

            {/* handles password reset, account deletion, profileImg change */}
            <AccountControl 
                userType={content.userType}
                userIcon={content.userIcon} 
                updateIcon={updateIcon}
            />

            {/* handles the progress bars */}
            {content.roomsProgress.map((roomInfo, idx) => 
                <RoomsStatus key={idx} roomInfo={roomInfo} />
            )}

        </section>
    );
}

export default ProfileInfo;