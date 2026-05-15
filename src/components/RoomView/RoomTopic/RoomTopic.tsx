import './RoomTopic.scss'

import React from "react";

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";

import type { roomTopic } from "../../../lib/dataHandler";


interface RoomTopicProps {
    topic: roomTopic;
}

function RoomTopic({ topic }: RoomTopicProps) {

    let statusRef = React.useRef<HTMLParagraphElement | null>(null);

    // folds
    const [topicOpened, toggleTopicFold] = React.useState(false);
    const [descriptionOpened, toggleDescription] = React.useState(false);

    // check-answer Signal
    const [checkAnswer, setAnswerSignal] = React.useState(0);
    const [checkingDone, setCheckingDoneSignal] = React.useState(0);

    const [exerciseCorrect, setExerciseState] = React.useState(false);

    let submitBtnRef = React.useRef<HTMLParagraphElement | null>(null);
    let submitBtnText : string = "Abgeben";

    const signalCheckAnswers = () => {
        setAnswerSignal(checkAnswer > 50 ? 0 : checkAnswer + 1);
    }

    const signalCheckingDone = () => {
        setCheckingDoneSignal(checkingDone > 50 ? 0 : checkingDone + 1);

        if( exerciseCorrect ) {
            // TODO: set state when logged in and get status from this state
            if( statusRef.current )
                statusRef.current.innerText = "done";
        }
    }


    return(
        <section className="room-topic-wrapper">

            <div className={`room-topic-header ${topicOpened ? 'opened' : 'closed'} ${exerciseCorrect ? 'correct' : ''}`}>
                <p className="topic-header-element" onClick={() => toggleTopicFold(!topicOpened)}>
                    {topicOpened ? "⮝" : "⮟"}
                </p>
                <p className="topic-header-element">
                    {topic.topicName}
                </p>
                <p className="topic-header-element" ref={statusRef} >
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
                    setExerciseState={setExerciseState}
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
                       ref={submitBtnRef}
                       onClick={signalCheckAnswers}>
                        {submitBtnText}
                    </p>
                </div>
            </div>


        </section>
    );

}

export default RoomTopic;