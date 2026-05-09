import './MultipleChoiceExercise.scss';

import type {  exerciseQuestion } from '../../../../../../lib/dataHandler';
import SingleChoice from './SingleChoiceElement';


interface MCExProps {
    question: exerciseQuestion;
}

function MultipleChoiceExercise({question} : MCExProps) {

    return (
        <div>
            <h1>{question.questionText}</h1>

            <div className='choices-wrapper'>

                {question.answer.map((ans, id) => (
                    <SingleChoice key={id} answer={ans} />
                ))}
                
            </div>
        </div>
    );

}

export default MultipleChoiceExercise;