import './ProfileCard.scss';

import React from 'react';

import type { profileContent } from '../../../../lib/interfaceHandler';


interface ProfileCardProps {
    profileInfo: profileContent;
}

function ProfileCard( { profileInfo } : ProfileCardProps ) {

    const iconImgRef = React.useRef<HTMLImageElement | null>(null);
    const progressBarRef = React.useRef<HTMLDivElement | null>(null);

    // set icon-background color on value change
    React.useEffect(() => {
        if( iconImgRef.current )
            iconImgRef.current.style.backgroundColor = "#".concat(profileInfo.userIcon.iconBgColorHex.toString());
    }, 
    [profileInfo.userIcon.iconBgColorHex])

    // set progressbar width on value change
    React.useEffect(() => {
        if( progressBarRef.current )
            progressBarRef.current.style.width = profileInfo.levelProgress.toString().concat("%");
    }, 
    [profileInfo.levelProgress])

    return(
        <div className='profile-card'>

            <div className='profile-avatar'>
                <img src={profileInfo.userIcon.iconSrc} 
                    alt="User Icon"
                    ref={iconImgRef}
                />
            </div>

            <h1 className='profile-name'>
                {profileInfo.username}
            </h1>

            <p className='profile-level'>
                Level {profileInfo.level} - {profileInfo.levelDesc}
            </p>

            <div className='progress-bar'>
                <div className='progress-fill' 
                    ref={progressBarRef}
                ></div>
            </div>
                
        </div>
    );
}

export default ProfileCard;