import type { roomList, roomContent, feedbackContent, webToken, registerSignalContent, loginSignalContent, profileContent, createdStudentsInfo } from "./interfaceHandler";

import { API_URL, getLoginToken } from "./globalVars";
import { sanitizeString, processForAPISend } from "./stringHandler";


//===================================================
//====                  RECIEVE                 =====
//===================================================
// TODO
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

// TODO
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
        roomID: 0,
        roomName: roomName,
        roomTopic: [
            {
                topicID: 0,
                topicName: 'topic One Name',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "answer one",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
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
                topicID: 1,
                topicName: 'topic Two Name',
                exercise: {
                    exerciseType: "linking",
                    completed: false,
                    question: {
                        questionText: "Please link them together",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "answer one",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 1,
                                answerText: "answer two",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 2,
                                answerText: "answer three",
                                isCorrect: true,
                                fitsTo: 4,
                            },
                            {
                                answerID: 3,
                                answerText: "answer four",
                                isCorrect: true,
                                fitsTo: 5,
                            },
                            {
                                answerID: 4,
                                answerText: "answer five",
                                isCorrect: true,
                                fitsTo: 2,
                            },
                            {
                                answerID: 5,
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
                topicID: 2,
                topicName: "topic Three Name",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "why...",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "answer one",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "answer two",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
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

// --------------------Profile-Data----------------------
export function recieveProfileData() : profileContent {
    const profileData : profileContent = {
        username: "OP-teacher",
        userType: "teacher",
        userIconSrc: "../../assets/logo.svg",
        level: 20,
        levelDesc: "Profi",
        levelProgress: 80,
        studentsInfo: [
            {
                studentName: 'epicLion',
                studentProgress: [
                    {
                        roomID: 0,
                        roomName: "Passwort-Sicherheit",
                        roomProgress: 89,
                    },
                    {
                        roomID: 1,
                        roomName: "Cybermobbing",
                        roomProgress: 16,
                    },
                    {
                        roomID: 2,
                        roomName: "Phishing",
                        roomProgress: 16,
                    },
                ]
            },
            {
                studentName: 'shyCobra',
                studentProgress: [
                    {
                        roomID: 0,
                        roomName: "Passwort-Sicherheit",
                        roomProgress: 0,
                    },
                    {
                        roomID: 1,
                        roomName: "Cybermobbing",
                        roomProgress: 100,
                    },
                    {
                        roomID: 2,
                        roomName: "Phishing",
                        roomProgress: 49,
                    },
                ]
            },
        ],
        roomsProgress: [
            {
                roomID: 0,
                roomName: "Passwort-Sicherheit",
                roomProgress: 100,
            },
            {
                roomID: 1,
                roomName: "Cybermobbing",
                roomProgress: 98,
            },
            {
                roomID: 2,
                roomName: "Phishing",
                roomProgress: 89,
            },
        ]
    }

    return profileData as profileContent;
}

//===================================================
//====                    SEND                   ====
//===================================================

// ---------------------Account-Mgmt---------------------
// TODO
/** processes the login values and sends them to the api
 * @returns webToken, on error: null */
export function sendLoginData( username : string, password : string ) : webToken|null  {
    let name: string = processForAPISend(username);
    let pass: string = processForAPISend(password);

    let signalContent : loginSignalContent = {
        username: name,
        password: pass,
    }

    // TODO: remove(testdata)
    let token : webToken = {
        username: "testuser",
        date: Date.now(),
    }

    return token;
}

// TODO
/** sends a signup call to the api 
 * @returns empty string, if a account was created, on error: error-message */
export function sendSignupData( username : string, password : string ) : string {
    let name: string = processForAPISend(username);
    let pass: string = processForAPISend(password);

    let signalContent : registerSignalContent = {
        username: name,
        password: pass,
    }

    JSON.stringify(signalContent);

    return "";
}

// TODO
export function sendLogoutSignal( ) {
    

}

// TODO
export function addNewStudents( count : number ) : createdStudentsInfo {
    
    const addedStudents : createdStudentsInfo = {
        studentInfo : [
            {
                username: "angrySloth",
                tempPassword: "asdfasdfasdf",
            },
            {
                username: "frightendGorilla",
                tempPassword: "fdsafdsafdsa",
            },
        ],
    };

    return addedStudents as createdStudentsInfo;
}

// --------------------Feedback-Mgmt---------------------
export function sendFeedback( feedbackText : string ) : void {
    // check validity
    if( feedbackText === null || typeof feedbackText != 'string' || feedbackText.length <= 0  )
        return;

    // get and sanitize feedback
    let sanitizedFeedback = sanitizeString(feedbackText);

    if( sanitizedFeedback.length <= 0 )
        return;

    // get username as string
    let user : string = "";
    let token : webToken|null = getLoginToken();
    if( token != null ) {
        if( typeof token.username === 'string' )
            user = token.username;
    }
   
    // create roomContent json object
    let content : feedbackContent =  { 
        username: user,
        feedbackText: sanitizedFeedback,
    } as feedbackContent;

    let jsonString : string = JSON.stringify(content);

    // send json to API
    // TODO

}

// --------------------Content-Mgmt----------------------
// TODO
/** sends the topic status to the api when topic is completed
 */
export function sendTopicStatus( roomID: number, topicID: number, complete: boolean ) {
    if( !complete )
        return;


}