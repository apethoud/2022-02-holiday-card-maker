import styled from "styled-components";

export const ColumnContainer = styled.div`
  padding: 10px;
  width: 50%;
`;

export const StyledFormSection = styled.div`
  display: flex;
  padding: 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid #ddd;
`;

export const FormSectionColumn = styled.div`
  display: flex;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  text-align: left;
  font-size: 14px;
`;

export const Input = styled.input`
  box-shadow: 0px 2px 2px #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 4px;
  width: 120px;
`;

export const Select = styled.select`
  box-shadow: 0px 2px 2px #ccc;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 4px;
  width: 120px;
`;

export const Button = styled.button`
  margin: 20px;
  box-shadow: 0px 2px 4px ${(props) => (props.primary ? "#333" : "#ccc")};
  border: 1px solid ${(props) => (props.primary ? "transparent" : "#bbb")};
  border-radius: 4px;
  padding: 10px;
  background-color: ${(props) => (props.primary ? "#333" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: bold;
`;
