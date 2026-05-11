import './TopicExercise.scss';

import type { roomTopicExercise } from '../../../../lib/dataHandler';

import MultipleChoiceExercise from './ExerciseTypes/MultipleChoiceExercise/MultipleChoiceExercise';


interface TopicExerciseProps {
    exercise: roomTopicExercise;
    checkSignal: boolean;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}


function TopicExercise({ exercise, checkSignal, checkDoneSignal, setExerciseState } : TopicExerciseProps) {

    return(
        <div className="exercise-wrapper">
            { exercise.exerciseType === "multiple-choice" &&
                <MultipleChoiceExercise 
                    key={exercise.question.questionText}
                    question={exercise.question} 
                    checkSignal={checkSignal} 
                    checkDoneSignal={checkDoneSignal}
                    setExerciseState={setExerciseState}
                />
            }
        </div>
    );

}

export default TopicExercise;