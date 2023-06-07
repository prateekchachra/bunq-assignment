
export type User = {
    userName: string;
    userAvatar: string;
    firstName: string;
    dateOfJoining: string; // TODO: moment
}

export type Message = {
    message: string;
    user: User;
    dateTime: string;
}
export type Chat = {
    messages: Message[];
}
