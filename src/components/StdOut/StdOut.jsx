import "./StdOut.modules.css";

const StdOut = (props) => {
  const { children } = props;

  return <div className="stdOut">{children}</div>;
};

export default StdOut;
