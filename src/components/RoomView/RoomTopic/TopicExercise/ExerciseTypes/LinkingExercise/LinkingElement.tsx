import './LinkingElement.scss';

import React from 'react';

import type { exerciseAnswer } from "../../../../../../lib/interfaceHandler";


interface LinkingElemProps {
    id: number;
    answer: exerciseAnswer;
    setAnswerState: (id : number, isActive : boolean) => void;
    resetAnswer: boolean;
    setInactive: boolean;
}

function LinkingElement( { id, answer, setAnswerState, resetAnswer, setInactive  } : LinkingElemProps ) {

    const elementRef = React.useRef<HTMLParagraphElement | null>(null);

    const [isActive, setIsActive] = React.useState(false);

    const toggleIsActive = () => {
        setIsActive(!isActive);
        setAnswerState(id, isActive);
    }


    React.useEffect(() => {
        if( !resetAnswer )
            return;

        setIsActive(false);

    }, [resetAnswer]);

    React.useEffect(() => {
        if( !setInactive )
            return;

        if( elementRef.current ) {
            elementRef.current.style.pointerEvents = 'none';
        }
        setIsActive(false);

    }, [setInactive]);
 

    return (
        <div className={`element-wrapper ${isActive ? 'active' : ''} `} 
            onClick={toggleIsActive}
            ref={elementRef}
        >
            <p className='element-text'>
                { answer.answerText }
            </p>
        </div>
    )

}

export default LinkingElement;