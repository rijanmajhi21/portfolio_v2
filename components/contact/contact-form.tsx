import { FunctionComponent } from "react";
import Button from "../commons/buttons/button";
import FloatingLabelInput from "../commons/inputs/floating-label-input";
import FloatingLabelTextArea from "../commons/inputs/floating-label-text-area";

const ContactForm: FunctionComponent = () => {
  return (
    <section className="mx-auto">
      <div className="flex justify-end">
        <div className="w-full">
          <div className="relative block w-full h-full top-[20vh] overflow-visible">
            <form name="ContactForm" className="flex flex-col" noValidate>
              <div className="mb-2 flex flex-col gap-1 md:flex-col md:justify-start">
                <span className="text-title-4 md:justify-start md:text-title-4">
                  Contact Form
                </span>
              </div>
              <div className="mb-5">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <FloatingLabelInput
                      type="text"
                      name="firstName"
                      placeholder="firstName"
                      label={"First Name"}
                      required
                    />
                    <FloatingLabelInput
                      type="text"
                      name="lasttName"
                      placeholder="lasttName"
                      label={"Last Name"}
                      required
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <FloatingLabelInput
                      type="email"
                      name="email"
                      placeholder="email"
                      label={"Email"}
                      required
                    />
                    <FloatingLabelInput
                      type="text"
                      name="contactNumber"
                      placeholder="contactNumber"
                      autoComplete="contactNumber"
                      label={"Contact Number"}
                      required
                    />
                  </div>
                  <div>
                    <FloatingLabelInput
                      type="text"
                      name="subject"
                      placeholder="subject"
                      label={"Enter subject"}
                      required
                    />
                  </div>
                  <div>
                    <FloatingLabelTextArea
                      name="message"
                      placeholder="message"
                      label={"Enter message"}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SubmitButton: FunctionComponent = () => {
  return <Button variant="dark" text="Contact me" href="" />;
};

export default ContactForm;
