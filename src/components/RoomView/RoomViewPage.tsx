import './RoomViewPage.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import RoomTopic from './RoomTopic/RoomTopic';
//import {getRoomContent} from '../../lib/pageContentHandler';


interface RoomViewPageProps { 
    roomName: string 
};

function RoomViewPage( {roomName}: RoomViewPageProps) {

    return (
        <section className='room-view-wrapper'>
            <Header />
{// TODO: create topics from API-delivered Json-Object
}
            <div className='room-page-wrapper'>
                <h2 className='room-page-header'>{roomName}</h2>

                <RoomTopic />
            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;