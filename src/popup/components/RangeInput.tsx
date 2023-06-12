import React, { useState } from 'react';

function RangeInput() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Temperature: {value}
      </label>
      <input
        id="default-range"
        type="range"
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
    </div>
  );
}

export default RangeInput;
