import type { roomList, roomContent,  } from "./dataHandler";


//returns the room types:
// name, description and img_src 
// for the Information Card as JSON string
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


//returns all room topic contents as JSON string
export function recieveRoomContent(roomName : string) : roomContent {
    //TODO: implement with json
    const data : roomContent = {
        roomName: roomName,
        roomTopic: [
            {
                topicName: 'topic One Name',
                exercise: {
                    exerciseType: "multiple-choice",
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                answerText: "answer one",
                                isCorrect: true,
                            },
                            {
                                answerText: "answer two",
                                isCorrect: true,
                            },
                        ]
                    }
                },
                descriptionText: "some explaining text",
            },
            {
                topicName: "topic Two Name",
                exercise: {
                    exerciseType: "multiple-choice",
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                answerText: "answer one",
                                isCorrect: false,
                            },
                            {
                                answerText: "answer two",
                                isCorrect: true,
                            },
                            {
                                answerText: "answer three",
                                isCorrect: false,
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
