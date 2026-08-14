import './InfoPage.scss';

// Otter-Bilder importieren

import otter3 from '../../../assets/otter3.png';

function InfoPage() {
    return (
        <section className='info-page'>

            

            <div className='info-header-wrapper'>
                {/* Der große Vollbild-Hintergrund */}
                <div className='pastel-background-bar'></div>

                {/* Text und Untertitel links / mittig im Hero-Bereich */}
                <div className='header-content-wrapper header-text-wrapper'>
                    <div className='hero-text-content'>
                        <h1>Willkommen bei ILSE</h1>
                        <p>Wir sind ILSE. Eine Interaktive Lernplatform für Gefahren im Internet</p>
                    </div>
                </div>

                {/* Rechter Otter */}
                <div className='header-otter-wrapper'>
                    <img src={otter3} alt="Otter rechts" className='otter-img' />
                </div>
            </div>

            <div className='info-message-wrapper'>
                
                <p>Wähle eine Karte und hilf ILSE dabei, Level aufzusteigen.</p>
                
            </div>
            
        </section>
    );
}

export default InfoPage;