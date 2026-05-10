import './SingleChoiceElement.scss';

import React from "react";

import type { exerciseAnswer } from '../../../../../../lib/dataHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';


interface SingleChoiceProps {
    answer: exerciseAnswer;
    checkAnswerSignal: boolean;
    notifyUserSignal: boolean;
    index: number;
    reportAnswerState: (index: number, state: number) => void;
    answerState: number;
}

function SingleChoice({answer, checkAnswerSignal, notifyUserSignal, index, reportAnswerState, answerState} : SingleChoiceProps) {
    
    const [answerChecked, setAnswerChecked] = React.useState(false);
    const [answerValid, setAnserValidity] = React.useState(answerState);

    const handleCheckChange = () => {
        setAnswerChecked(!answerChecked);
    }

    // recieve signal to check the answer and 
    // return the answer-state
    React.useEffect(() => {
        if (!checkAnswerSignal)
            return;
    
        let active : boolean = true;
    
        async function checkAnswer() {
            console.log(answerValid);
            // answer wrong
            if( answer.isCorrect != answerChecked ) {
                answerState = AnswerState.WRONG;

                // mark choice as false
                if( notifyUserSignal ) {
                    setAnserValidity(answerState);
                }
            }
            // answer right
            else {
                answerState = AnswerState.CORRECT;

                // mark the choice as correct
                if( notifyUserSignal ) {
                    setAnserValidity(answerState);
                }
            }

            reportAnswerState(index, answerState);
            console.log(answerValid)
        }
    
        checkAnswer();
    
        return () => { 
            active = false; 
        };
    }, [checkAnswerSignal, answerState])


    return(
        <div className={`choice-wrapper 
         ${ answerValid === AnswerState.CORRECT ? 'correct'
          : answerValid === AnswerState.WRONG ? 'wrong': '' }`}
        >
            <input className='choice-checkbox'
                type='checkbox' 
                checked={answerChecked}
                onChange={handleCheckChange}
            />
            <p className='coice-text'>
                {answer.answerText}
            </p>
        </div>
    );

}

export default SingleChoice;