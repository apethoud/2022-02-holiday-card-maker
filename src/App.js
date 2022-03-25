import "./styles.css";
import AppHeader from "./components/AppHeader";
import CardBuilder from "./components/CardBuilder";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="ViewContainer">
        <CardBuilder />
      </div>
    </div>
  );
}
