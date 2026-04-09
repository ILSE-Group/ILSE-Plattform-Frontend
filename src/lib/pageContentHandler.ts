
//returns the room types:
// name, description and img_src 
// for the Information Card as JSON string
export function getRoomTypes() {
    //TODO: implement with json
    const data = {
        room1: {
        name: "room1",
        imageSrc: "../assets/logo.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        room2: {
        name: "room2",
        imageSrc: "../assets/logo.svg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        room3: {
        name: "room3",
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
