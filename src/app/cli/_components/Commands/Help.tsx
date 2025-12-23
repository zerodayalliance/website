const Help = () => {
  return (
    <>
      <span className="command">cat &lt;file&gt;</span> -{" "}
      <span>print a file</span>
      <br />
      <span className="command">clear</span> - <span>clear the screen</span>
      <br />
      <span className="command">echo &lt;arg&gt;</span> -{" "}
      <span>print arguments</span>
      <br />
      <span className="command">help</span> - <span>print this help</span>
      <br />
      <span className="command">ls</span> - <span>list all sections</span>
      <br />
      <span className="command">whoami</span> - <span>about us</span>
      <br />
    </>
  );
};

export default Help;
