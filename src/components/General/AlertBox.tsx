import './AlertBox.scss';

import React from 'react';

interface AlertBoxProps {
    titleText: string;
    messageText: string;
    onClose: (result: boolean) => void;
}

function AlertBox( {titleText, messageText, onClose} : AlertBoxProps) {
    
    const handleSelection = ( state : boolean ) => {
        onClose(state);
    }


    return (
        <section className="alert-wrapper">

            <div className='alert-box-wrapper'>
                <p className='alert-header'>
                    {titleText}
                </p>
                <p>{messageText}</p>

                <div className='options-wrapper'>
                    <p className='options-button'
                       onClick={() => handleSelection(true)}>
                        Ja
                    </p>
                    <p className='options-button'
                       onClick={() => handleSelection(false)}>
                        Nein
                    </p>
                </div>
    
            </div>

        </section>
    )
}

export default AlertBox;