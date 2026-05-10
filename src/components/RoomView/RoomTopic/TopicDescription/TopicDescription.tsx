import './TopicDescription.scss';


interface TopicDescriptionProps {
    description: string;
}


function TopicDescription({description} : TopicDescriptionProps) {

    return(
        <>
            <p className="description-text">
                {description}
            </p>
        </>
    );

}

export default TopicDescription;