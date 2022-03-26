import { useState } from "react";
import CardForm from "./CardForm";
import CardPreview from "./CardPreview";

export default function CardBuilder(props) {
  const [recipientName, setRecipientName] = useState("");
  const [holidayName, setHolidayName] = useState("");
  const [senderName, setSenderName] = useState("");

  return (
    <div style={{ display: "flex" }}>
      <CardForm
        recipientName={recipientName}
        setRecipientName={setRecipientName}
        holidayName={holidayName}
        setHolidayName={setHolidayName}
        senderName={senderName}
        setSenderName={setSenderName}
      />
      <CardPreview
        recipientName={recipientName}
        holidayName={holidayName}
        senderName={senderName}
      />
    </div>
  );
}
