export default function ToFromInputs(props) {
  return (
    <div>
      {/* "To" input (controlled) */}
      <div>
        <label htmlFor="to">To</label>
        <input
          name="to"
          value={props.to}
          onChange={(event) => props.setTo(event.target.value)}
        />
      </div>
      {/* "From" input (controlled) */}
      <div>
        <label htmlFor="from">From</label>
        <input
          name="from"
          value={props.from}
          onChange={(event) => props.setFrom(event.target.value)}
        />
      </div>
      {/* "Email" input (uncontrolled) */}
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" ref={props.emailRef} />
      </div>
    </div>
  );
}
