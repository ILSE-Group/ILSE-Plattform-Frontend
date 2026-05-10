import './RoomTopic.scss'

import React from "react";

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";

import type { roomTopic } from "../../../lib/dataHandler";


interface RoomTopicProps {
    topic: roomTopic;
}

function RoomTopic({ topic }: RoomTopicProps) {

    let exerciseCorrect : boolean = false;

    // folds
    const [topicOpened, toggleTopicFold] = React.useState(false);
    const [descriptionOpened, toggleDescription] = React.useState(false);

    // check-answer Signal
    const [checkAnswer, setAnswerSignal] = React.useState(false);
    const [checkingDone, setCheckingDoneSignal] = React.useState(false);

    const signalCheckAnswers = () => {
        setAnswerSignal(true);
        setCheckingDoneSignal(false);
    }

    const signalCheckingDone = () => {
        setAnswerSignal(false);
        setCheckingDoneSignal(true);

        if( exerciseCorrect ) {
            // TODO: set state when logged in and get status from this state
            let statusElement : HTMLElement | null = document.getElementById('status')
            if( statusElement !== null )
                statusElement.innerText = "done";
        }
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
                <p className="topic-header-element" id='status'>
                    status
                </p>
            </div>

            <div className={`topic-content-wrapper ${topicOpened ? 'opened' : 'closed'}`}>
                
                {
                    //----------Exercise----------
                }
                 <TopicExercise 
                    exercise={topic.exercise} 
                    checkSignal={checkAnswer}
                    checkDoneSignal={signalCheckingDone}
                    exerciseCorrect={exerciseCorrect}
                />

                {
                    //----------Description----------
                }
                { descriptionOpened ?
                    <>
                        <TopicDescription description={topic.descriptionText} />
                        
                        <div className="description-toggle-btn" 
                           onClick={() => toggleDescription(false)}>
                            <p>Hilfe schließen</p>
                        </div>
                    </> : 
                    <div className="description-toggle-btn"
                       onClick={() => toggleDescription(true)}>
                        <p>Hilfe öffnen</p>
                    </div>
                }

                {
                    //----------Submit----------
                }
                <div className="topic-submit-wrapper">
                    <p className="submit-btn"
                       id='submit-btn'
                       onClick={signalCheckAnswers}>
                        Abgeben
                    </p>
                </div>
            </div>


        </section>
    );

}

export default RoomTopic;