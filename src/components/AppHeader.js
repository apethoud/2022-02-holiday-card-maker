import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  Header,
  HeaderText,
  HeaderLink,
  SmallButton,
} from "./StyledComponents";
import { NavLink } from "react-router-dom";

export default function AppHeader(props) {
  const { toggleTheme } = useContext(ThemeContext);

  function styleByActiveStatus(isActive) {
    return isActive ? { fontWeight: 700 } : { fontWeight: 400 };
  }

  return (
    <Header>
      <HeaderText>Holiday Card Maker</HeaderText>
      <SmallButton onClick={toggleTheme}>Toggle Theme</SmallButton>
      <div className="Flex">
        <NavLink style={({ isActive }) => styleByActiveStatus(isActive)} to="/">
          <HeaderLink>Home</HeaderLink>
        </NavLink>
        <NavLink
          style={({ isActive }) => styleByActiveStatus(isActive)}
          to="/card-builder/create"
        >
          <HeaderLink>Card Builder</HeaderLink>
        </NavLink>
        <NavLink
          style={({ isActive }) => styleByActiveStatus(isActive)}
          to="/login"
        >
          <HeaderLink>Login</HeaderLink>
        </NavLink>
        <NavLink
          style={({ isActive }) => styleByActiveStatus(isActive)}
          to="/profile"
        >
          <HeaderLink>Profile</HeaderLink>
        </NavLink>
      </div>
    </Header>
  );
}
