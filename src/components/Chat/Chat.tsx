import { useParams } from "react-router";
import { useGetContact } from "../../hooks/useGetContact";
import { useGetConversations } from "../../hooks/useGetConversations";
import { Container, StyledHeader } from "./styles";
import { useState } from "react";
import { Conversation } from "./components/Conversation/Conversation";

export const Chat = () => {
  const params = useParams();
  const { data, fetchNextPage } = useGetConversations();
  const [page, setPage] = useState(1);
  const contact = useGetContact(params.id);

  if (!data) return <div>Loading Conversations...</div>;

  return (
    <Container>
      <StyledHeader>Chat</StyledHeader>
      <button type="button" onClick={() => fetchNextPage()}>
        Next
      </button>
      {data.pages[page - 1].data.map((conversation: any) => (
        <Conversation
          key={conversation.id}
          phoneNumberId={conversation.phoneNumberId}
          participants={conversation.participants}
        />
      ))}
    </Container>
  );
};
