
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
export interface profileContent {
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
    studentProgress: profileRoomsProgress[];
}
export interface profileRoomsProgress {
    roomID: number;
    roomName: string;
    roomProgress: number;
}


export interface profileIconContent {
    icon: profileIconElement[];
}
export interface profileIconElement {
    iconID: number;
    iconBgColorHex: string;
    iconSrc: string;
}

// teacher request to manage student account
// with managementType: 'add', 'delete', 'passReset'
export interface requestStudentManagement {
    managementType: string;
    userName: string | null;
    studentCount: number | null;
}

// request to manage own account
// with managementType: 'iconChange', 'passCange', 'accountDel'
export interface requestAccountManagement {
    managementType: string;
    managementArg: string;
}

export interface createdStudentsInfo {
    studentInfo: newStudentInfo[];
}
export interface newStudentInfo {
    username: string;
    tempPassword: string;
}

// feedback text
//  used in: AboutFeedback
export interface feedbackContent {
    username: string;
    feedbackText: string;
}

// JSON web token
export interface webToken {
    username: string;
    date: number;
}

export interface loginSignalContent {
    username: string;
    password: string;
}

