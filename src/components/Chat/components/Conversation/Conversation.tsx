import { useState } from "react";
import { useListMessages } from "../../../../hooks/useListMessages";
import {
  Container,
  Message,
  MessageContainer,
  Name,
  StyledHeader,
} from "./styles";
import { useSendMessage } from "../../../../hooks/useSendMessage";

interface IConversation {
  phoneNumberId: string;
  participants: string[];
}

export const Conversation = ({
  phoneNumberId,
  participants,
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
      content: e.target.textContent,
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
      {data.pages[page - 1].data.map((message: any) => (
        <MessageContainer key={`${message.phoneNumberId}-${message.id}`}>
          <Name>{message.direction === "incoming" ? message.from : "You"}</Name>
          <Message>{message.text}</Message>
        </MessageContainer>
      ))}
      <button type="button" onClick={getNextPageOfChats}>
        Next
      </button>
      <footer>
        <form onSubmit={onSubmit}>
          <input name="content" type="text" />
          <button name="submitButton" type="submit">
            Send message
          </button>
        </form>
      </footer>
    </Container>
  );
};
