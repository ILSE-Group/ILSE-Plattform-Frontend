
export interface apiData {

}

// room-list types 
//  used in: CardsPage, Header, Footer
export interface roomList extends apiData {
  [key: string]: roomListItem;
}
export interface roomListItem {
    name: string;
    imageSrc: string;
    description: string;
}

// room-content types
//  used in: RoomView page
export interface roomContent extends apiData {
    roomID: number;
    roomName: string;
    roomTopic : roomTopic[];
}
export interface roomTopic {
    topicID: number;
    topicName: string;
    exercise: roomTopicExercise;
    descriptionText: string;
}
export interface roomTopicExercise {
    exerciseType: string;
    completed: boolean;
    question: exerciseQuestion;
}
export interface exerciseQuestion {
    questionText: string;
    answer : exerciseAnswer[];
}
export interface exerciseAnswer {
    answerID: number;
    answerText: string;
    isCorrect: boolean;
    fitsTo: number;
}

// profile data
// used in Profile page
export interface profileContent extends apiData {
    username: string;
    userType: string;
    userIcon: profileIconElement;
    level: number;
    levelDesc: string;
    levelProgress: number;
    studentsInfo: profileStudentsInfo[] | null;
    roomsProgress: profileRoomsProgress[];
}
export interface profileStudentsInfo {
    studentName: string;
    studentIcon: profileIconElement;
    studentProgress: profileRoomsProgress[];
}
export interface profileRoomsProgress {
    roomID: number;
    roomName: string;
    roomProgress: number;
}


export interface profileIconContent extends apiData {
    icon: profileIconElement[];
}
export interface profileIconElement {
    iconID: number;
    iconBgColorHex: string;
    iconSrc: string;
}

// teacher request to manage student account
// with managementType: 'add', 'delete', 'passReset'
export interface requestStudentManagement extends apiData {
    managementType: string;
    userName: string | null;
    studentCount: number | null;
}

// request to manage own account
// with managementType: 'iconChange', 'passCange', 'accountDel'
export interface requestAccountManagement extends apiData {
    managementType: string;
    managementArg: string | profileIconElement;
}

export interface createdStudentsInfo extends apiData {
    studentInfo: newStudentInfo[];
}
export interface newStudentInfo {
    username: string;
    tempPassword: string;
}

// feedback text
//  used in: AboutFeedback
export interface feedbackContent extends apiData {
    username: string;
    feedbackText: string;
}

// JSON web token
export interface webToken extends apiData {
    username: string;
    date: number;
}

export interface loginSignalContent extends apiData {
    username: string;
    password: string;
}

