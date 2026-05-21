import './SingleChoiceElement.scss';

import React from "react";

import type { exerciseAnswer } from '../../../../../../lib/interfaceHandler';
import { AnswerState } from '../../../../../../lib/AnswerState';


interface SingleChoiceProps {
    answer: exerciseAnswer;
    checkAnswerSignal: number;
    notifyUserSignal: boolean;
    index: number;
    reportAnswerState: (index: number, state: number) => void;
    answerState: number;
}

function SingleChoice({answer, checkAnswerSignal, index, reportAnswerState, answerState} : SingleChoiceProps) {
    
    const [answerChecked, setAnswerChecked] = React.useState(false);

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
            // answer wrong
            if( answer.isCorrect != answerChecked ) {
                answerState = AnswerState.WRONG;
            }
            // answer right
            else {
                answerState = AnswerState.CORRECT;
            }

            reportAnswerState(index, answerState);
        }
    
        checkAnswer();
    
        return () => { 
            active = false; 
        };
    }, [checkAnswerSignal, answerState])


    return(
        <div className='choice-wrapper'>
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