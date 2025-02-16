import { FC } from "react";
import { inCharacter } from "@/config/PS1";
import "./StdIn.modules.css";

interface IProps {
  cmd: string;
}

const StdIn: FC<IProps> = (props) => {
  const { cmd } = props;

  return (
    <>
      <span className="inCharacter">{inCharacter} </span>
      <span>{cmd}</span>
    </>
  );
};

export default StdIn;
