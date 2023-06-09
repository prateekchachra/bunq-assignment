import React, { useMemo } from 'react'
import { Chat } from 'types'

type ChatProps = {
    chat: Chat;
    onChatCardClick: (chat: Chat) => void;
}   

export const ChatCard = ({chat, onChatCardClick} : ChatProps) => {
    const { messages } = chat;
    const usersInChat = useMemo(() => {
        return chat.messages.map(message => message.user);
    }, [chat])

    const handleClick = () => onChatCardClick(chat);
    
    return (
        <div onClick={() => handleClick()}>
            <p>Users in this chat: </p>
                <ul>
                {usersInChat.map(user => <li>
                    {user.firstName}
                </li>)
                }
                </ul>
            <p> Chat so far!</p>
                <ul>
                {messages.slice(0,3).map(message => <li>
                    {message.message}
                </li>)
                }
                </ul>
        </div>
    )
}