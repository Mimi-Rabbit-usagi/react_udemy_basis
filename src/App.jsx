export const App = () => {
  //Reactの場合関数名は大文字になる
  const onClickButton = () => alert();
  const contentStyle = { color: "gray", fontSize: "14px" };
  return (
    <>
      <h1 style={{ color: "green" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
