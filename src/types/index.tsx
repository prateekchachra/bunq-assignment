export type User = {
    id: number;
    userName: string;
    userAvatar: string;
    firstName: string;
    dateOfJoining: Date;
}

export type Message = {
    id: number;
    message: string;
    user: User;
    dateTime: Date;
}
export type Chat = {
    id: number;
    messages: Message[];
}
