import './LinkingElement.scss';

import type { exerciseAnswer } from "../../../../../../lib/interfaceHandler";


interface LinkingElemProps {
    id: number;
    answer: exerciseAnswer;
}


function LinkingElement( { id, answer } : LinkingElemProps ) {

    return (
        <div className="element-wrapper">
            <p className='element-text'>
                { answer.answerText }
            </p>
        </div>
    )

}

export default LinkingElement;