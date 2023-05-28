function Filter({ onSelect, onSort }) {
  const handleSelect = (e) => {
    onSelect(e.target.value);
    console.log(e.target.value);
  };

  const handleSort = (e) => {
    onSort(e.target.value);
  };
  return (
    <div>
      <label>Grease Filter: </label>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        <option value="false">Not Greased</option>
        <option value="true">Greased</option>
      </select>
      <label>Sort By:</label>
      <select onChange={handleSort}>
        <option value="sort">Sort</option>
        <option value="name">Sort by Name</option>
        <option value="weight">Sort by Weight</option>
      </select>
    </div>
  );
}

export default Filter;
