import { files } from "@/config/fs";

const Ls = () => {
  return (
    <>
      {files.map((file, index) => (
        <div key={index}>{file}</div>
      ))}
    </>
  );
};

export default Ls;
