import './SingleChoiceElement.scss';


function SingleChoice() {

    return(
        <div className="choice-wrapper">
            <input type='checkbox' />
            <p>Answer</p>
        </div>
    );

}

export default SingleChoice;