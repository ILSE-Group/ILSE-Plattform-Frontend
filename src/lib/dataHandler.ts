import { getFromLocalStorage, saveToLocalStorage } from "./localStorageHandler";
import { getRoomTypes } from "./pageContentHandler";

export interface roomListTypes {
  name: string;
  imageSrc: string;
  description: string;
}

export function getRoomList() {
    let roomInfoString:string = getFromLocalStorage("roomList");
    
    if(roomInfoString === null || roomInfoString.length === 0) {
        roomInfoString = getRoomTypes();
        saveToLocalStorage("roomList", roomInfoString);
    }
    return roomInfoString;
}