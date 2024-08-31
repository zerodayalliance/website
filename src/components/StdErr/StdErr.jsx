import "./StdErr.modules.css";

const StdErr = (props) => {
  const { stdErr } = props;

  return <div className="stdErr">{stdErr}</div>;
};

export default StdErr;
