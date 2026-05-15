import { useState } from 'react';

import './AboutFeedback.scss'

import { sanitizeString } from '../../../lib/stringHandler';


function AboutFeedback() {
    
    const feedbackInputBox : HTMLInputElement = document.getElementById('feedback-textbox') as HTMLInputElement;
    const [placeholderText, setPlaceholder] = useState("Wir sind offen für Kommentare, Anregungen und Kritik.");

    function commitFeedback() {
        const feedbackText: string = sanitizeString(feedbackInputBox.value);

        // sent a message
        if(feedbackText !== null && feedbackText.length !== 0) {
            setPlaceholder("Vielen Dank für Ihr Feedback!");
            sendFeedbackToAPI();
        }
        else {
            setPlaceholder("Bitte geben Sie ihr Feedback ein");
        }

        cleanupFeedback();
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