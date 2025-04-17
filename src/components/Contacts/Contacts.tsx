import { useNavigate } from "react-router";
import { useGetPhoneNumbers } from "../../hooks/useGetPhoneNumbers";
import { ContactContainer, Name, Number } from "./styles";

export const Contacts = () => {
  const navigate = useNavigate();

  const { data } = useGetPhoneNumbers();

  if (!data) return <div>Loading...</div>;

  const onContactClick = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <section>
      {data.map((contact: any) => (
        <ContactContainer onClick={() => onContactClick(contact.id)}>
          <Name>{contact.name}</Name>
          <Number>{contact.number}</Number>
        </ContactContainer>
      ))}
    </section>
  );
};
