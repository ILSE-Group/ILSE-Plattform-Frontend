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
    completed: boolean;
    question: exerciseQuestion;
}
export interface exerciseQuestion {
    questionText: string;
    answer : exerciseAnswer[];
}
export interface exerciseAnswer {
    id: number;
    answerText: string;
    isCorrect: boolean;
    fitsTo: number;
}