import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "PT Sans", sans-serif;
  text-align: center;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      background-color: #eee;
    `
      : `
      background-color: #2a2a2a;
    `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      background-color: #ccc;
    `
      : `
      background-color: #222;
    `}
`;

export const HeaderText = styled.h1`
  margin: 6px 10px;
  font-family: "Lobster Two", cursive;
  font-size: 24px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const HeaderSubtext = styled.p`
  margin: 6px 10px;
  font-style: italic;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const HeaderLink = styled.p`
  margin: 6px 10px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const FormContainer = styled.div`
  border-radius: 10px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      border: 1px solid #ccc;
      background: #ddd;
      box-shadow: 0px 2px 4px #aaa;
    `
      : `
      border: 1px solid #666;
      background: #333;
      box-shadow: 0px 2px 4px #222;
    `}
`;

export const ColumnContainer = styled.div`
  padding: 10px;
  width: 50%;
`;

export const StyledFormSection = styled.div`
  display: flex;
  padding: 20px;
  padding-bottom: 40px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      border-bottom: 1px solid #aaa;
    `
      : `
      border-bottom: 1px solid #888;
    `}
`;

export const FormSectionColumn = styled.div`
  display: flex;
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const Label = styled.label`
  margin-bottom: 4px;
  text-align: left;
  font-size: 14px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 4px;
  width: 120px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      box-shadow: 0px 2px 2px #ccc;
      border: 1px solid #aaa;
      background: #fff;
      color: #000;
    `
      : `
      box-shadow: 0px 2px 2px #222;
      border: 1px solid #777;
      background: #222;
      color: #fff;
    `}
`;

export const Select = styled.select`
  border-radius: 4px;
  padding: 4px;
  width: 120px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      box-shadow: 0px 2px 2px #ccc;
      border: 1px solid #aaa;
      background: #fff;
      color: #000;
    `
      : `
      box-shadow: 0px 2px 2px #222;
      border: 1px solid #777;
      background: #222;
      color: #fff;
    `}
`;

export const Button = styled.button`
  margin: 20px;
  border-radius: 4px;
  padding: 10px;
  font-weight: bold;
  ${(props) =>
    props.theme.theme === "light" && props.primary
      ? `
        box-shadow: 0px 2px 4px #888;
        border: 1px solid transparent;
        background: #333;
        color: #fff;
      `
      : props.theme.theme === "dark" && props.primary
      ? `
        box-shadow: 0px 2px 4px #222;
        border: 1px solid transparent;
        background: #ccc;
        color: #000;
      `
      : props.theme.theme === "light"
      ? `
        box-shadow: 0px 2px 4px #bbb;
        border: 1px solid #bbb;
        background: #fff;
        color: #000;
      `
      : `
        box-shadow: 0px 2px 4px #222;
        border: 1px solid #777;
        background: #222;
        color: #fff;
      `}
`;

export const SmallButton = styled(Button)`
  margin: 10px;
  border-radius: 2px;
  padding: 4px;
  font-weight: 400;
  font-size: 12px;
`;

export const Text = styled.div`
  ${(props) =>
    props.theme.theme === "light"
      ? `
      color: #000;
    `
      : `
      color: #eee;
    `}
`;

export const PreviewContainer = styled.div`
  border-radius: 10px;
  ${(props) =>
    props.theme.theme === "light"
      ? `
      box-shadow: 0px 2px 4px #ccc;
      border: 1px solid #ddd;
      background: #fff;
      color: #000;
    `
      : `
      box-shadow: 0px 2px 4px #222;
      border: 1px solid #444;
      background: #ccc;
      color: #000;
    `}
`;

export const PreviewTextBlock = styled.div`
  margin: 20px;
`;
