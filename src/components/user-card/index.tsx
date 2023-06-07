import React from 'react'
import { User } from '../../types' //TODO: Relative path

type UserProps = {
    user: User;
    onUserCardClick: (user: User) => void; 
}

export const UserCard = ({user, onUserCardClick} : UserProps) => {
    const {dateOfJoining,  userAvatar, firstName } = user;

    const handleClick = (event: MouseEvent) => {
        event.stopPropagation();
        onUserCardClick(user);
    }
    return (
        <div onClick={handleClick}>
            <p>Chat with {firstName}! </p>
            <p>{userAvatar}</p>
            <p>Join Date: {dateOfJoining}</p>
        </div>
    )
}