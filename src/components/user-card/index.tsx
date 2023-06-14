import React, {useMemo} from 'react'
import { Button } from 'components/button';
import { formatDistance } from 'date-fns';
import styled from 'styled-components';
import { User } from 'types'

type UserProps = {
    user: User;
    onUserCardClick: (user: User) => void; 
}

const AvatarImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`
const CardContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
`
const UserContainerDiv = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const StyledButtonText = styled.span`
    margin-left: 4px;
    font-weight: bold;
`;
export const UserCard = ({user, onUserCardClick} : UserProps) => {
    const {dateOfJoining,  userAvatar, firstName } = user;
    const formattedDate = useMemo(() => formatDistance(dateOfJoining, new Date()), [user]);
    const handleClick = () => onUserCardClick(user);
    return (
        <CardContainerDiv onClick={() => handleClick()}>
            <p>Join Date: {formattedDate}</p>
            <UserContainerDiv>
                <Button>
                    <AvatarImage src={userAvatar} alt={firstName} />
                    <StyledButtonText>Chat with {firstName}!</StyledButtonText>
                </Button>
            </UserContainerDiv>
        </CardContainerDiv>
    )
}