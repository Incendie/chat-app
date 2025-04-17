import { useListMessages } from "../../../../hooks/useListMessages";
import { StyledHeader } from "./styles";

interface IConversation {
  phoneNumberId: string;
  participants: string[];
}

export const Conversation = ({
  phoneNumberId,
  participants,
}: IConversation) => {
  const { data } = useListMessages({ phoneNumberId, participants });

  if (!data) return <div>Loading chat...</div>;

  console.log("chat", { data });

  return (
    <section>
      <StyledHeader>{participants.join(", ")}</StyledHeader>
    </section>
  );
};
