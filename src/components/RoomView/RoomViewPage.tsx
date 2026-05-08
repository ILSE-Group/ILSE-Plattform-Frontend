import './RoomViewPage.scss';

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

    function isRoomTopic(element: Object): boolean {
        if( element == null || typeof element !== "object" || 
            !("topicName" in element)  || !("exercise" in element) || !("description" in element) ) {
            return false;
        }
        
        return true;
    }

    return (
        <section className='room-view-wrapper'>
            <Header />

            <div className='room-page-wrapper'>
                <h2 className='room-page-header'>{content.roomName}</h2>

                {Object.entries(content)
                    .filter(([key]) => key === "roomTopic")
                    .map(([key, value]) => (
                        <RoomTopic key={key} topic={value} />
                    ))
                }
            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;