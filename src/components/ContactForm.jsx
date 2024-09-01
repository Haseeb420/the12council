import React, { useState } from "react";
import { useForm } from "@formspree/react";
import EmailButton from "./EmailButton";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Modal from "./Modal";
import ThankYou from "./ThankYou";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit, reset] = useForm("xanwkwjb");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const resetForm = () => {
    setIsOpen(false);
    reset();
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-11/12 xl:w-7/12 mx-auto p-4 relative">
      <EmailButton toggleModal={toggleModal} />

      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        {state.succeeded ? (
          <ThankYou resetForm={resetForm} />
        ) : (
          <form onSubmit={handleSubmit}>
            <InputField
              id="name"
              type="text"
              name="name"
              label="Name"
              errors={state.errors}
            />
            <InputField
              id="email"
              type="email"
              name="email"
              label="Email"
              errors={state.errors}
            />
            <TextArea
              id="message"
              name="message"
              label="Message"
              rows="4"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg"
            >
              Submit
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}

export default ContactForm;
