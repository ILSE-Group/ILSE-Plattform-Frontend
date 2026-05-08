import './RoomsPage.scss';

import Header from '../Header/Header'
import CardsPage from '../Landing/CardsPage/CardsPage';
import Footer from '../Footer/Footer';


function RoomsPage() {
    
    return (
        <>
            <Header />

            <div className='rooms-wrapper'>
                <h1 className='rooms-headline'>
                    Bitte wähle ein Thema
                </h1>
            </div>

            <CardsPage />

            <Footer />
        </>
    );

}

export default RoomsPage;