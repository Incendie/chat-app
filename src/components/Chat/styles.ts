import styled from "styled-components";

export const Container = styled.aside`
  width: 50%;
  border: 1px solid black;
  position: relative;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background:  ${({ theme }) =>  theme.lightgreen};
`;

export const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0;
`;

export const ChatParticipants = styled.div`
padding: 12px;
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) =>  theme.darkgreen};
  }
`;
