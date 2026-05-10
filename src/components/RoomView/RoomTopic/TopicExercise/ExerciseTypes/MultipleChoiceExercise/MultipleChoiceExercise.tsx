import './MultipleChoiceExercise.scss';

import React from 'react';

import type {  exerciseQuestion } from '../../../../../../lib/dataHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';

import SingleChoice from './SingleChoiceElement';


interface MCExProps {
    question: exerciseQuestion;
    checkSignal: boolean;
    checkDoneSignal: () => void;
    exerciseCorrect: boolean;
}

function MultipleChoiceExercise({ question, checkSignal, checkDoneSignal, exerciseCorrect } : MCExProps) {

    let answerState : number = AnswerState.UNANSWERED
    let signalNotifyUser : boolean = false;

    const [answersState, setAnswersState] = React.useState<number[]>(
        () => question.answer.map(() => AnswerState.UNANSWERED)
    );

    // get Signal from RoomTopic -> TopicExercise
    // and check the answers
    React.useEffect(() => {
        if (!checkSignal)
            return;

        let active : boolean = true;

        async function checkAnswers() {

            const allUnanswered = answersState.every(s => s === AnswerState.UNANSWERED);
            const allCorrect = answersState.every(s => s === AnswerState.CORRECT);
            
            let infoText : HTMLElement | null = document.getElementById('info-text');
            if( allUnanswered ) {
                if( infoText != null ) 
                    infoText.innerText = "Bitte wählen Sie mindestens eine Antwort";
            }
            else {
                if( infoText != null )
                    infoText.innerText = "";
                
                signalNotifyUser = true;
            }

            if( allCorrect )
                exerciseCorrect = true;

            console.log({ allUnanswered, allCorrect, answersState });


            checkDoneSignal();
        }

        checkAnswers();

        return () => { 
                active = false; 
        };
    }, [checkSignal, checkDoneSignal, exerciseCorrect]);

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
                        notifyUserSignal={signalNotifyUser}
                        index={id}
                        reportAnswerState={reportAnswerState}
                        answerState={answerState} />
                ))}
                
            </div>

            <p className='info-text' id='info-text'>

            </p>

        </div>
    );

}

export default MultipleChoiceExercise;