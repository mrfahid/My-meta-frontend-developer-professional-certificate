import { useState, useEffect, useRef } from "react";

export default function App() {
  // Step 1: Initialize state using the useState hook
  const [day, setDay] = useState("Monday");
  // Step 2: Get the previous day using a custom hook
  const prevDay = usePrevious(day);

  // Step 3: Define a custom hook to get the previous value
  function usePrevious(val) {
    // Step 4: Use the useRef hook to create a mutable object
    const ref = useRef();

    // Step 5: Use the useEffect hook to run code after rendering
    useEffect(() => {
      // Step 6: Update the ref.current value when val changes
      ref.current = val;
    }, [val]); // Step 7: Specify val as a dependency

    // Step 8: Return the ref.current value
    return ref.current;
  }

  // Step 9: Define a function to get the next day and update state
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday");
    } else if (day === "Tuesday") {
      setDay("Wednesday");
    } else if (day === "Wednesday") {
      setDay("Thursday");
    } else if (day === "Thursday") {
      setDay("Friday");
    } else if (day === "Friday") {
      setDay("Monday");
    }
  };

  // Step 10: Render the component
  return (
    <div style={{ padding: "40px" }}>
      <h1>
        Today is: {day}<br />
        {/* Step 11: Display the previous day if it exists */}
        {prevDay && (
          <span>Previous workday was: {prevDay}</span>
        )}
      </h1>
      {/* Step 12: Add a button to get the next day */}
      <button onClick={getNextDay}>Get next day</button>
    </div>
  );
}
