import "./StdOut.modules.css";

const StdOut = (props) => {
  const { children } = props;

  if (!children) return;

  return <div className="stdOut">{children}</div>;
};

export default StdOut;
