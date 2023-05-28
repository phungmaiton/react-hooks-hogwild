import { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Filter from "./Filter";
import hogs from "../porkers_data";

function App() {
  const [selectedHog, setSelectedHog] = useState({});
  const [selectedOption, setSelectedOption] = useState("All");
  const [sort, setSort] = useState("name");

  const onSelect = (option) => {
    setSelectedOption(option);
  };

  const onSort = (option) => {
    setSort(option);
  };

  const filteredHogs = hogs
    .filter((hog) => {
      if (selectedOption === "All") return true;
      return hog.greased.toString() === selectedOption;
    })
    .sort((a, b) => {
      if (sort === "name") {
        console.log(a.name.localeCompare(b.name));
        return a.name.localeCompare(b.name);
      } else if (sort === "weight") {
        console.log(a.weight - b.weight);
        return a.weight - b.weight;
      }
    });

  console.log(filteredHogs);
  // const onSort = (option) => {
  //   console.log(option);
  //   setSort(option);
  //   if (sort === "name") {
  //     return filteredHogs.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   } else if (sort === "weight") {
  //     return filteredHogs.sort((a, b) => a.weight - b.weight);
  //   }

  //   console.log(filteredHogs);
  // };

  return (
    <div className="App">
      <Nav />
      <Filter onSelect={onSelect} onSort={onSort} />
      <HogList
        hogArray={filteredHogs}
        setSelectedHog={setSelectedHog}
        selectedHog={selectedHog}
      />
    </div>
  );
}

export default App;
