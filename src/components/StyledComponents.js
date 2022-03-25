import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.primary ? "white" : "black")};
  margin: 20px;
  padding: 10px;
  background-color: ${(props) => (props.primary ? "blue" : "white")};
  font-weight: bold;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0px 2px 4px #888;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  text-align: left;
  font-size: 14px;
  color: black;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 4px;
  width: 120px;
  box-shadow: 0px 2px 4px #888;
  border: 1px solid #aaa;
  background: #fff;
  color: #000;
`;

export const Select = styled.select`
  border-radius: 4px;
  padding: 4px;
  width: 120px;
  box-shadow: 0px 2px 4px #888;
  border: 1px solid #aaa;
  background: #fff;
  color: #000;
`;
