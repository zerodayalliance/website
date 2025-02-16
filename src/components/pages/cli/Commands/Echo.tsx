import { FC } from "react";

interface IProps {
  message: string;
}

const Echo: FC<IProps> = (props) => {
  const { message } = props;

  return <div>{message}</div>;
};

export default Echo;
