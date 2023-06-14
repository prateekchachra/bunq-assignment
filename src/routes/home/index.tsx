// You need to login first in case the access is unauthorized
import React from 'react'
import { Chat, User } from 'types';
import { useNavigate } from "react-router-dom";
import { ChatCard } from 'components/chat-card';
import { UserCard } from 'components/user-card';
import { List } from 'components/list';
import { Title } from 'components/title';
import { styled } from 'styled-components';

const USER_1: User = {  
    id: 1,
    userName: "alice1",
    firstName: "Alice",
    dateOfJoining: new Date('28-01-2023 18:00:00.000'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar.png',
};
const USER_2: User = {
    id: 2,
    userName: "denise1",
    firstName: "Denise",
    dateOfJoining: new Date('24-05-2023 18:00:00.000'),
    userAvatar: 'https://www.w3schools.com/howto/img_avatar2.png',
};
const users: User[] = [USER_1, USER_2];

const chats: Chat[] = [
    {
        id: 1,
        messages: [
            {
                id: 1,
                user: USER_1,
                message: "Hello!",
                dateTime: new Date("31-05-2023")
            },
            {
                id: 2,
                user: USER_2,
                message: "Hi!",
                dateTime: new Date("31-05-2023")
            }
        ]
    },
    {
        id: 2,
        messages: [
            {
                id: 1,
                user: USER_1,
                message: "Oh hi there!",
                dateTime: new Date("02-05-2023")
            },
            {
                id: 2,
                user: USER_2,
                message: "Hi let's talk about Bunq!",
                dateTime: new Date("03-05-2023")
            }
        ]
    }
];

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`
const Home: React.FC = () => {
    const navigate = useNavigate();


    const onUserCardClick = (user: User) => navigate(`user/${user.id}`)
    const onChatCardClick = (chat: Chat) => navigate(`chat/${chat.id}`)
    return (
        <HomeContainer>
            <Title>Welcome Prateek!</Title>
            <List title="Users to start a chat!" items={users}
            renderItem={(item: User) => <UserCard user={item} onUserCardClick={onUserCardClick.bind(item)} />}/>
            <List title="Here are some existing chats for you to be a part of!" items={chats}
            renderItem={(item: Chat) => <ChatCard chat={item} onChatCardClick={onChatCardClick.bind(item)} />}/>
        </HomeContainer>
    )
}

export default Home;
// Chat with our users - user card list
// View conversations - chat card list