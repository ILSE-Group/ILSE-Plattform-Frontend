import './UserIconAlertBox.scss';

import { useState, useRef, useEffect } from 'react';

import type { profileIconContent, profileIconElement } from '../../lib/interfaceHandler';
import { getIconsData, getIconSrc } from '../../lib/dataHandler';


interface AlertBoxProps {
    userIcon: profileIconElement;
    onClose: (newId: number, newSrc: string, newColor : string) => void;
}

function UserIconAlertBox( {userIcon, onClose} : AlertBoxProps) {

    const availableIcons : profileIconContent = getIconsData();

    const [currentID, setCurrentID] = useState<number>(
        userIcon.iconID < 0 || userIcon.iconID > availableIcons.icon.length ? 0 : userIcon.iconID
    );
    const [currentSrc, setCurrentSrc] = useState<string>(
        userIcon.iconSrc.length > 0 ? userIcon.iconSrc : getIconSrc(0)
    );
    const [currentColor, setCurrentColor] = useState<string>(
        userIcon.iconBgColorHex.length == 7 ? userIcon.iconBgColorHex : '#ffffff'
    )

    const previewIconRef = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        if( previewIconRef.current )
            previewIconRef.current.style.backgroundColor = currentColor.toString();
    }, [currentColor])

    
    const handleAlertClose = ( ) => {
        onClose(currentID, currentSrc, currentColor);
    }


    return (
        <section className="alert-wrapper">

            <div className='alert-box-wrapper'>
                <p className='alert-header'>
                    Bitte wählen Sie ihr Profilbild
                </p>

                <div className='profile-preview-wrapper'>
                    <img src={currentSrc} 
                        alt="Bitte laden Sie die Seite neu!"
                        ref={previewIconRef}
                    />
                </div>

                <div className='settings-wrapper'>
                    <div className='color-settings-wrapper'>
                        <input type="color"
                            value={currentColor}
                            onChange={(e) => setCurrentColor(e.target.value)}
                        />
                    </div>

                    <div className='image-settings-wrapper'>
                        {Object.entries(availableIcons.icon).map(([key, value]) => (
                            <img className='icon-preview'
                                key={key} 
                                src={value.iconSrc}
                                onClick={() => {
                                    setCurrentID(value.iconID);
                                    setCurrentSrc(value.iconSrc);
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className='options-wrapper'>
                    <p className='options-button'
                       onClick={() => handleAlertClose()}>
                        Übernehmen
                    </p>
                    <p className='options-button'
                       onClick={() => handleAlertClose()}>
                        Abbrechen
                    </p>
                </div>
    
            </div>

        </section>
    )
}

export default UserIconAlertBox;