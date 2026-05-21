import './LinkingExercise.scss';

import React from 'react';

import type {  exerciseQuestion } from '../../../../../../lib/interfaceHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';

import LinkingElement  from './LinkingElement';

interface LinkingExProps {
    question: exerciseQuestion;
    checkSignal: number;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}

function LinkingExercise({ question, checkSignal, checkDoneSignal, setExerciseState } : LinkingExProps) {

    let answerState : number = AnswerState.UNANSWERED

    React.useEffect(() => {

    }, [checkSignal, checkDoneSignal]);

    // TODO: remove these two lines 
    // (added to stop producing not-used errors)
    setExerciseState(false);
    // ODOT

    return (
        <div className='linking-wrapper'>
            {question.answer.map((ans, id) => (
                <LinkingElement
                    id={ans.id}
                    answer={ans}
                />
            ))}
        </div>
    );

}

export default LinkingExercise;