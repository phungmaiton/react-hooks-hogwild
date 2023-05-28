import { useState } from "react";

function HogTile({ name, image, specialty, greased, weight, medal }) {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };
  return (
    <div className="ui eight wide column" onClick={handleSelect}>
      <h2>{name}</h2>
      <img src={image} />
      {selected ? (
        <div>
          <p>Specialty: {specialty}</p>
          <p>Greased: {greased ? "Yes" : "No"}</p>
          <p>Weight: {weight}</p>
          <p>Highest Medal: {medal}</p>
        </div>
      ) : null}
    </div>
  );
}

export default HogTile;
