import './MultipleChoiceExercise.scss';

import SingleChoice from './SingleChoiceElement';


function MultipleChoiceExercise() {

    return (
        <div>
            <h1>Frage</h1>

            <div className='choices-wrapper'>
                <SingleChoice />
                <SingleChoice />
            </div>
        </div>
    );

}

export default MultipleChoiceExercise;