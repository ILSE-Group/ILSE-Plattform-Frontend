import type { roomList, roomListItem, roomContent, profileContent } from "./interfaceHandler";
import { sanitizeString } from "./stringHandler";

import { getFromSessionStorage, saveToSessionStorage } from "./sessionStorageHandler";
import { recieveRoomsList, recieveRoomContent, recieveProfileData } from "./apiHandler";


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
// TODO
export function getRoomContent(roomName: string) : roomContent {
    let sanitizedRoomName = sanitizeString(roomName);
    if(sanitizedRoomName.length <= 0) {
        return {
            roomID: 0,
            roomName: 'Invalid Room',
            roomTopic: [
                {
                    topicID: 0,
                    topicName: 'Invalid Topic',
                    exercise: {
                        exerciseType: 'Invalid Exercise',
                        completed: false,
                        question: {
                            questionText: 'Invalid Question',
                            answer: [
                                {
                                    answerID: 0,
                                    answerText: 'Invalid Answer',
                                    isCorrect: false,
                                    fitsTo: 0,
                                }
                            ]
                        }
                    }
                }
            ]
        } as roomContent;
    }

    let roomData : roomContent = recieveRoomContent(sanitizedRoomName);

    while( roomData == null || typeof roomData === 'undefined' )
        roomData = recieveRoomContent(sanitizedRoomName);

    return roomData;
}


//-----------------Profile-Content----------------
// TODO
export function getProfileData() : profileContent {
    let profileData : profileContent = recieveProfileData();

    while( profileData == null || typeof profileData === 'undefined' )
        profileData = recieveProfileData();

    return profileData;
}