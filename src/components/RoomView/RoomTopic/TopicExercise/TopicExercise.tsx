import './TopicExercise.scss';

import MultipleChoiceExercise from './ExerciseTypes/MultipleChoiceExercise/MultipleChoiceExercise';

function TopicExercise() {

    return(
        <div className="exercise-wrapper">
            <MultipleChoiceExercise />
        </div>
    );

}

export default TopicExercise;