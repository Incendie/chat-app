import styled from "styled-components";

export const Container = styled.nav`
  width: 180px;
  border: 1px solid black;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background:  ${({ theme }) =>  theme.lightgreen};
`;

export const NumbersContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const NumberContainer = styled.li`
  cursor: pointer;
  padding: 24px 0;

  &:hover {
    background: ${({ theme }) =>  theme.darkgreen};
  }
`;

export const Name = styled.div``;

export const Number = styled.div``;
