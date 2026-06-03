import './InfoPage.scss';

import logo from '../../../assets/logo.svg';

function InfoPage() {

    return (
        <section className='info-page'>

            <div className='info-header-wrapper'>
                <div className='header-content-wrapper header-text-wrapper'>
                    <h1>Willkommen bei ILSE</h1>
                </div>

                <div className='header-content-wrapper header-logo-wrapper'>
                    <img src={logo} alt="" className='header-logo' />
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