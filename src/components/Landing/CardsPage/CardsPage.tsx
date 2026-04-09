import './CardsPage.scss'

import Card from './Card'

import type { roomListTypes } from '../../../lib/dataHandler';
import { getRoomList } from '../../../lib/dataHandler';


function CardsPage() {

    function renderCards() {
        let roomInfoString:string = getRoomList();

        let cardsInfoJson : roomListTypes;
        
        try {
            cardsInfoJson = JSON.parse(roomInfoString);
        } catch (e) {
            return  <section className='cards-page'>
                        Error: Invalid JSON
                    </section>;
        }

        return (
            <section className='cards-page'>
                {Object.entries(cardsInfoJson).map(([_, value]) => (
                    <Card topicInfo={value} />
                ))}
            </section>
        );
    }

    return (
        <>
            {renderCards()}
        </>
    );

}

export default CardsPage;