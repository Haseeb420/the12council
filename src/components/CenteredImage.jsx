import headerImage from "../assets/logo.png";

function CenteredImage() {
  return (
    <div className="component">
      <img src={headerImage} alt="Header" className="header-image" />
      <span
        className="title text-4xl font-bold bg-gray-300 p-0 text-white text-center mb-4 block mx-auto p-1"
        style={{ width: "fit-content" }}
      >
        The 12 Councils
      </span>
    </div>
  );
}

export default CenteredImage;
