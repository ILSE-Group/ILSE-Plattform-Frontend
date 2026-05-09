import './SingleChoiceElement.scss';

import React from "react";

import type { exerciseAnswer } from '../../../../../../lib/dataHandler';



interface SingleChoiceProps {
    answer: exerciseAnswer;
}

function SingleChoice({answer} : SingleChoiceProps) {

    const [answerChecked, setAnswerChecked] = React.useState(false);

    const handleCheckChange = () => {
        setAnswerChecked(!answerChecked);
    }

    return(
        <div className="choice-wrapper">
            <input type='checkbox' onChange={handleCheckChange} />
            <p>{answer.answerText}</p>
        </div>
    );

}

export default SingleChoice;