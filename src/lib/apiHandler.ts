import type { roomList, roomContent,  } from "./interfaceHandler";

/**
 * Returns all rooms with name, image-source and desription
 * @returns roomList json, on error: null
 */
export function recieveRoomsList() : roomList {
    //TODO: implement with json
    const data : roomList = {
        room1: {
            name: "Passwort-Sicherheit",
            imageSrc: "../../../../assets/logo.svg",
            description: "Wie lang und kompliziert soll mein Passwort sein? Wie schuetze ich mein Passwort?",
        },
        room2: {
            name: "Cybermobbing",
            imageSrc: "../assets/logo.svg",
            description: "Wie verhalte ich mich im Internet? An wen kann ich mich wenden, wenn es zu spaet ist?",
        },
        room3: {
            name: "Phishing",
            imageSrc: "../assets/logo.svg",
            description: "Wie erkenne ich eine Phishing-Mail? Was ist zu tun, wenn ich meine Daten eingegeben habe?",
        },
        room4: {
            name: "room4",
            imageSrc: "../assets/logo.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    };
    return data as roomList;

    /*
    return fetch('room/List/Url')
        .then(res => res.json())
        .then(res => {return res as roomList[] }
    );
    */
}


/** 
 * Returns the room content as json object
 * @returns roomContent JSON, on error: null
*/ 
export function recieveRoomContent(roomName : string) : roomContent {
    //TODO: implement with json
    /*
    let targetRoom : string = sanitizeString(roomName);
    if( targetRoom.length <= 0 )
        return null;

    return fetch('room/content/url/'.append(targetRoom))
        .then(res => res.json())
        .then(res => {return res as roomContent }
    );
    */

    const data : roomContent = {
        roomName: roomName,
        roomTopic: [
            {
                topicName: 'topic Two Name',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                id: 0,
                                answerText: "answer one",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                id: 1,
                                answerText: "answer two",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                        ]
                    }
                },
                descriptionText: "some explaining text",
            },
            {
                topicName: 'topic One Name',
                exercise: {
                    exerciseType: "linking",
                    completed: false,
                    question: {
                        questionText: "Please link them together",
                        answer: [
                            {
                                id: 0,
                                answerText: "answer one",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                id: 1,
                                answerText: "answer two",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                id: 2,
                                answerText: "answer three",
                                isCorrect: true,
                                fitsTo: 4,
                            },
                            {
                                id: 3,
                                answerText: "answer four",
                                isCorrect: true,
                                fitsTo: 5,
                            },
                            {
                                id: 4,
                                answerText: "answer five",
                                isCorrect: true,
                                fitsTo: 2,
                            },
                            {
                                id: 5,
                                answerText: "answer six",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "some explaining text",
            },
            {
                topicName: "topic Three Name",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                id: 0,
                                answerText: "answer one",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                id: 1,
                                answerText: "answer two",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                id: 2,
                                answerText: "answer three",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                        ]
                    }
                },
                descriptionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        ]
    };

    return data as roomContent;
}
