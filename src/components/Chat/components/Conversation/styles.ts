import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 12px;
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  background:  ${({ theme }) =>  theme.lightgreen};
`;

export const Back = styled.div`
  display: inline-block;
  align-self: flex-start;
  font-size: 1rem;
`;

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

interface IName {
  isYou: boolean;
}

export const MessageContainer = styled.div<IName>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 6px 0;
  padding: 12px;
  border: 1px solid black;
  max-width: 50%;
  width: max-content;
  align-items: flex-start;
  align-self: ${({ isYou }) => (isYou ? "flex-end" : "flex-start")};
`;

export const Name = styled.div`
  justify-content: flex-end;
`;

export const Message = styled.div``;

export const StyledFooter = styled.footer``;
