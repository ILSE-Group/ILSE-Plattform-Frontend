
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
    level: number;
    levelDesc: string;
    levelProgress: number;
    topicsProgress: profileTopicsProgress[];
    studentsInfo: profileStudentsInfo[] | null;
}
export interface profileStudentsInfo {
    studentName: string;
    studentProgress: profileTopicsProgress[];
}
export interface profileTopicsProgress {
    topicName: string;
    topicProgress: number;
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

export interface registerSignalContent {
    username: string;
    password: string;
}
