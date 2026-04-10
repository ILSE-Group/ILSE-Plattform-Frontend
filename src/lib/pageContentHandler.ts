
//returns the room types:
// name, description and img_src 
// for the Information Card as JSON string
export function getRoomTypes() {
    //TODO: implement with json
    const data = {
        room1: {
        name: "Passwort-Sicherheit",
        imageSrc: "../assets/logo.svg",
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
    return JSON.stringify(data);
}


//returns all room topic contents as JSON string
export function getRoomContent(roomName:string) {
    //TODO: implement with json
    return roomName;
}
