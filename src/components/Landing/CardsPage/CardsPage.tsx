import './CardsPage.scss';

import Card from './Card';
import type { roomListItem } from '../../../lib/interfaceHandler';
import { getRoomListItems } from '../../../lib/dataHandler';


function CardsPage() {

    function renderCards() {

        let cardsInfoJson: roomListItem[];
        
        try {
            cardsInfoJson = getRoomListItems();
        } catch (e) {
            return  <section className='cards-page'>
                        Error: Please reload the Page
                    </section>;
        }

        return (
            <section className='cards-page'>
                {Object.entries(cardsInfoJson).map(([key, value]) => (
                    <Card key={key} topicInfo={value} />
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