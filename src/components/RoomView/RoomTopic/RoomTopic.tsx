import './RoomTopic.scss'

import React from "react";

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";

import type { roomTopic } from "../../../lib/dataHandler";


interface RoomTopicProps {
    topic: roomTopic;
}

function RoomTopic({ topic }: RoomTopicProps) {

    const [topicOpened, toggleTopicFold] = React.useState(false);
    const [descriptionOpened, toggleDescription] = React.useState(false);


    return(
        <section className="room-topic-wrapper">

            <div className={`room-topic-header ${topicOpened ? 'opened' : 'closed'}`}>
                <p className="topic-header-element" onClick={() => toggleTopicFold(!topicOpened)}>
                    {topicOpened ? "⮝" : "⮟"}
                </p>
                <p className="topic-header-element">
                    {topic.topicName}
                </p>
                <p className="topic-header-element">
                    TopicDoneStatus
                </p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                {Object.entries(topic).map(([_, value]) => (
                    <TopicExercise  exercise={value.exercise}/>
                ))}

                { descriptionOpened ?
                    <>
                        <TopicDescription description={topic.descriptionText} />
                        <p className="description-toggle-btn" 
                           onClick={() => toggleDescription(false)}>
                            zuklappen
                        </p>
                    </> : 
                    <p className="description-toggle-btn"
                       onClick={() => toggleDescription(true)}>
                        aufklappen
                    </p>
                }

                <div className="topic-submit-wrapper">
                    <p className="submit-btn">Abgeben</p>
                </div>
            </div>


        </section>
    );

}

export default RoomTopic;