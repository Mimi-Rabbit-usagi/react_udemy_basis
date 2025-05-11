import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  //Reactの場合関数名は大文字になる
  const [num, setNum] = useState(0); //関数コンポーネントの一番上の階層でしか呼べない
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountup = () => {
    setNum((prev) => prev + 1); //現在のstateをもとに更新する関数
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="#633142">元気です!</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>（ ; ; ）</p>}
    </>
  );
};
