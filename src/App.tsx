// packages
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// constants
const text_color = "#fff";
const bg_color = "rgb(34, 139, 230)";
const bg_hover_color = "rgb(34, 139, 230, 0.8)";

// inline css with emotion
const button_css = css`
  position: relative;
  padding: 8px 16px;
  background-color: ${bg_color};
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${text_color};

  &:hover {
    background-color: ${bg_hover_color};
  }

  &:active {
    background-color: ${bg_color};
    top: 1px;
  }
`;

// Styled component
const StyledButton = styled.button`
  position: relative;
  padding: 8px 16px;
  background-color: ${bg_color};
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  border: none;
  color: ${text_color};

  &:hover {
    background-color: ${bg_hover_color};
  }

  &:active {
    background-color: ${bg_color};
    top: 2px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function App() {
  return (
    <Container>
      <p>This is for the test purpose only..... </p>
      <button css={button_css}>I'm inline css</button>
      <StyledButton>I'm styled component</StyledButton>
    </Container>
  );
}

export default App;
