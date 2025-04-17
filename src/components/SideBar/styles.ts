import styled from "styled-components";

export const Container = styled.nav`
  width: 120px;
  border: 1px solid black;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background:  ${({ theme }) =>  theme.lightgreen};
`;
