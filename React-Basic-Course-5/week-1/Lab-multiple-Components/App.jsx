import React from "react";
import Card from "./Card";

function App() {
  return (
    <>
      <h2>Task: Add three card Elements</h2>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
    </>
  );
}

export default App;
