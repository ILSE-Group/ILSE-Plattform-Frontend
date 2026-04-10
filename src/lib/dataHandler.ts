import { getFromLocalStorage, saveToLocalStorage } from "./localStorageHandler";
import { recieveRoomsList } from "./apiHandler";


//-----------------Room-List-Info-----------------
export interface roomListTypes {
  name: string;
  imageSrc: string;
  description: string;
}

export function saveRoomsList() {
    let roomsList:string = JSON.stringify(recieveRoomsList());

    if(roomsList === null || roomsList.trim.length == 0) {
        return;
    }

    saveToLocalStorage("roomList", roomsList);
}

export function getRoomsList() {
    let roomInfoString:string = getFromLocalStorage("roomList");
    
    if(roomInfoString === null || roomInfoString.length == 0) {
        roomInfoString = recieveRoomsList();
        saveToLocalStorage("roomList", roomInfoString);
    }
    return roomInfoString;
}

export function getRoomNames() : string[] {
    let roomList: roomListTypes = JSON.parse(getRoomsList());
    let roomNames: string[] = Object.values(roomList).map(r => r.name);

    if(roomNames === null || roomNames.length == 0) {
        return [""];
    }
    return roomNames;
}



//------------------Room-Content------------------