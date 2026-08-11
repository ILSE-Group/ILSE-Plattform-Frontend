import './InfoPage.scss';

// Otter-Bilder importieren
import otter1 from '../../../assets/otter1.png';
import otter3 from '../../../assets/otter3.png';

function InfoPage() {
    return (
        <section className='info-page'>

            <div className='info-header-wrapper'>
                {/* Linker Otter */}
                <div className='header-otter-wrapper'>
                    <img src={otter1} alt="Otter links" className='otter-img' />
                </div>

                {/* Text in der Mitte */}
                <div className='header-content-wrapper header-text-wrapper'>
                    <h1>Willkommen bei ILSE</h1>
                </div>

                {/* Rechter Otter */}
                <div className='header-otter-wrapper'>
                    <img src={otter3} alt="Otter rechts" className='otter-img' />
                </div>
            </div>

            <div className='info-message-wrapper'>
                <p>Wir sind ILSE. Eine Interaktive Lernplatform für Gefahren im Internet</p>
                <p>Wähle eine Karte und hilf ILSE dabei, Level aufzusteigen.</p>
                
            </div>
            
        </section>
    );
}

export default InfoPage;