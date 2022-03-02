import { useState, useEffect } from "react";

const API_KEY = ""; // Redacted for security purposes. Never commit your api keys!

export default function Form() {
  const [month, setMonth] = useState(3);
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      const url = `https://holidays.abstractapi.com/v1/?api_key=${API_KEY}&country=US&year=2020&month=${month}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data is: ", data);
      setHolidays(data);
    }
    // getHolidays(); // Commented out since the request won't work without an api key.
  }, [month]); // This is my dependency list.

  return (
    <div>
      <div>Month number is: {month}</div>
      {/* Below is our first use of conditional rendering. */}
      {holidays[0] && (
        <div>The first holiday is: {holidays[0].name}</div>
      )}
      <button onClick={() => setMonth(4)}>Change Month</button>
    </div>
  );
}
