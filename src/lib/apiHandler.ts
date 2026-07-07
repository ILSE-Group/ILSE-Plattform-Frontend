import { useEffect, useState } from "react";

import type { roomList, roomContent, feedbackContent, webToken, loginSignalContent, profileContent, createdStudentsInfo, requestStudentManagement, requestAccountManagement, profileIconElement, apiData } from "./interfaceHandler";

import { UserManagementType, AccountManagementType } from "./ManagementType";
import { API_URL, getLoginToken } from "./globalVars";
import { sanitizeString, processForAPISend } from "./stringHandler";

type UserManagement = typeof UserManagementType[keyof typeof UserManagementType];
type AccountManagement = typeof AccountManagementType[keyof typeof AccountManagementType];


//===================================================
//====                  RECIEVE                 =====
//===================================================
// TODO
function getDataFromAPI( subUrl : string ) : apiData | null {
    const [result, setResult] = useState<apiData | null>(null);

    useEffect(() => {
        async function loadResult() {
            try {
                setResult(await receiveDataAsync(subUrl));
            } catch (e) {
                setResult(null);
            }
        }

        loadResult();

        return;
    }, [subUrl]);

    return result;
}
async function receiveDataAsync( subUrl : string ) : Promise<apiData | null>  {
    const targetUrl = new URL(subUrl, API_URL).toString();

    const response = await fetch(targetUrl, {
        method: "GET",
        headers: { 
            Accept: "application/json" 
        },
    });

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as apiData;
}

/**
 * Returns all rooms with name, image-source and desription
 * @returns roomList json, on error: null
 */
export function recieveRoomsList() : roomList {
    /*
    const url : string = 'topics';
    let content : apiData | null = getDataFromAPI(url);

    while ( content == null ) {
        content = getDataFromAPI(url);
    }
    return content as roomList;
    */

    const data : roomList = {
        room1: {
            name: "Passwort-Sicherheit",
            imageSrc: '/thumbnails/passSecThumb.jpg',
            description: "Wie lang und kompliziert soll mein Passwort sein? Wie schütze ich mein Passwort?",
        },
        room2: {
            name: "Cybermobbing",
            imageSrc: '/thumbnails/cyberMobThumb.jpg',
            description: "Wie verhalte ich mich im Internet? An wen kann ich mich wenden, wenn es zu spät ist?",
        },
        room3: {
            name: "Phishing",
            imageSrc: '/thumbnails/phishingThumb.jpg',
            description: "Wie erkenne ich eine Phishing-Mail? Was ist zu tun, wenn ich meine Daten eingegeben habe?",
        },
        /*room4: {
            name: "test",
            imageSrc: "../src/assets/logo.svg",
            description: "Lorem ipsum",
        }*/
    };
    return data as roomList;

}

// TODO
/** 
 * Returns the room content as json object
 * @returns roomContent JSON, on error: null
*/ 
export function recieveRoomContent(roomName : string) : roomContent | null {
    /*
    roomName = sanitizeString(roomName);
    if( roomName.length <= 0 )
        return null;
    
    const url : string = `topics/${roomName}/rooms`;
    let content : apiData | null = getDataFromAPI(url);

    return content as roomContent;
    */
    const passwordSecContent : roomContent = {
        roomID: 0,
        roomName: "Passwort-Sicherheit",
        roomTopic: [
            {
                topicID: 0,
                topicName: 'Passwort Eigenschaften',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Was macht ein Passwort besonders sicher?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Es enthält den Namen und das Geburtsdatum.",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Es enthält mindestens 12 verschiedene Groß-/Kleinbuchstaben, Zahlen sowie Sonderzeichen.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Es ist kurz und ist leicht zu merken.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Wenn man das Passwort auf mehreren Webseiten oder Konten benutzt.",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Ein Passwort bezeichnet man als gut, wenn es andere Personen oder Angreifer schwierig haben, das Passwort zu erraten.",
            },
            {
                topicID: 1,
                topicName: 'Internet Sicherheit',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Warum ist es gefährlich, Programme von zweifelhaften Internetseiten herunterzuladen und zu installieren?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Weil solche Programme den Computer physisch beschädigen können. (z.B die Festplatte zum schmelzen bringen)",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Weil diese Programme meist so groß sind, dass durch die Installation die Festplatte voll wird.",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Weil das Internet nur Programme erlaubt, Die mindestens 50€ kosten.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Weil solche Seiten oft Schadsoftware enthalten, die Passwörter ausspähen oder den Zugriff auf das Konto ermöglichen können.",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Programme von schadhaften Internetseiten sind manchmal illegal und tun oft nicht das, was Sie versprechen.",
            },
            {
                topicID: 2,
                topicName: "Passwort-Maßnahmen",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Welche zusätzliche Maßname wird empfohlen, um das Passwort bzw. sein Konto zu beschützen? ",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Das Passwort regelmäßig ändern.",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Eine 2-Faktor-Authentifizierung benutzen.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Das Passwort einer anderen Person mitteilen, falls man es vergisst.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Das Passwort auf einen Zettel oder einem Notizbuch aufschreiben, um seinen Zugriff nicht zu verlieren.",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Auch gute Passwörter sind nicht zu 100% vor Angriffen sicher.",
            },
            {
                topicID: 3,
                topicName: 'Sichere Passwörter',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Welches der folgenden Passwörter ist das Sicherste?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Passwort123",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "einseHrLanGespasSWortmitKleiNbuchStabeNUndGroßBuchsTabEnOhneReihenfolge",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "klein&GROß-$onderz3ichenZ4Hl3n",
                                isCorrect: true,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "MeinName2026",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Ein sicheres Passwort ist schwierig zu erraten und das Durchprobieren aller möglichen Zeichen dauert sehr lange.",
            },
        ]
    };

    const cybermobbingContent : roomContent = {
        roomID: 1,
        roomName: "Cybermobbing",
        roomTopic: [
            {
                topicID: 0,
                topicName: 'Online-Inhalte',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Warum ist es bei Cybermobbing oft gefährlich, wenn die Inhalte online bleiben?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Weil eine einmal gepostete Beleidigung oder ein peinliches Foto immer wieder geteilt und nach Jahren aufgerufen werden kann.",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Weil das Internet automatisch alle Daten an den Arbeitsgeber schickt.",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Weil man für jeden geposteten Inhalt, der gemeldet wurde, eine hohe Gebühr bezahlen muss.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Weil gepostete Inhalte, die beleidigend oder diffamierend sind als Beweismittel für eine Straftat genutzt werden können.",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "",
            },
            {
                topicID: 1,
                topicName: 'Hilflosigkeit',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Warum fühlen sich Opfer meist hilflos bei Fällen von Cybermobbing? ",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Weil Sie keine Möglichkeit haben, den Computer auszuschalten oder ihr Konto zu deaktivieren.",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Weil Cybermobbing rund um die Uhr stattfindet und die Täter sich hinter Pseudonymen verstecken können.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Weil Cybermobbing nur unter Mitschülerinnen und Mitschülern stattfinden kann.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Weil Täter sehr viel über ihr Opfer herausfinden können und die Onlinebelästigung in das echte Leben übertragen können.",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "",
            },
            {
                topicID: 2,
                topicName: "Gegen-Maßnahmen",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Was kann man gegen Cybermobbing tun?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Eine Vertrauenspersonen informieren. (Eltern, Lehrerinnen und Lehrer, die Polizei)",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Mobbingangriffe dokumentieren und Beweise von Cybermobbing zu sammeln.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Mobber auf der Platform melden und blockieren.",
                                isCorrect: true,
                                fitsTo: 2,
                            },
                        ]
                    }
                },
                descriptionText: "",
            },
            {
                topicID: 3,
                topicName: "Dabei Mitmachen",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Warum ist es gefährlich bei Cybermobbing mitzumachen oder die Inhalte, die beleidigend sind, zu liken oder weiterzuteilen? Auch wenn man niemanden gefährden will?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Weil man automatisch selbst gemobbt wird.",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Weil man durch das Liken und Teilen von Inhalten des Mobbers sein Verhalten verstärkt.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Weil das Internet solche Inhalte normalerweise löscht.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Weil man dadurch trotzdem Mitschuld trägt.",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "",
            },
        ]
    };

    const phishingContent : roomContent = {
        roomID: 2,
        roomName: "Phishing",
        roomTopic: [
            {
                topicID: 0,
                topicName: 'Angriffs-Ziel',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Was ist das Hauptziel von Phishing-Angriffen?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Den Compter des Opfers zu zerstören.",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Die Internetverbindung des Opfers dauerhaft zu trennen.",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Den Nutzer dazu zu bringen, sensible Daten wie Passwörter oder Bankkartennummern preiszugeben.",
                                isCorrect: true,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Kostenlose Spiele auf dem Gerät des Opfers zu Installieren.",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Im Gegensatz zu anderen IT-Angriffen, bei denen die Technik im Vordergrund steht, werden bei Phishing Angriffen menschliche Schwächen ausgenutzt.",
            },
            {
                topicID: 1,
                topicName: 'Unbekannte Links',
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Warum ist es riskant auf einen verdächtigen Link in einer unerwarteten Nachricht zu klicken, Die einen schnell zum Handeln auffordert.",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Weil der Links einen meist auf eine täuschend echt aussehende, aber gefälschte Webseite führt, um persönliche Daten abzugreifen.",
                                isCorrect: true,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Weil der Link einen dazu zwingt, den gesamten Speicher des Computers zu löschen.",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Weil die Seite beim Klicken den Computer sofort neustartet.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Weil man dadurch automatisch Abonnements abschließen kann die man schwer kündigen kann.",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                        ]
                    }
                },
                descriptionText: "Der Text eines Links und die Funktion dahinter sind unterschiedliche Dinge. So kann ein Link smoothies.com heißen aber dich auf klopapier.de leiten.",
            },
            {
                topicID: 2,
                topicName: "Verdächtige Nachricht",
                exercise: {
                    exerciseType: "multiple-choice",
                    completed: false,
                    question: {
                        questionText: "Du bekommst eine verdächtige Nachricht, die behauptet, dass ein Problem mit deinem Account vorliegt. Was solltest du tun?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "Auf den Link klicken, um das Problem so schnell wie möglich zu lösen.",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 1,
                                answerText: "Den Absender auf dem E-Mail-Provider melden.",
                                isCorrect: true,
                                fitsTo: 1,
                            },
                            {
                                answerID: 2,
                                answerText: "Dem Absender eine Mail schreiben, um nach seinem Arbeitsausweis zu fragen.",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 3,
                                answerText: "Die Nachricht löschen und die offizielle Seite des Dienstes selbst aufrufen, um den Status zu prüfen.",
                                isCorrect: true,
                                fitsTo: 3,
                            },
                            {
                                answerID: 4,
                                answerText: "Die Nachricht an alle Kontakte weiterleiten um Sie zu warnen.",
                                isCorrect: false,
                                fitsTo: 4,
                            },
                        ]
                    }
                },
                descriptionText: "So wie man Social Media Profile kopieren kann, kann man auch Email Nachrichten kopieren und Sie verändern.",
            },
        ]
    };

    // TODO: remove later
    /* const testContent : roomContent = {
        roomID: 1337,
        roomName: "Linking-Test",
        roomTopic: [
            {
                topicID: 0,
                topicName: 'Test',
                exercise: {
                    exerciseType: "linking",
                    completed: false,
                    question: {
                        questionText: "why?",
                        answer: [
                            {
                                answerID: 0,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 3,
                            },
                            {
                                answerID: 1,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 2,
                            },
                            {
                                answerID: 2,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 1,
                            },
                            {
                                answerID: 3,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 0,
                            },
                            {
                                answerID: 4,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 5,
                            },
                            {
                                answerID: 5,
                                answerText: "asdf",
                                isCorrect: false,
                                fitsTo: 4,
                            },
                        ]
                    }
                },
                descriptionText: "testing linking-exercise",
            },
        ]
    }; */

    // TODO: remove later
    switch (roomName) {
        case 'Passwort-Sicherheit':
            return passwordSecContent;
        case 'Cybermobbing':
            return cybermobbingContent;
        case 'Phishing':
            return phishingContent;
        /**/
        default:
            return null;
    }

}

// --------------------Profile-Data----------------------
export function recieveProfileData() : profileContent {
    // TODO: set URL
    /*
    const url : string = '';
    let content : apiData | null = getDataFromAPI(url);

    while( content == null ) {
        content = getDataFromAPI(url);
    }

    return content as profileContent;
    */
    const profileData : profileContent = {
        username: "OP-teacher",
        userType: "teacher",
        userIcon: {
            iconID: 0,
            iconBgColorHex: '#ffffff',
            iconSrc: '/icons/otter.png',
        },
        level: 20,
        levelDesc: "Profi",
        levelProgress: 80,
        studentsInfo: [
            {
                studentName: 'epicLion',
                studentIcon: {
                    iconID: 3,
                    iconBgColorHex: '#234834',
                    iconSrc: '/icons/capybara.png',
                },
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
                studentIcon: {
                    iconID: 8,
                    iconBgColorHex: '#f82f9f',
                    iconSrc: '/icons/racoon.png',
                },
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
function sendDataToAPI( subUrl: string, payload: apiData ) : apiData | null {
    const [result, setResult] = useState<apiData | null>(null);

    useEffect(() => {
        async function loadResult() {
            try {
                setResult(await sendDataAsync(subUrl, payload));
            } catch (e) {
                setResult(null);
            }
        }

        loadResult();

        return;
    }, [subUrl, payload]);

    return result;
}
async function sendDataAsync( subUrl: string, payload: apiData ) : Promise<apiData | null>  {
    const targetUrl = new URL(subUrl, API_URL).toString();

    const response = await fetch(targetUrl, {
        method: "POST",
        headers: { 
            Accept: "application/json" 
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as apiData;
}

// ---------------------Account-Mgmt---------------------
// TODO
/** processes the login values and sends them to the api
 * @returns webToken, on error: null */
export function sendLoginData( username : string, password : string ) : webToken|null  {
    /*
    let name: string = processForAPISend(username);
    let pass: string = processForAPISend(password);

    let signalContent : loginSignalContent = {
        username: name,
        password: pass,
    }
    
    const url : string = 'auth';
    let content : apiData | null = sendDataToAPI(url, signalContent);

    return content as webToken;
    */

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

    let signalContent : loginSignalContent = {
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
    /* 
    const requestContent : requestStudentManagement = {
        managementType: "add",
        studentName: null,
        studentCount: count,
    }
    */
    
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

// TODO
export function manageUserAcc( managementType : UserManagement, userName : string ) : string {

    let management : string = '';
    switch(managementType) {
        case UserManagementType.ADD:
            management = 'add';
            break;
        case UserManagementType.DELETE:
            management = 'delete';
            break;
        case UserManagementType.PASSWORD_RESET:
            management = 'passReset';
            break;
        default:
            return '';

    }
    
    const requestContent : requestStudentManagement = {
        managementType: management,
        userName: userName,
        studentCount: null,
    }

    return 'password123';


}

export function manageOwnAcc( managementType : AccountManagement, option : string | profileIconElement ) : string {

    let management : string = '';
    switch(managementType) {
        case AccountManagementType.CHANGE_PROFILE_ICON:
            management = 'iconChange';
            if( typeof option === 'string' )
                return "Fehlerhafte Anfrage. Bitte versuchen Sie es erneut!";
            break;
        case AccountManagementType.CHANGE_PASSWORD:
            management = 'passCange';
            if( typeof option !== 'string' )
                return "Fehlerhafte Anfrage. Bitte versuchen Sie es erneut!";
            break;
        case AccountManagementType.DELETE_ACCOUNT:
            management = 'accountDel';
            if( typeof option !== 'string' )
                return "Fehlerhafte Anfrage. Bitte versuchen Sie es erneut!";
            break;
        default:
            return '';

    }

    if( typeof option == 'string' && option.trim().length <= 0 )
        option = '';
    
    const requestContent : requestAccountManagement = {
        managementType: management,
        managementArg: option,
    }

    return 'password123';


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