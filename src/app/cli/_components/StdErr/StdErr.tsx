import { FC } from "react";
import "./StdErr.modules.css";

interface IProps {
  stdErr: string;
}

const StdErr: FC<IProps> = (props) => {
  const { stdErr } = props;

  return <div className="stdErr">{stdErr}</div>;
};

export default StdErr;
