import { useState } from "react";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsSubmitted(false); // Reset submission status on reopening
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-11/12 md:w-10/12 lg:w-11/12 xl:w-7/12 mx-auto p-4 relative">
      <p
        onClick={toggleModal}
        className="px-4 py-2 text-center text-bold cursor-pointer text-blue-600"
      >
        contact@the12councils.com
      </p>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Thank you!</h2>
                <p className="mt-4 text-gray-600">
                  Your message has been sent.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
