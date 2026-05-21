import './TopicExercise.scss';

import type { roomTopicExercise } from '../../../../lib/interfaceHandler';

import MultipleChoiceExercise from './ExerciseTypes/MultipleChoiceExercise/MultipleChoiceExercise';
import LinkingExercise from './ExerciseTypes/LinkingExercise/LinkingExercise';


interface TopicExerciseProps {
    exercise: roomTopicExercise;
    checkSignal: number;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}


function TopicExercise({ exercise, checkSignal, checkDoneSignal, setExerciseState } : TopicExerciseProps) {

    function getExerciseType() {
        switch( exercise.exerciseType ) {
            case ( "multiple-choice" ):
                return <MultipleChoiceExercise 
                            key={exercise.question.questionText}
                            question={exercise.question} 
                            checkSignal={checkSignal} 
                            checkDoneSignal={checkDoneSignal}
                            setExerciseState={setExerciseState}
                        />;
            case ( "linking" ):
                return <LinkingExercise 
                            key={exercise.question.questionText}
                            question={exercise.question} 
                            checkSignal={checkSignal} 
                            checkDoneSignal={checkDoneSignal}
                            setExerciseState={setExerciseState}
                        />;
            default:
                break;
        }
    }

    
    return(
        <div className="exercise-wrapper">
            {
                getExerciseType()
            }
        </div>
    );

}

export default TopicExercise;