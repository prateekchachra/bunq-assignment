import { styled } from "styled-components";

const StyledHeading = styled.h2`
  font-weight: bold;
  font-size: 28px;
  color: #707070;
  margin: 16px 0;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = ({children}: React.PropsWithChildren) => <StyledHeading>{children}</StyledHeading>