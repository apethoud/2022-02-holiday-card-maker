import { useState, useEffect, useRef } from "react";
import ToFromInputs from "../components/ToFromInputs";
import { Button } from "../components/StyledComponents";

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

  function logEmail() {
    console.log("emailRef.current.value is: ", emailRef.current.value);
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
        <Button type="button">Cancel</Button>
        <Button primary type="submit">
          Submit
        </Button>
      </form>
      <div>To: {to}</div>
      <div>From: {from}</div>
      <Button type="button" onClick={() => logEmail()}>
        Log Email Address to Console
      </Button>
    </>
  );
}
