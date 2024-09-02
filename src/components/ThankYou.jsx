import React, { useEffect } from "react";
// import ThankYouImage from "../assets/thank-you.png";
import EarthImage from "../assets/earth.png";

function ThankYou({ resetForm }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      resetForm();
    }, 3000);

    return () => clearTimeout(timer);
  }, [resetForm]);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold">Thank you!</h2>
      <p className="mt-4 text-gray-600">Your message has been sent.</p>
      <img src={EarthImage} alt="Earth" className="mx-auto mt-4" />
    </div>
  );
}

export default ThankYou;
