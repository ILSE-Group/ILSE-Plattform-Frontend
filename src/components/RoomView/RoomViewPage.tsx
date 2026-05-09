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

    return (
        <section className='room-view-wrapper'>
            <Header />

            <div className='room-page-wrapper'>
                <h2 className='room-page-header'>{content.roomName}</h2>

                {content.roomTopic.map((topic, i) => (
                    <RoomTopic key={i} topic={topic} />
                ))}

            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;