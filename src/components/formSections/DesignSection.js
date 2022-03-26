import { Label, Select, Text } from "../StyledComponents";
import useHolidayList from "../customHooks/useHolidayList";

export default function DesignSection(props) {
  const { holidayName, setHolidayName } = props;
  const holidayList = useHolidayList("month", 1);

  return (
    <>
      {holidayList.length > 0 ? (
        <div className="FormFieldContainer">
          <Label htmlFor="holidayName">Pick a Holiday</Label>
          <Select
            name="holidayName"
            value={holidayName}
            onChange={(e) => setHolidayName(e.target.value)}
          >
            {holidayList.map((holiday, index) => (
              <option key={index} value={holiday.name}>
                {holiday.name}
              </option>
            ))}
          </Select>
        </div>
      ) : (
        <Text style={{ fontStyle: "italic" }}>Getting holidays...</Text>
      )}
    </>
  );
}
