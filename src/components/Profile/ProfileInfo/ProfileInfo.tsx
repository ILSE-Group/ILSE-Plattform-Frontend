import './ProfileInfo.scss';

import ProfileCard from './ProfileCard/ProfileCard';
import RoomsStatus from '../RoomsStatusPage/RoomsStatus';


function ProfileInfo() {

    return(
        <section className='info-wrapper' >

            <ProfileCard />

            <RoomsStatus />
            
        </section>
    );

}

export default ProfileInfo;