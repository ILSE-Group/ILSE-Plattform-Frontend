import './RoomViewPage.scss';

import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RoomTopic from './RoomTopic/RoomTopic';

import type { roomContent } from '../../lib/dataHandler';
import { getRoomContent } from '../../lib/dataHandler';


interface RoomViewProps {
    roomName:  string;
}


function RoomViewPage({roomName} : RoomViewProps) {

    let content : roomContent = getRoomContent(roomName);

    let [roomProgress, setRoomProgress] = React.useState(0);
    let [topicState, setTopicState] = React.useState<boolean[]> (
        () => content.roomTopic.map(() => false)
    )

    let progressRef = React.useRef<HTMLParagraphElement | null>(null);
    
    const updateRoomProgress = (index: number, isCompleted : boolean) => {
        setTopicState(prev => {
            const next = [...prev];
            next[index] = isCompleted;
            return next;
        });
    }

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


    }, [topicState]);

    return (
        <section className='room-view-wrapper'>
            <Header />

            <div className='room-page-wrapper'>
                <div className='room-page-header'>
                    <h2 className='room-header-text'>{content.roomName}</h2>
                    <div className='room-header-progressbar'>
                        <div className='room-header-progress'
                            ref={progressRef}>
        
                        </div>
                    </div>
                </div>

                {content.roomTopic.map((topic, i) => (
                    <RoomTopic 
                        key={i}
                        index={i}
                        topic={topic} 
                        updateRoomProgress={updateRoomProgress}
                    />
                ))}

            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;