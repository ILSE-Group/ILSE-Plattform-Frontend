import type { roomList, roomListItem, roomContent, profileContent, profileIconContent } from "./interfaceHandler";
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

export function getRoomThumbnail( index : number ) : string | null {
    if( typeof index == 'undefined' || index < 0)
        return null;

    let roomThumbnails: string[] = Object.values(getRoomsList()).map(r => r.imageSrc);

    if( roomThumbnails.length < index )
        return null;

    return roomThumbnails[index];
}


//------------------Room-Content------------------
const invalidRoomContent : roomContent = {
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
            },
            descriptionText: 'invalid',
        }
    ]
};
// TODO
export function getRoomContent(roomName: string) : roomContent {

    let sanitizedRoomName = sanitizeString(roomName);
    if(sanitizedRoomName.length <= 0) {
        return invalidRoomContent;
    }

    let roomData : roomContent | null = recieveRoomContent(sanitizedRoomName);
    if( roomData == null )
        return invalidRoomContent;

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

export function getIconsData() : profileIconContent {
    let icons = {
        icon: [
            {
                iconID: 0,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/otter.png',
            },
            {
                iconID: 1,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/axolotl.png',
            },
            {
                iconID: 2,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/bunny.png',
            },
            {
                iconID: 3,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/capybara.png',
            },
            {
                iconID: 4,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/cat.png',
            },
            {
                iconID: 5,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/dog.png',
            },
            {
                iconID: 6,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/fox.png',
            },
            {
                iconID: 7,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/panda.png',
            },
            {
                iconID: 8,
                iconBgColorHex: '#000000',
                iconSrc: '/icons/racoon.png',
            },
        ]
    };

    return icons as profileIconContent;
}

export function getIconSrc(id : number) : string {
    let content : profileIconContent = getIconsData();

    console.log(content.icon.entries.length);

    if( id < 0 || id > content.icon.entries.length ) {
        return '';
    }

    let src : string | undefined = content.icon.at(id)?.iconSrc;
    if( typeof src == 'undefined' )
        return '';

    return src;
}