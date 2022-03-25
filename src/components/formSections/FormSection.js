import { FormSectionColumn, StyledFormSection } from "../StyledComponents";

export default function FormSection(props) {
  return (
    <StyledFormSection>
      <FormSectionColumn style={{ width: "calc(50% - 40px)" }}>
        <div className="SectionTitle">{props.title}</div>
      </FormSectionColumn>
      <FormSectionColumn style={{ width: "calc(50% - 40px)" }}>
        {props.children}
      </FormSectionColumn>
    </StyledFormSection>
  );
}
