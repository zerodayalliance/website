import Contactvector from "./_components/Contactvector";
import Contacttext from "./_components/Contacttext";
import ContactEvector from "./_components/ContactEvector";
import Contactcard from "./_components/Contactcard";

export default function contact() {
  return (
    <>
      <div className="flex justify-end">
        <Contactvector />
      </div>
      <div className="flex justify-center">
        <Contacttext />
      </div>
      <Contactcard />
      <div className="mt-[-10rem] mb-[-8rem]">
        <ContactEvector />
      </div>
    </>
  );
}
