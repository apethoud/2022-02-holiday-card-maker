import { Label, Input } from "../StyledComponents";

export default function RecipientSection(props) {
  const { recipientName, setRecipientName, recipientEmail, setRecipientEmail } =
    props;

  return (
    <div className="FlexColumn">
      <div className="FormFieldContainer">
        <Label htmlFor="recipientName">Their Name</Label>
        <Input
          name="recipientName"
          type="text"
          value={recipientName}
          onChange={(event) => setRecipientName(event.target.value)}
        />
      </div>
      <div className="FormFieldContainer">
        <Label htmlFor="recipientEmail">Their Email</Label>
        <Input
          name="recipientEmail"
          type="text"
          value={recipientEmail}
          onChange={(event) => setRecipientEmail(event.target.value)}
        />
      </div>
    </div>
  );
}
