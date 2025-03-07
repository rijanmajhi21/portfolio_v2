import {
  FACEBOOK_LINK,
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
} from "@/constants/links";
import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";
import LinkButton from "../commons/buttons/link-button";

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
      <div className="hidden md:flex gap-5 pb-3 md:pb-6">
        <Button variant="light" text="rijanmajhi21@gmail.com" href="" />
      </div>
      <div className="flex gap-5 pb-3 md:pb-6">
        <LinkButton
          variant="light"
          text="Facebook"
          href={FACEBOOK_LINK}
          target="_black"
        />
        <LinkButton
          variant="dark"
          text="GitHub"
          href={GITHUB_LINK}
          target="_black"
        />
      </div>
      <div className="flex gap-5 pb-3 md:pb-6">
        <LinkButton
          variant="dark"
          text="Instagram"
          href={INSTAGRAM_LINK}
          target="_black"
        />
        <LinkButton
          variant="light"
          text="Linkedin"
          href={LINKEDIN_LINK}
          target="_black"
        />
      </div>
    </div>
  );
};

export default ContactContainer;
