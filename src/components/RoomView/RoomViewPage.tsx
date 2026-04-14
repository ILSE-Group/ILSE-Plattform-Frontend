import './RoomViewPage.scss'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import RoomTopic from './RoomTopic/RoomTopic';

//import {getRoomContent} from '../../lib/pageContentHandler';

function RoomViewPage() {
//function RoomViewPage(roomName:string) {
    //let roomContent: string = getRoomContent(roomName);

    return (
        <section className='room-view-wrapper'>
            <Header />

            <div className='room-page-wrapper'>
                <h2 className='room-page-header'>RoomName</h2>

                <RoomTopic />
            </div>

            <Footer />
        </section>
    );

}

export default RoomViewPage;