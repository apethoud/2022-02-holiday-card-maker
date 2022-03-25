import {
  FormSectionColumn,
  StyledFormSection,
  SectionTitle,
} from "../StyledComponents";

export default function FormSection(props) {
  return (
    <StyledFormSection>
      <FormSectionColumn style={{ width: "calc(50% - 40px)" }}>
        <SectionTitle>{props.title}</SectionTitle>
      </FormSectionColumn>
      <FormSectionColumn style={{ width: "calc(50% - 40px)" }}>
        {props.children}
      </FormSectionColumn>
    </StyledFormSection>
  );
}
