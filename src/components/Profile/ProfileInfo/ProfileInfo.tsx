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

            {/* This component now handles the progress bars */}
            <AccountControl />

            {/* REMOVE THIS BLOCK BELOW */}
            {/* {content.roomsProgress.map((roomInfo, idx) => 
                <RoomsStatus key={idx} roomInfo={roomInfo} />
            )} */}
        </section>
    );
}

export default ProfileInfo;