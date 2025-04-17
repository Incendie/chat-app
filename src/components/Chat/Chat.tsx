import { useParams } from "react-router";
import { useGetContact } from "../../hooks/useGetContact";
import { useGetConversations } from "../../hooks/useGetConversations";
import { ChatParticipants, Container, ParticipantsContainer } from "./styles";
import { useState } from "react";
import { Conversation } from "./components/Conversation/Conversation";
import { StyledHeader } from "../../styles";

export const Chat = () => {
  const params = useParams();
  const { data, fetchNextPage } = useGetConversations();
  const [page, setPage] = useState(1);
  const [activeChat, setActiveChat] = useState({
    id: null,
    phoneNumberId: null,
    participants: [],
  });

  const contact = useGetContact(params.id);

  if (!data) return <div>Loading Conversations...</div>;

  const getNextPageOfConversations = () => {
    setPage(page => page + 1);
    fetchNextPage();
  };

  console.log({ data });
  return (
    <Container>
      <StyledHeader>Chat</StyledHeader>
      <button type="button" onClick={getNextPageOfConversations}>
        Next
      </button>
      <ParticipantsContainer>
        {data.pages[page - 1].data.map((conversation: any) => (
          <ChatParticipants
            key={conversation.id}
            onClick={() => setActiveChat(conversation)}
          >
            {conversation.participants.join(", ")}
          </ChatParticipants>
        ))}
      </ParticipantsContainer>
      {!!activeChat.id &&
        !!activeChat.phoneNumberId &&
        !!activeChat.participants && (
          <Conversation
            phoneNumberId={activeChat.phoneNumberId}
            participants={activeChat.participants}
          />
        )}
    </Container>
  );
};
