import { useNavigate } from "react-router";
import { useGetPhoneNumbers } from "../../hooks/useGetPhoneNumbers";
import {
  ContactContainer,
  Container,
  Name,
  Number,
  StyledHeader,
} from "./styles";

export const Contacts = () => {
  const navigate = useNavigate();

  const { data } = useGetPhoneNumbers();

  if (!data) return <div>Loading...</div>;

  const onContactClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <Container>
      <StyledHeader>Contacts</StyledHeader>
      {data.map((contact: any) => (
        <ContactContainer
          key={contact.id}
          onClick={() => onContactClick(contact.id)}
        >
          <Name>{contact.name}</Name>
          <Number>{contact.number}</Number>
        </ContactContainer>
      ))}
    </Container>
  );
};
