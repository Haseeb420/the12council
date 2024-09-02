const DisplayList = (props) => {
  return (
    <div className="">
      <ul className="list-none pl-0">
        {props.list.map((item, index) => (
          <li key={index}>&gt; {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayList;
