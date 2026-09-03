import './MultipleChoiceExercise.scss';

import React from 'react';

import type {  exerciseQuestion } from '../../../../../../lib/interfaceHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';

import SingleChoice from './SingleChoiceElement';
import { sendTopicStatus } from '../../../../../../lib/apiHandler';


interface MCExProps {
    question: exerciseQuestion;
    checkSignal: number;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}

function MultipleChoiceExercise({ question, checkSignal, checkDoneSignal, setExerciseState } : MCExProps) {

    let answerState : number = AnswerState.UNANSWERED
    const [notifyUser, setNotifyUser] = React.useState(false);

    let infoTextRef = React.useRef<HTMLParagraphElement | null>(null);

    const [answersState, setAnswersState] = React.useState<number[]>(
        () => question.answer.map(() => AnswerState.UNANSWERED)
    );

    let newOverallAnswerState : number;

    // get Signal from RoomTopic -> TopicExercise
    // and check the answers
    React.useEffect(() => {
        if (checkSignal <= 0)
            return;

        // set answer state
        newOverallAnswerState = 
            answersState.every(s => s === AnswerState.UNANSWERED) ? AnswerState.UNANSWERED :
            answersState.every(s => s === AnswerState.WRONG) ? AnswerState.UNANSWERED :
            answersState.every(s => s === AnswerState.CORRECT) ? AnswerState.CORRECT :
            AnswerState.WRONG;


        // set info-text and exerciseState based on answer state
        switch( newOverallAnswerState ) {
            case AnswerState.CORRECT:
                if( infoTextRef.current ) 
                    infoTextRef.current.innerText = "";
                setExerciseState(true);
                break;
            case AnswerState.WRONG:
                if( infoTextRef.current ) 
                    infoTextRef.current.innerText = "Noch nicht richtig. Versuche es noch einmal!";
                setExerciseState(false);
                break;
            case AnswerState.UNANSWERED:
                if( infoTextRef.current ) 
                    infoTextRef.current.innerText = "Bitte wähle mindestens eine Antwort.";
                break;
        }

        checkDoneSignal();

    }, [checkSignal, checkDoneSignal]);

    const reportAnswerState = (index: number, state: number) => {
        setAnswersState(prev => {
            const next = [...prev];
            next[index] = state;
            return next;
        });
    };


    return (
        <div>
            <h1 className='question-text'>
                {question.questionText}
            </h1>

            <div className='choices-wrapper'>

                {question.answer.map((ans, id) => (
                    <SingleChoice key={id} 
                        answer={ans} 
                        checkAnswerSignal={checkSignal}
                        notifyUserSignal={notifyUser}
                        index={ans.answerID}
                        reportAnswerState={reportAnswerState}
                        answerState={answerState} 
                    />
                ))}
                
            </div>

            <p className='info-text' ref={infoTextRef}>

            </p>

        </div>
    );

}

export default MultipleChoiceExercise;