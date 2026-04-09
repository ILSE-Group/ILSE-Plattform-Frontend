import './Card.scss'


function Card() {

    return (
        <div className="card">
            <div className="content-container card-headline-container">
                <p>Headline</p>
            </div>
            <div className="content-container card-image-container">
                <img src="" alt="" />
            </div>
            <div className="content-container card-description-container">
                <p>description of this topic</p>
            </div>
        </div>
    );

}

export default Card;