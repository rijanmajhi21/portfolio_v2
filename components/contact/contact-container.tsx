import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";

const ContactContainer: FunctionComponent = () => {
  return (
    <section className="mx-auto">
      <div className="flex flex-col fixed justify-center items-start h-[100vh] w-[30%] top-0 overflow-visible">
        <h5 className="uppercase">contact</h5>
        <div className="mt-0 mb-6">
          <span className="font-anton text-[3vw] text-neutral-900">
            Have a Question? Contact Me.
          </span>
        </div>
        <div className="mb-6">
          <p className="text-body-base">
            Have questions or ideas? Reach out to me anytime. Every message is
            an opportunity to connect, collaborate, and create something
            meaningful.
          </p>
        </div>
        <div className="flex gap-5 pb-6">
          <Button variant="light" text="Facebook" href="" />
          <Button variant="dark" text="Follow me on Linkedin" href="" />
        </div>
        <div className="flex gap-5">
          <Button variant="dark" text="Follow me on instagram" href="" />
          <Button variant="light" text="View GitHub" href="" />
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
