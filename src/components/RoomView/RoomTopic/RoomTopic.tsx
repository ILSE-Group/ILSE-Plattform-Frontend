import React from "react";

import './RoomTopic.scss'

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";


function RoomTopic() {

    const [topicOpened, toggleTopicFold] = React.useState(false);


    return(
        <section className="room-topic-wrapper">
            <div className={`room-topic-header ${topicOpened ? 'opened' : 'closed'}`}>
                <p className="topic-header-element header-button-wrapper" onClick={() => toggleTopicFold(!topicOpened)}>
                    <p className={`topic-header-button ${topicOpened ? open : closed}`}></p>
                </p>
                <p className="topic-header-element header-name-wrapper">Topic Name</p>
                <p className="topic-header-element header-status-wrapper">TopicDoneStatus</p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                <TopicExercise />
                <TopicDescription />
            </div>

        </section>
    );

}

export default RoomTopic;