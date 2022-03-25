import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header, HeaderText, SmallButton } from "./StyledComponents";

export default function AppHeader(props) {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <HeaderText>Holiday Card Maker</HeaderText>
      <SmallButton onClick={toggleTheme}>Toggle Theme</SmallButton>
    </Header>
  );
}
