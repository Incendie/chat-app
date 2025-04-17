import styled from "styled-components";

export const Container = styled.section`
  width: 25%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-radius: none;
  background:  ${({ theme }) =>  theme.lightgreen};
`;

export const ContactsContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 18px 0;
`;

export const ContactContainer = styled.li`
  cursor: pointer;
  margin: 12px 0;
  padding: 12px 0;

  &:hover {
    background: ${({ theme }) =>  theme.lightblue};
  }
`;

export const Name = styled.div``;

export const Number = styled.div``;
