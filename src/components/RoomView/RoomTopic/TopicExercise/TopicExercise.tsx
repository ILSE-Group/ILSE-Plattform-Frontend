import './TopicExercise.scss';

import type { roomTopicExercise } from '../../../../lib/dataHandler';

import MultipleChoiceExercise from './ExerciseTypes/MultipleChoiceExercise/MultipleChoiceExercise';


interface TopicExerciseProps {
    exercise: roomTopicExercise;
    checkSignal: boolean;
    checkDoneSignal: () => void;
    exerciseCorrect: boolean;
}


function TopicExercise({ exercise, checkSignal, checkDoneSignal, exerciseCorrect } : TopicExerciseProps) {

    return(
        <div className="exercise-wrapper">
            { exercise.exerciseType === "multiple-choice" &&
                <MultipleChoiceExercise 
                    key={exercise.question.questionText}
                    question={exercise.question} 
                    checkSignal={checkSignal} 
                    checkDoneSignal={checkDoneSignal}
                    exerciseCorrect={exerciseCorrect}
                />
            }
        </div>
    );

}

export default TopicExercise;