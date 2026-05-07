import { useState } from 'react';

import './AboutFeedback.scss'

import { sanitizeInput } from '../../../lib/inputHandler';


function AboutFeedback() {
    
    const feedbackInputBox : HTMLInputElement = document.getElementById('feedback-textbox') as HTMLInputElement;
    const [placeholderText, setPlaceholder] = useState("Wir sind offen fuer Kommentare, Anregungen und Kritik.");

    function commitFeedback() {
        const feedbackText: string = sanitizeInput(feedbackInputBox.value);

        if(feedbackText === null || feedbackText.trim().length === 0) {
            cleanupFeedback();
            return;
        }

        setPlaceholder("Vielen Dank fuer Ihr Feedback!");
        cleanupFeedback();

        sendFeedbackToAPI();
    }

    function cleanupFeedback() {
        feedbackInputBox.value = "";
    }

    function sendFeedbackToAPI() {
        //TODO
    }

    return (
        <section className="about-feedback-wrapper">
            <p className='feedback-intro-text'>Bitte schreiben Sie uns, falls Sie Feedback haben.</p>

            <textarea 
                className='feedback-textbox' id='feedback-textbox'
                placeholder={placeholderText}
            />
            <p onClick={() => commitFeedback()} className='feedback-send-btn highlight-btn-medium'>Senden</p>
        </section>
    );

}

export default AboutFeedback;