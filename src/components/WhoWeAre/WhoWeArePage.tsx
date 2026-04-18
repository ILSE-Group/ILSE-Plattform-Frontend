import './WhoWeArePage.scss'

import Header from '../Header/Header';
import AboutText from './AboutText/AboutText';
import AboutFeedback from './AboutFeedback/AboutFeedback';


function WhoWeArePage() {

    return (
        <div>
            <Header />
            
            <div className="about-page-wrapper" >
                <h1 className='about-header'>Über uns</h1>

                <AboutText />

                <AboutFeedback />

            </div>

        </div>
    );

}

export default WhoWeArePage;