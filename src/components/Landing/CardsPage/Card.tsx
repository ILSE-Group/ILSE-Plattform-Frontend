import './Card.scss';

import type { roomListItem } from '../../../lib/interfaceHandler';
import { ROOMS_LINK_URL } from '../../../lib/globalVars';
import navigateToPage from '../../../lib/navigationHandler';


interface CardProps {
  topicInfo: roomListItem;
}

function Card({ topicInfo }: CardProps) {

    let navigate = navigateToPage();
    let roomsLink: string = ROOMS_LINK_URL.concat("/");

    return (
        <div className="card" onClick={() => navigate({pageUrl: roomsLink+topicInfo.name})}>
            <div className="content-container card-image-container">
                <img src={topicInfo.imageSrc} alt="" />
            </div>

            <div className="content-container card-headline-container">
                <p>{topicInfo.name}</p>
            </div>

            <div className="content-container card-description-container">
                <p className="card-description-text">{topicInfo.description}</p>
            </div>
        </div>
    );

}

export default Card;