import './InfoPage.scss';

// Otter-Bilder importieren

import otter3 from '../../../assets/otter3.png';

function InfoPage() {
    return (
        <section className='info-page'>

            <div className='info-header-wrapper'>
                {/* Text und Untertitel links / mittig im Hero-Bereich */}
                <div className='header-text-wrapper'>
                        <h1>Willkommen bei ILSE</h1>
                        <p>Eine Interaktive Lernplatform für Gefahren im Internet</p>
                </div>

                {/* Rechter Otter */}
                <div className='header-image-wrapper'>
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