import useHolidayList from "./customHooks/useHolidayList";

export default function AppHeader(props) {
  const holidayList = useHolidayList();

  return (
    <div className="Header">
      <h1 className="HeaderText">Holiday Card Maker</h1>
      <p className="HeaderSubtext">
        Pick from {holidayList.length} different holidays!
      </p>
    </div>
  );
}
