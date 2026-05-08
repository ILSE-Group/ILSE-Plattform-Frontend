import { getFromLocalStorage, saveToLocalStorage } from "./localStorageHandler";
import { recieveRoomsList, recieveRoomContent } from "./apiHandler";

import { sanitizeString } from "./stringHandler";

// room-list types 
//  used in: CardsPage, Header, Footer
export interface roomList {
  [key: string]: roomListItem;
}
export interface roomListItem {
    name: string;
    imageSrc: string;
    description: string;
}

// room-content types
//  used in: RoomView page
export interface roomContent {
    roomName: string;
    roomTopic : roomTopic[];
}
export interface roomTopic {
    topicName: string;
    exercise: roomTopicExercise;
    descriptionText: string;
}
export interface roomTopicExercise {
    exerciseType: string;
    question: exerciseQuestion;
}
export interface exerciseQuestion {
    questionText: string;
    answer : exerciseAnswer[];
}
export interface exerciseAnswer {
    answerText: string;
    isCorrect: boolean;
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