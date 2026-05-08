

interface TopicDescriptionProps {
    description: string;
}


function TopicDescription({description} : TopicDescriptionProps) {

    return(
        <>
            <p>{description}</p>
        </>
    );

}

export default TopicDescription;