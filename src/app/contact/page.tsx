import Contactvector from "@/components/Contactvector";
import Contacttext from "@/components/Contacttext";
import ContactEvector from "@/components/ContactEvector";
import Contactcard from "@/components/Contactcard";

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
      <div className="mt-[-8rem]">
        <ContactEvector />
      </div>
    </>
  );
}
