import { getFromSessionStorage, saveToSessionStorage } from "./sessionStorageHandler";
import { recieveRoomsList, recieveRoomContent } from "./apiHandler";

import type { roomList, roomListItem, roomContent } from "./interfaceHandler";
import { sanitizeString } from "./stringHandler";

//-----------------Room-List-Info-----------------
/**
 * 
 * @returns roomsList on success, else null
 */
function getRoomsList() : roomList {
    let roomInfoString:string = getFromSessionStorage("roomList");
    
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
    if( roomInfoList !== null)
        saveToSessionStorage("roomList", JSON.stringify(roomInfoList));
    
    return roomInfoList;
}

export function getRoomListItems() : roomListItem[] {
  const roomList: roomList = getRoomsList();

  return Object.values(roomList);
}

export function getRoomNames() : string[] {
    const roomList: roomList = getRoomsList();

    let roomNames: string[] = Object.values(roomList).map(r => sanitizeString(r.name));

    if(roomNames === null || roomNames.length == 0) {
        return [""];
    }
    return roomNames;
}



//------------------Room-Content------------------

export function getRoomContent(roomName: string) : roomContent {
    return recieveRoomContent(roomName);
}