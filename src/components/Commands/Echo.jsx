const Echo = (props) => {
  const { message } = props;

  if (!message) return;

  return <div>{message}</div>;
};

export default Echo;
