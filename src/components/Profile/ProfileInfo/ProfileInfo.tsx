import './ProfileInfo.scss';

import type { profileContent } from '../../../lib/interfaceHandler';

import ProfileCard from './ProfileCard/ProfileCard';
import RoomsStatus from '../RoomsStatusPage/RoomsStatus';
import AccountControl from './AccountControl/AccountControl';

interface ProfInfoProps {
    content: profileContent;
}

function ProfileInfo( { content } : ProfInfoProps ) {
    return(
        <section className='info-wrapper' >
            
            <ProfileCard profileInfo={content} />

            {/* handles password reset, account deletion, profileImg change */}
            <AccountControl userType={content.userType} />

            {/* handles the progress bars */}
            {content.roomsProgress.map((roomInfo, idx) => 
                <RoomsStatus key={idx} roomInfo={roomInfo} />
            )}

        </section>
    );
}

export default ProfileInfo;