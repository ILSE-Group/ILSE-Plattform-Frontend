import './RoomViewPage.scss'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import RoomTopic from './RoomTopic/RoomTopic';


interface RoomViewPageProps { 
    roomName: string 
};
//import {getRoomContent} from '../../lib/pageContentHandler';

function RoomViewPage( {roomName}: RoomViewPageProps) {
//function RoomViewPage(roomName:string) {
    //let roomContent: string = getRoomContent(roomName);

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