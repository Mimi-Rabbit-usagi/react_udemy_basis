import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  //Reactの場合関数名は大文字になる
  const [num, setNum] = useState(0); //関数コンポーネントの一番上の階層でしか呼べない
  const onClickCountup = () => {
    setNum((prev) => prev + 1); //現在のstateをもとに更新する関数
  };
  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="#633142">元気です!</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};
