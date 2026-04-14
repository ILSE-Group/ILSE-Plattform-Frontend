import React from "react";

import './RoomTopic.scss'

import TopicIntro from "./TopicIntro/TopicIntro";
import TopicExercise from "./TopicExercise/TopicExercise";


function RoomTopic() {

    const [topicOpened, toggleTopicFold] = React.useState(false);


    return(
        <section className="room-topic-wrapper">
            <div className="room-topic-header">
                <p className="topic-header-element" onClick={() => toggleTopicFold(!topicOpened)}>
                    {topicOpened ? "⮝" : "⮟"}
                </p>
                <p className="topic-header-element">Topic Name</p>
                <p className="topic-header-element">TopicDoneStatus</p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                <TopicIntro />
                <TopicExercise />
            </div>

        </section>
    );

}

export default RoomTopic;