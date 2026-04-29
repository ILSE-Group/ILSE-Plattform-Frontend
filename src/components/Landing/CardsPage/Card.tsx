import { useNavigate } from 'react-router-dom';

import './Card.scss';

import type { roomListItem } from '../../../lib/dataHandler';

interface CardProps {
  topicInfo: roomListItem;
}


function Card({ topicInfo }: CardProps) {

    let navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate('/room/'+topicInfo.name)}>
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