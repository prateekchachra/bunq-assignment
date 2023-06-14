import { styled } from "styled-components"


const StyledInput = styled.input`
max-width: 100%;
  padding: 12px 14px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 4px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const LabeledInput = ({label, ...props}: any) => <div><p>{label}</p><StyledInput {...props} /></div> 