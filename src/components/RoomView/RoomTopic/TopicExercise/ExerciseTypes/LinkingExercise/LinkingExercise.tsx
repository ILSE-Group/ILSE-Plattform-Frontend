import './LinkingExercise.scss';
import React from 'react';
import type { exerciseQuestion } from '../../../../../../lib/interfaceHandler';
import LinkingElement from './LinkingElement';

interface LinkingExProps {
    question: exerciseQuestion;
    checkSignal: number;
    checkDoneSignal: () => void;
    setExerciseState: (state: boolean) => void;
}

function LinkingExercise({ question, checkSignal, checkDoneSignal, setExerciseState }: LinkingExProps) {

    // hier deklarieren wir die States für die Signale
    const [resetSignal, setResetSignal] = React.useState(false);
    const [inactiveSignal, setInactiveSignal] = React.useState(false);

    const [wrongAns, setWrongAns] = React.useState<any[]>(
        () => question.answer.map((a) => ({ ...a }))
    );

    const [answerState, setAnswerState] = React.useState<boolean[]>(
        () => question.answer.map(() => false)
    );

    const setAnswerActive = (id: number, isActive: boolean) => {
        setAnswerState(prev => {
            const next = [...prev];
            next[id] = isActive;
            return next;
        });
    };

    // Matching-Logik (hier werden die States nun gefunden)
    React.useEffect(() => {
        const activeIndices = answerState
            .map((isActive, idx) => (isActive ? idx : -1))
            .filter(idx => idx !== -1);

        if (activeIndices.length === 2) {
            const [idx1, idx2] = activeIndices;
            const ans1 = question.answer[idx1];
            const ans2 = question.answer[idx2];

            const isMatch = (ans1.answerID === ans2.fitsTo) || (ans2.answerID === ans1.fitsTo);

            if (isMatch) {
                setInactiveSignal(true);
                setTimeout(() => setInactiveSignal(false), 100);
            } else {
                setResetSignal(true);
                setTimeout(() => setResetSignal(false), 100);
            }
            
            setAnswerState(question.answer.map(() => false));
        }
    }, [answerState, question.answer]);

    return (
        <div className='linking-wrapper'>
            {wrongAns.map((ans, id) => (
                <LinkingElement 
                    key={id}
                    id={id}
                    answer={ans}
                    setAnswerState={setAnswerActive}
                    // Hier verwenden wir jetzt die States
                    resetAnswer={resetSignal}
                    setInactive={inactiveSignal}
                />
            ))}
        </div>
    );
}

export default LinkingExercise;