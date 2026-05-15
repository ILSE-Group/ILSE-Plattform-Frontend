import './MultipleChoiceExercise.scss';

import React from 'react';

import type {  exerciseQuestion } from '../../../../../../lib/dataHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';

import SingleChoice from './SingleChoiceElement';


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

    const [overallAnswerState, setOverallAnswerState] = React.useState<number>(AnswerState.UNANSWERED);

    // get Signal from RoomTopic -> TopicExercise
    // and check the answers
    React.useEffect(() => {
        if (!checkSignal)
            return;

        let active : boolean = true;

        async function checkAnswers() {

            // set answer state
            if ( answersState.every(s => s === AnswerState.UNANSWERED) )
                setOverallAnswerState(AnswerState.UNANSWERED);
            else if ( answersState.every(s => s === AnswerState.CORRECT) )
                setOverallAnswerState(AnswerState.CORRECT);
            else 
                setOverallAnswerState(AnswerState.WRONG);

            // set info-text and exerciseState based on answer state
            switch( overallAnswerState ) {
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

            console.log({ overallAnswerState, answersState });


            checkDoneSignal();
        }

        checkAnswers();

        return () => { 
                active = false; 
        };
    }, [checkSignal, checkDoneSignal]);

    const reportAnswerState = React.useCallback((index: number, state: number) => {
        setAnswersState(prev => {
            const next = [...prev];
            next[index] = state;
            return next;
        });
    }, []);


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
                        index={id}
                        reportAnswerState={reportAnswerState}
                        answerState={answerState} />
                ))}
                
            </div>

            <p className='info-text' ref={infoTextRef}>

            </p>

        </div>
    );

}

export default MultipleChoiceExercise;