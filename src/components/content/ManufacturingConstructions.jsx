import DisplayList from "./DisplayList"; // Adjust the import path as needed

function ManufacturingConstructions() {
  const listData = [
    "Building Plantation Locations",
    "Giant 3D Printer Building Materials",
    "Construction Companies",
    "Development Key Head Quarter",
    "Food Ration Resources",
    "Food Rations 3D Printers",
    "Mobility Shelter Materials",
    "Mobility Shelters Printer",
    "Apparel Technologies",
    "Apparel Materials",
    "Apparel 3D Printers",
    "Clean Water Vessels",
    "Desalination Machines",
    "Delivery Cargo Shuttle Factory",
    "Delivery Cargo Shuttle Manufacture",
    "Full Running Costs",
    "Security Systems",
    "24/7 Staffing",
    "Product Testing Systems",
    "Product Testing Lands",
    "Emergency Distribution Service",
  ];

  return (
    <div className="w-11/12 mx-auto p-4">
      <h1 className=" font-bold p-0">MANUFACTURING CONSTRUCTIONS:</h1>
      <p>(Estimated 891 million dollars)</p>
      <DisplayList list={listData} />
    </div>
  );
}

export default ManufacturingConstructions;
