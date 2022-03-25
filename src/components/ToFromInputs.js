import { Input, Label } from "./StyledComponents";

export default function ToFromInputs(props) {
  return (
    <div>
      {/* "To" input (controlled) */}
      <div>
        <Label htmlFor="to">To</Label>
        <Input
          name="to"
          value={props.to}
          onChange={(event) => props.setTo(event.target.value)}
        />
      </div>
      {/* "From" input (controlled) */}
      <div>
        <Label htmlFor="from">From</Label>
        <Input
          name="from"
          value={props.from}
          onChange={(event) => props.setFrom(event.target.value)}
        />
      </div>
      {/* "Email" input (uncontrolled) */}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input name="email" type="email" ref={props.emailRef} />
      </div>
    </div>
  );
}
