import { useState, useEffect, useRef } from "react";
import ToFromInputs from "../components/ToFromInputs";

export default function Form() {
  const [month, setMonth] = useState(3);
  const [holidays, setHolidays] = useState([]);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const emailRef = useRef();

  useEffect(() => {
    async function getHolidays() {
      const url = `https://holidays.abstractapi.com/v1/?api_key=37af845ce479406b8128fad7f640bb0d&country=US&year=2020&month=${month}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log("data is: ", data);
      // setHolidays(data);
    }
    getHolidays();
  }, [month]);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ToFromInputs
          to={to}
          setTo={setTo}
          from={from}
          setFrom={setFrom}
          emailRef={emailRef}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}