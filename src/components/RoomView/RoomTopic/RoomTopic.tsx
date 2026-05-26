import './RoomTopic.scss'

import React, { type RefObject } from "react";

import TopicExercise from "./TopicExercise/TopicExercise";
import TopicDescription from "./TopicDescription/TopicDescription";

import type { roomTopic } from "../../../lib/interfaceHandler";


interface RoomTopicProps {
    index: number;
    topic: roomTopic;
    updateRoomProgress: (index : number, isCompleted : boolean) => void;
    updateComplete: number;
}

function RoomTopic({ index, topic, updateRoomProgress, updateComplete }: RoomTopicProps) {

    let statusRef = React.useRef<HTMLParagraphElement | null>(null);

    // folds
    const [topicOpened, toggleTopicFold] = React.useState(false);
    const [descriptionOpened, toggleDescription] = React.useState(false);

    // check-answer Signal
    const [checkAnswer, setAnswerSignal] = React.useState(0);
    const [checkingDone, setCheckingDoneSignal] = React.useState(0);

    const [exerciseCorrect, setExerciseState] = React.useState(false);
    const [lastUpdateComplete, setUpdateCompleteSignal] = React.useState(updateComplete);

    // submit button
    let submitBtnRef = React.useRef<HTMLParagraphElement | null>(null);
    let submitBtnText : string = "Abgeben";


    // update topic state from api:
    // set topic to completed, when topic.exercise.complete is true
    React.useEffect(() => {
        if( !topic.exercise.completed )
            return;

        setExerciseState(true);
        updateRoomProgress(index, true);

    }, [topic.exercise.completed]);

    // signal TopicExercise to start calculate Answer-State
    const signalCheckAnswers = () => {
        setAnswerSignal(checkAnswer > 50 ? 1 : checkAnswer + 1);
    }

    // TopicExercise signaled calculating complete 
    // -> update room progress, which is passed to RoomViewPage 
    const signalCheckingDone = () => {
        setCheckingDoneSignal(checkingDone > 50 ? 1 : checkingDone + 1);

        if( exerciseCorrect ) {
            // TODO: set state when logged in and get status from this state
            if( statusRef.current )
                statusRef.current.innerText = "done";
            updateRoomProgress(index, true);
        }
        else
            updateRoomProgress(index, false);
    }

    // when RoomViewPage completed calculating 
    // set AnswerSignal to 0 -> Topic Exercise stops calculating
    React.useEffect(() => {
        if( updateComplete == lastUpdateComplete )
            return;
        setUpdateCompleteSignal(updateComplete);

        setAnswerSignal(0);

    }, [updateComplete]);



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