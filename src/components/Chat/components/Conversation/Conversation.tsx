import { Dispatch, SetStateAction, useState } from "react";
import { useListMessages } from "../../../../hooks/useListMessages";
import {
  Back,
  Container,
  ConversationContainer,
  Message,
  MessageContainer,
  Name,
  StyledButton,
  StyledFooter,
  StyledForm,
  StyledInput,
  Timestamp,
} from "./styles";
import { useSendMessage } from "../../../../hooks/useSendMessage";
import { StyledHeader } from "../../../../styles";
import { format } from "date-fns";

interface IConversation {
  phoneNumberId: string;
  participants: string[];
  setActiveChat: Dispatch<SetStateAction<any>>;
}

export const Conversation = ({
  phoneNumberId,
  participants,
  setActiveChat,
}: IConversation) => {
  const { data, fetchNextPage } = useListMessages({
    phoneNumberId,
    participants,
  });

  const onSendMessage = useSendMessage();

  console.log("conv", data);

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!data) return;

    const outgoingMessage = data.pages[page - 1].data.find(
      (message: any) => message.direction !== "incoming"
    );
    const from = outgoingMessage.from;
    const to = outgoingMessage.to;
    const userId = outgoingMessage.userId;

    onSendMessage.mutateAsync({
      content: e.target.content,
      from,
      to,
      userId,
    });
  };
  const [page, setPage] = useState(1);

  if (!data) return <div>Loading chat...</div>;

  const getNextPageOfChats = () => {
    setPage(page => page + 1);
    fetchNextPage();
  };

  console.log("chat", { data });

  return (
    <Container>
      <StyledHeader>{participants.join(", ")}</StyledHeader>
      <Back onClick={() => setActiveChat(null)}>← Back to list</Back>
      <ConversationContainer>
        {data.pages[page - 1].data.map((message: any) => (
          <MessageContainer
            key={`${message.phoneNumberId}-${message.id}`}
            isYou={message.direction !== "incoming"}
          >
            <Timestamp>
              {format(message.createdAt, "EEEE yyyy-MM-dd HH:mm")}
            </Timestamp>
            <Name>
              {message.direction === "incoming" ? message.from : "You"}
            </Name>
            <Message isYou={message.direction !== "incoming"}>
              {message.text}
            </Message>
          </MessageContainer>
        ))}
      </ConversationContainer>
      <button type="button" onClick={getNextPageOfChats}>
        Next
      </button>
      <StyledFooter>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput>
            <input name="content" type="text" />
          </StyledInput>
          <StyledButton name="submitButton" type="submit">
            Send
          </StyledButton>
        </StyledForm>
      </StyledFooter>
    </Container>
  );
};
