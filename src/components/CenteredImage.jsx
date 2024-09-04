import headerImage from "../assets/logo.png";

function CenteredImage() {
  return (
    <div className="component">
      <img src={headerImage} alt="Header" className="header-image"/>
      <h1 className="text-4xl font-bold p-0 text-center mb-4">The 12 Councils</h1>
    </div>
  );
}

export default CenteredImage;
