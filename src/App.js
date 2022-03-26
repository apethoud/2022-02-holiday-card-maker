import "./styles.css";
import { AppContainer } from "./components/StyledComponents";
import AppHeader from "./components/AppHeader";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <AppContainer>
      <AppHeader />
      <div className="ViewContainer">
        <Outlet />
      </div>
    </AppContainer>
  );
}
