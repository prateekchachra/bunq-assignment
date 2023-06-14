import React from 'react'
import {  styled } from 'styled-components';



const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 12px 18px;
  border-radius: 24px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  background: #ff7819;
  border: none;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ff7819aa;
  }
`;

export const Button = ({children} : React.PropsWithChildren) => (
    <StyledButton>{children}</StyledButton>
)