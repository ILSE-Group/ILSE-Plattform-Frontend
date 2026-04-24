import './AboutFeedback.scss'

import { sanitizeInput } from '../../../lib/inputHandler';


function AboutFeedback() {
    const feedbackInputBox : HTMLInputElement = document.getElementById('feedback-textbox') as HTMLInputElement;

    function sendFeedback() {
        const feedbackText: string = feedbackInputBox.value;

        if(feedbackText === null || feedbackText.trim().length === 0) {
            cleanupFeedback();
            return;
        }

        //TODO: error-checking, remove alert, sendingLogic
        let input: string = sanitizeInput(feedbackText);

        window.alert(input);
        feedbackInputBox.placeholder = "Vielen Dank für Ihr Feedback.";
        cleanupFeedback();
    }

    function cleanupFeedback() {
        feedbackInputBox.value = "";
    }

    return (
        <section className="about-feedback-wrapper">
            <p className='feedback-intro-text'>Bitte schreiben Sie uns, falls Sie Feedback haben.</p>

            <textarea 
                className='feedback-textbox' id='feedback-textbox'
                placeholder='Wir sind offen für Kommentare, Anregungen und Kritik.'
            />
            <p onClick={sendFeedback} className='feedback-send-btn highlight-btn-medium'>Senden</p>
        </section>
    );

}

export default AboutFeedback;