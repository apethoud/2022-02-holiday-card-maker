import { useState } from "react";
import RecipientSection from "./formSections/RecipientSection";
import DesignSection from "./formSections/DesignSection";
import SenderSection from "./formSections/SenderSection";
import { Button, ColumnContainer } from "./StyledComponents";
import FormSection from "./formSections/FormSection";

export default function CardForm(props) {
  const {
    recipientName,
    setRecipientName,
    holidayName,
    setHolidayName,
    senderName,
    setSenderName,
  } = props;
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      recipientName,
      recipientEmail,
      holidayName,
      senderName,
      senderEmail,
    };
    console.log("payload is: ", payload);
  }

  return (
    <ColumnContainer>
      <div className="FormContainer">
        <form onSubmit={handleSubmit}>
          <FormSection title="Who is this for?">
            <RecipientSection
              recipientName={recipientName}
              setRecipientName={setRecipientName}
              recipientEmail={recipientEmail}
              setRecipientEmail={setRecipientEmail}
            />
          </FormSection>
          <FormSection title="Customize your card">
            <DesignSection
              holidayName={holidayName}
              setHolidayName={setHolidayName}
            />
          </FormSection>
          <FormSection title="Your info">
            <SenderSection
              senderName={senderName}
              setSenderName={setSenderName}
              senderEmail={senderEmail}
              setSenderEmail={setSenderEmail}
            />
          </FormSection>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button type="button">Cancel</Button>
            <Button primary type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </ColumnContainer>
  );
}
