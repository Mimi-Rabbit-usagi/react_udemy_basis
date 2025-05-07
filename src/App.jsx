import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  //Reactの場合関数名は大文字になる
  const onClickButton = () => alert();
  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="#633142">元気です!</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
