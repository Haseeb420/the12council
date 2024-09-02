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
      <h2 className=" font-semibold">Thank you!</h2>
      <p className="mt-4 text-gray-600">Your message has been sent.</p>
      <img
        src={EarthImage}
        alt="Earth"
        className="mx-auto mt-4"
        loading="lazy"
      />
    </div>
  );
}

export default ThankYou;
