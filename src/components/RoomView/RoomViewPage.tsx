import './RoomViewPage.scss';

import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RoomTopic from './RoomTopic/RoomTopic';

import type { roomContent } from '../../lib/interfaceHandler';
import { getRoomContent } from '../../lib/dataHandler';
import { sendTopicStatus } from '../../lib/apiHandler';
import { isLoggedIn } from '../../lib/globalVars';
import { sanitizeString } from '../../lib/stringHandler';


interface RoomViewProps {
    roomName:  string;
    thumbnailSrc: string | null;
}


function RoomViewPage( {roomName, thumbnailSrc} : RoomViewProps ) {

    const content : roomContent = getRoomContent(roomName);

    let [roomProgress, setRoomProgress] = React.useState(0);
    let [topicState, setTopicState] = React.useState<boolean[]> (
        () => content.roomTopic.map(() => false)
    )

    let [signalUpdateComplete, setSignalUpdateComplete] = React.useState(0);

    let progressRef = React.useRef<HTMLParagraphElement | null>(null);
    
    React.useEffect(() => {
        document.title = 'ILSE - '.concat(sanitizeString(roomName));
    }, []);

    // update current room progress
    const updateRoomProgress = (index: number, topicID : number, isCompleted : boolean) => {
        setTopicState(prev => {
            const next = [...prev];
            next[index] = isCompleted;
            return next;
        });
        
        if( isCompleted && isLoggedIn() )
            sendTopicStatus(content.roomID, topicID, isCompleted);
    }

    // calculate room progress, set progressbar and
    // notify RoomTopic -> TopicExercise ->  ... to stop calculating 
    React.useEffect(() => {
        const total = topicState.length;
        if (total <= 0) {
            setRoomProgress(0);
            return;
        }
        const completed = topicState.filter(Boolean).length;
        const percent = Math.round((completed / total) * 100);
        
        setRoomProgress(percent);

        if( progressRef.current ) {
            progressRef.current.style.width = roomProgress.toString().concat("%");
        }

        setSignalUpdateComplete( signalUpdateComplete > 100 ? 0 : signalUpdateComplete+1 );

    }, [roomProgress, topicState]);

    
    return (
        <section className='room-view-wrapper'>
            <Header />

            <div className='room-page-wrapper'>

                <div className='room-header-wrapper'>
                    <div className='room-header-content-wrapper'>
                        {thumbnailSrc != null ? (
                            <img src={thumbnailSrc} alt="" 
                                className='room-header-thumb'
                            />
                        ) : null }

                        <div className='room-page-header'>
                            <h2 className='room-header-text'>
                                {content.roomName}
                            </h2>

                            <div className='room-header-progressbar'>
                                <div className='room-header-progress'
                                    ref={progressRef}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {content.roomTopic.map((topic, i) => (
                    <RoomTopic 
                        key={i}
                        index={i}
                        topic={topic} 
                        updateRoomProgress={updateRoomProgress}
                        updateComplete={signalUpdateComplete}
                    />
                ))}

            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;