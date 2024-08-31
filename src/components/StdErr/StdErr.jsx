import "./StdErr.modules.css";

const StdErr = (props) => {
  const { stdErr } = props;

  if (!stdErr) return;

  return <div className="stdErr">{stdErr}</div>;
};

export default StdErr;
