// packages
import { css } from "@emotion/react";

// constants
const text_color = "#fff";
const bg_color = "rgb(34, 139, 230)";
const bg_hover_color = "rgb(34, 139, 230, 0.8)";

// inline css with emotion
const button_css = css`
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
    margin-top: 1px;
  }
`;

function App() {
  return (
    <>
      <button css={button_css}>Click me</button>
    </>
  );
}

export default App;
