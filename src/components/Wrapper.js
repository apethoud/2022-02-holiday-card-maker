import Header from "./Header";

export default function Wrapper(props) {
  return (
    <div className="AppBackground">
      <Header />
      {props.children}
    </div>
  );
}
