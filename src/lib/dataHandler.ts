import { getFromLocalStorage, saveToLocalStorage } from "./localStorageHandler";
import { recieveRoomsList } from "./apiHandler";


// room-list types
export interface roomList {
  [key: string]: roomListItem;
}
export interface roomListItem {
    name: string;
    imageSrc: string;
    description: string;
}

// room-content types
export interface roomContent {
    name: string;
    [key: string] : roomContentTopic | string;
}
export interface roomContentTopic {
    exercise: roomTopicExercise
    text: roomTopicText
}
export interface roomTopicExercise {
    name: string
}
export interface roomTopicText {
    name: string
}

//-----------------Room-List-Info-----------------

function getRoomsList() : roomList {
    let roomInfoString:string = getFromLocalStorage("roomList");
    
    let roomInfoList: roomList;

    // get roomList from local storage
    if(roomInfoString !== null && roomInfoString.length !== 0) {
        try {
            roomInfoList = JSON.parse(roomInfoString);
            return roomInfoList;
        } catch (error) {
            //TODO: error handling
        }
    }
    // get roomList from API and save to local storage
    roomInfoList = recieveRoomsList();
    saveToLocalStorage("roomList", JSON.stringify(roomInfoList));
    
    return roomInfoList;
}

export function getRoomListItems() : roomListItem[] {
  const roomList: roomList = getRoomsList();

  return Object.values(roomList);
}

export function getRoomNames() : string[] {
    const roomList: roomList = getRoomsList();

    let roomNames: string[] = Object.values(roomList).map(r => r.name);

    if(roomNames === null || roomNames.length == 0) {
        return [""];
    }
    return roomNames;
}



//------------------Room-Content------------------

export function getRoomContent() {
    
}