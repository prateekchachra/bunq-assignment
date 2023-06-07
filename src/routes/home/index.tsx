// You need to login first in case the access is unauthorized
import React from 'react'
import { Chat, User } from '../../types';
import { ChatCard } from '../../components/chat-card';
import { UserCard } from '../../components/user-card';

const users = [];
const conversations = [];

const Home: React.FC = () => {

    const onUserCardClick = (user: User) => {}
    const onChatCardClick = (chat: Chat) => {}
    return (
        <div>
            <p>Welcome Prateek!</p>
            <p>Users to start a chat!</p>
            <ul>
                {users.map(user => <UserCard user={user} onUserCardClick={onUserCardClick.bind(user)} />)}
            </ul>
            <ul>
            <p>Here are some existing chats for you to be a part of!</p>
                {conversations.map(chat => <ChatCard chat={chat} onChatCardClick={onChatCardClick.bind(chat)} />)}
            </ul>
        </div>
    )
}

export default Home;
// Chat with our users - user card list
// View conversations - chat card list