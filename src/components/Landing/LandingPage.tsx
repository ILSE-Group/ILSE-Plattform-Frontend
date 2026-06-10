import { useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import InfoPage from './InfoPage/InfoPage';
import CardsPage from './CardsPage/CardsPage';


function LandingPage() {

    useEffect(() => {
            document.title = 'ILSE - Home';
    }, []);
    
    
    return (
        <>
            <Header />

            <InfoPage />
            <CardsPage />

            <Footer />
        </>
    );

}

export default LandingPage;