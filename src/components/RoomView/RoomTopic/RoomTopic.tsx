import React from "react";

import './RoomTopic.scss'

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";


function RoomTopic() {

    const [topicOpened, toggleTopicFold] = React.useState(false);
    const [descriptionOpened, toggleDescription] = React.useState(false);


    return(
        <section className="room-topic-wrapper">
            <div className={`room-topic-header ${topicOpened ? 'opened' : 'closed'}`}>
                <p className="topic-header-element" onClick={() => toggleTopicFold(!topicOpened)}>
                    {topicOpened ? "⮝" : "⮟"}
                </p>
                <p className="topic-header-element">Topic Name</p>
                <p className="topic-header-element">TopicDoneStatus</p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                <TopicExercise />
                { descriptionOpened ?
                    <>
                        <TopicDescription />
                        <p onClick={() => toggleDescription(false)}>zuklappen</p>
                    </> : 
                    <p onClick={() => toggleDescription(true)}>aufklappen</p>
                }
            </div>

        </section>
    );

}

export default RoomTopic;