export const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = { color, fontSize: "14px" };
  return <p style={contentStyleA}>{children}</p>;
};
