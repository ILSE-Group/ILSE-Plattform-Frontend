import './TopicExercise.scss';

import type { roomTopicExercise } from '../../../../lib/dataHandler';

import MultipleChoiceExercise from './ExerciseTypes/MultipleChoiceExercise/MultipleChoiceExercise';


interface TopicExerciseProps {
    exercise: roomTopicExercise
}


function TopicExercise({ exercise } : TopicExerciseProps) {

    return(
        <div className="exercise-wrapper">
            { exercise.exerciseType === "multiple-choice" &&
                <MultipleChoiceExercise question={exercise.question} />
            }
        </div>
    );

}

export default TopicExercise;