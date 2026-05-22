import  React from 'react';

import './AboutFeedback.scss'

import { sanitizeString } from '../../../lib/stringHandler';


function AboutFeedback() {
    
    const feedbackInBoxRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [placeholderText, setPlaceholder] = React.useState("Wir sind offen für Kommentare, Anregungen und Kritik.");

    function commitFeedback() {
        let feedbackText: string;

        if( !feedbackInBoxRef.current ) {
            return;
        }

        feedbackText = sanitizeString(feedbackInBoxRef.current.value);

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
        if( feedbackInBoxRef.current )
            feedbackInBoxRef.current.value = "";
    }

    function sendFeedbackToAPI() {
        //TODO
    }

    return (
        <section className="about-feedback-wrapper">
            <p className='feedback-intro-text'>Bitte schreiben Sie uns, falls Sie Feedback haben.</p>

            <textarea 
                className='feedback-textbox' 
                id='feedback-textbox'
                placeholder={placeholderText}
                ref={feedbackInBoxRef}
            />
            <p onClick={() => commitFeedback()} className='feedback-send-btn highlight-btn-medium'>Senden</p>
        </section>
    );

}

export default AboutFeedback;