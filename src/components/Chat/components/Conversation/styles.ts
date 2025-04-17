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
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 6px;
  background: ${({ theme }) => theme.lightgreen};
`;

export const Back = styled.div`
  display: inline-block;
  align-self: flex-start;
  font-size: 1rem;
  padding: 12px;
`;

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
`;

interface IName {
  isYou: boolean;
}

export const MessageContainer = styled.div<IName>`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin: 6px 0;

  max-width: 50%;
  width: max-content;
  align-items: flex-start;
  align-self: ${({ isYou }) => (isYou ? "flex-end" : "flex-start")};
`;

export const Timestamp = styled.div`
  font-size: 0.75rem;
  font-style: italic;
`;

export const Name = styled.div`
  justify-content: flex-end;
`;

export const Message = styled.div<IName>`
  border: 1px solid black;
  background: ${({ isYou, theme }) => (isYou ? theme.darkgreen : theme.green)};
  border-radius: 12px;
  box-shadow: 3px 3px ${({ theme }) => theme.shadowgreen};
  padding: 12px;
`;

export const StyledFooter = styled.footer`
  padding: 6px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StyledInput = styled.div`
  flex-grow: 1;

  input {
    width: 100%;
    padding: 9px;
    font-size: 1rem;
    border-radius: 6px;
    box-shadow: none;
    border: 1px solid black;
  }
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.darkgreen};
  border: 1px solid black;
  border-radius: 6px;
  padding: 6px;
  width: 90px;
  cursor: pointer;
`;
