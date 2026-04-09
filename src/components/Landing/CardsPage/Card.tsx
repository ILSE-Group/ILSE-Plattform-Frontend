import './Card.scss'

import type { roomListTypes } from '../../../lib/dataHandler';

interface CardProps {
  topicInfo: roomListTypes;
}


function Card({ topicInfo }: CardProps) {

    return (
        <div className="card">
            <div className="content-container card-headline-container">
                <p>{topicInfo.name}</p>
            </div>

            <div className="content-container card-image-container">
                <img src={topicInfo.imageSrc} alt={topicInfo.name} />
            </div>

            <div className="content-container card-description-container">
                <p>{topicInfo.description}</p>
            </div>
        </div>
    );

}

export default Card;