import "./styles.css";
import { AppContainer } from "./components/StyledComponents";
import AppHeader from "./components/AppHeader";
import CardBuilder from "./components/CardBuilder";

export default function App() {
  return (
    <AppContainer>
      <AppHeader />
      <CardBuilder />
    </AppContainer>
  );
}
