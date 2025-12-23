const Sudo = () => {
  setTimeout(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  }, 420);

  return <div>sudo: unable to change to root: Operation not permitted</div>;
};

export default Sudo;
