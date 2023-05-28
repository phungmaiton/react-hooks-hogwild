import HogTile from "./HogTile";

function HogList({ hogArray, setSelectedHog, selectedHog }) {
  //   const handleClick = (hog) => {
  //     onHogClick(hog);
  //   };

  return (
    <div className="ui grid container">
      {hogArray.map((hog) => (
        <HogTile
          key={hog.name}
          name={hog.name}
          image={hog.image}
          setSelectedHog={setSelectedHog}
          selectedHog={selectedHog}
          hog={hog}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          medal={hog["highest medal achieved"]}
        />
      ))}
    </div>
  );
}

export default HogList;
