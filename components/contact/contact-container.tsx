import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const ContactContainer: FunctionComponent = () => {
  return (
    <div className="flex flex-col md:fixed relative justify-center md:items-start items-center md:h-[100vh] h-auto mt-32 xs:mt-[20%] md:mt-0 md:w-[30%] w-full top-0 overflow-visible">
      <h5 className="uppercase">contact</h5>
      <div className="mt-0 md:mb-6 mb-3">
        <span className="font-anton text-[6vw] md:text-[3.5vw] lg:text-[3.5vw] text-neutral-900">
          Have a Question? Contact Me.
        </span>
      </div>
      <div className="mb-6 flex text-center md:text-start">
        <p className="text-body-base">
          Have questions or ideas? Reach out to me anytime. Every message is an
          opportunity to connect, collaborate, and create something meaningful.
        </p>
      </div>
      <div className="flex gap-5 pb-3 md:pb-6">
        <Button variant="light" text="Facebook" href="" />
        <Button variant="dark" text="Linkedin" href="" />
      </div>
      <div className="flex gap-5">
        <Button variant="dark" text="Instagram" href="" />
        <Button variant="light" text="View GitHub" href="" />
      </div>
    </div>
  );
};

export default ContactContainer;
