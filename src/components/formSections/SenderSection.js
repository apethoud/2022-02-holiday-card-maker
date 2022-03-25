import { Label, Input } from "../StyledComponents";

export default function SenderSection(props) {
  const { senderName, setSenderName, senderEmail, setSenderEmail } = props;

  return (
    <div className="FlexColumn">
      <div className="FormFieldContainer">
        <Label htmlFor="senderName">Your Name</Label>
        <Input
          name="senderName"
          type="text"
          value={senderName}
          onChange={(event) => setSenderName(event.target.value)}
        />
      </div>
      <div className="FormFieldContainer">
        <Label htmlFor="senderEmail">Your Email</Label>
        <Input
          name="senderEmail"
          type="text"
          value={senderEmail}
          onChange={(event) => setSenderEmail(event.target.value)}
        />
      </div>
    </div>
  );
}
