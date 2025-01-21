import React, { useState, useEffect } from "react";
import { useTimezoneSelect, allTimezones } from "react-timezone-select";

const TimezoneSelect = ({ onChange }) => {
  const labelStyle = "original";
  const selectStyle = "react-select";
  const timezones = {
    ...allTimezones,
    "America/New_York": "New York City",
  };

  const { options, parseTimezone } = useTimezoneSelect({ labelStyle, selectStyle, timezones });
  const [selectedTimezone, setSelectedTimezone] = useState("");

  // Sort the options alphabetically by the value
  const sortedOptions = options.sort((a, b) => a.value.localeCompare(b.value));
  
  useEffect(() => {
    if (selectedTimezone) {
      onChange(selectedTimezone); // Only call onChange when selectedTimezone is updated
    }
  }, [selectedTimezone]);

  return (
    <select
      onChange={(e) => setSelectedTimezone(parseTimezone(e.currentTarget.value))}
      value={selectedTimezone}
      className="px-3 py-1 border border-gray-300 rounded-md text-sm w-full bg-gray-100"
    >
      {sortedOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}, {option.value}
        </option>
      ))}
    </select>
  );
};

export default TimezoneSelect;
