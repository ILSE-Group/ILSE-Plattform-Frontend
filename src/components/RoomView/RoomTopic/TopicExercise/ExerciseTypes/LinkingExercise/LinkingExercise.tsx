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

    const [answerState, setAnswerState] = React.useState<boolean[]>(
            () => question.answer.map(() => false)
    );

    const setAnswerActive = (id : number, isActive : boolean) => {
        setAnswerState(prev => {
            const next = [...prev];
            next[id] = isActive;
            return next;
        });
    }

    // on parent signal, check if answer is correct
    React.useEffect(() => {
        
    }, [checkSignal, checkDoneSignal]);

    // report state to parent
    React.useEffect(() => {

    }, [setExerciseState]);

    // check answer when 2 elements are selected
    React.useEffect(() => {
        
        if( answerState.filter(s => s == true).length >= 2 ) {
            resetAnswerSignal = true;
        }

        return () => {
            resetAnswerSignal = false
        };

    }, [setAnswerActive]);

    // handle answer state
    let resetAnswerSignal = false;
    let setAnswerInactiveSignal = false


    return (
        <div className='linking-wrapper'>
            {question.answer.map((ans, id) => (
                <LinkingElement key={id}
                    id={ans.id}
                    answer={ans}
                    setAnswerState={setAnswerActive}
                    resetAnswer={resetAnswerSignal}
                    setInactive={setAnswerInactiveSignal}
                />
            ))}
        </div>
    );

}

export default LinkingExercise;