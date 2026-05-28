import './LinkingExercise.scss';

import React from 'react';

import type { exerciseQuestion, exerciseAnswer } from '../../../../../../lib/interfaceHandler';
import LinkingElement  from './LinkingElement';


interface LinkingExProps {
    question: exerciseQuestion;
    checkSignal: number;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}

function LinkingExercise({ question, checkSignal, checkDoneSignal, setExerciseState } : LinkingExProps) {

    const [wrongAns, setWrongAns] = React.useState<exerciseAnswer[]>(
        () => question.answer.map((a) => ({ ...a }))
    );
    const [correctAns, setCorrectAns] = React.useState<exerciseAnswer[]|null>(null)


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
            {//correctAns?.map((ans, ))
            }
            {wrongAns.map((ans, id) => (
                <LinkingElement key={id}
                    id={ans.answerID}
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