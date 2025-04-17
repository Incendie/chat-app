import { SideBar } from "./components/SideBar/Sidebar";
import { Contacts } from "./components/Contacts/Contacts";
import { Chat } from "./components/Chat/Chat";
import { StyledMain } from "./styles";

export const Main = () => {
  return (
    <StyledMain>
      <SideBar />
      <Contacts />
      <Chat />
    </StyledMain>
  );
};
