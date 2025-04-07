import { useState } from "react";

const FilterBar = ({ items, onFilter }) => {
  const [temperature, setTemperature] = useState(0); // Track the selected temperature

  const handleSliderChange = (e) => {
    const value = parseFloat(e.target.value);
    setTemperature(value);

    // Filter items based on the temperature slider
    const filtered = items.filter(item => item.temp >= value);
    // Pass the filtered items to the parent component
    onFilter(filtered);
  };

  return (
    <div>
      <label>Filter by temperature: {temperature}°F</label>
      <input
        type="range"
        min="0"
        max="100" // Adjust this if your data has a wider temp range
        value={temperature}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default FilterBar;

