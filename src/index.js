import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  //Reactの場合関数名は大文字になる
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
