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

    function checkAnswers() {

    }


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
                    status
                </p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                
                 <TopicExercise exercise={topic.exercise}/>

                { descriptionOpened ?
                    <>
                        <TopicDescription description={topic.descriptionText} />
                        
                        <div className="description-toggle-btn" 
                           onClick={() => toggleDescription(false)}>
                            <p>zuklappen</p>
                        </div>
                    </> : 
                    <div className="description-toggle-btn"
                       onClick={() => toggleDescription(true)}>
                        <p>aufklappen</p>
                    </div>
                }

                <div className="topic-submit-wrapper">
                    <p className="submit-btn" onClick={checkAnswers}>
                        Abgeben
                    </p>
                </div>
            </div>


        </section>
    );

}

export default RoomTopic;