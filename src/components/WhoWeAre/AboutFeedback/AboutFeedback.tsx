import  React from 'react';

import './AboutFeedback.scss'

import { sanitizeString } from '../../../lib/stringHandler';
import { sendFeedback } from '../../../lib/apiHandler';
import { isLoggedIn } from '../../../lib/globalVars';


function AboutFeedback() {
    
    const feedbackInBoxRef = React.useRef<HTMLTextAreaElement | null>(null);
    const [placeholderText, setPlaceholder] = React.useState("Wir sind offen für Kommentare, Anregungen und Kritik.");

    let loggedIn = isLoggedIn();

    function commitFeedback() {
        let feedbackText: string;

        if( !feedbackInBoxRef.current ) {
            return;
        }

        feedbackText = sanitizeString(feedbackInBoxRef.current.value);

        // sent a message
        if(feedbackText !== null && feedbackText.length !== 0) {
            setPlaceholder("Vielen Dank für Ihr Feedback!");
            sendFeedback(feedbackText);
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
    

    return (
        <>
        {loggedIn ? (

            <section className="about-feedback-wrapper">
                <p className='feedback-intro-text'>
                    Bitte schreiben Sie uns, falls Sie Feedback haben.
                </p>

                <textarea 
                    className='feedback-textbox' 
                    id='feedback-textbox'
                    placeholder={placeholderText}
                    ref={feedbackInBoxRef}
                />

                <p className='feedback-send-btn highlight-btn-medium'
                    onClick={() => commitFeedback()}
                >
                    Senden
                </p>
            </section>

            ) : (

                <p className='feedback-intro-text'>
                    Bitte loggen Sie sich ein, um Feedback zu hinterlassen.
                </p>
                
            )
        }
        </>
    );

}

export default AboutFeedback;