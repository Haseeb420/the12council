import React, { useState } from "react";
import emailjs from "emailjs-com";
import EmailButton from "./EmailButton";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Modal from "./Modal";
import ThankYou from "./ThankYou";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // EmailJS service credentials
  const SERVICE_ID = "service_3y2ukxt"; // Replace with your EmailJS service ID
  const TEMPLATE_ID = "template_cglotu5"; // Replace with your EmailJS template ID
  const USER_ID = "ecEiY8wY16sF3r0yx"; // Replace with your EmailJS user ID

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isSubmitted) {
      setIsSubmitted(false); // Reset submission status when reopening the form
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.error("There was an error sending the email:", error.text);
        }
      );

    // Reset the form after submission
    e.target.reset();
  };

  const resetForm = () => {
    setIsOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="w-12/12 mx-auto p-4 component relative">
      <EmailButton toggleModal={toggleModal} />

      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        {isSubmitted ? (
          <ThankYou resetForm={resetForm} />
        ) : (
          <form onSubmit={handleSubmit}>
            <InputField
              id="name"
              type="text"
              name="from_name"
              label="Name"
            />
            <InputField
              id="email"
              type="email"
              name="email"
              label="Email"
            />
            <TextArea
              id="message"
              name="message"
              label="Message"
              rows="4"
            />
            <button
              type="submit"
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
