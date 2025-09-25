import Contactvector from "@/components/pages/contact/Contactvector";
import Contacttext from "@/components/pages/contact/Contacttext";
import ContactEvector from "@/components/pages/contact/ContactEvector";
import Contactcard from "@/components/pages/contact/Contactcard";

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
