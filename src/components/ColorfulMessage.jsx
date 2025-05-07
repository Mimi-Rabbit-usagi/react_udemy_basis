export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyleA = { color, fontSize: "14px" };
  return <p style={contentStyleA}>{children}</p>;
};
