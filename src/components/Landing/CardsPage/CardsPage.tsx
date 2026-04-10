import './CardsPage.scss';

import Card from './Card';
import { getRoomsList, type roomListTypes } from '../../../lib/dataHandler';


function CardsPage() {

    function renderCards() {
        let roomInfoString:string = getRoomsList();

        let cardsInfoJson : roomListTypes;
        
        try {
            cardsInfoJson = JSON.parse(roomInfoString);
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