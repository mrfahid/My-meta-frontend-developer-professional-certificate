import "./App.css";
import { useEffect, useState } from "react";

// Render props component for mouse position
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // Use the render prop to provide mouse position data to the child components
  return render(mousePosition);
};

const App = () => {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>

      {/* PanelMouseLogger using MousePosition render prop */}
      <MousePosition
        render={(mousePosition) => (
          <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          </div>
        )}
      />

      {/* PointMouseLogger using MousePosition render prop */}
      <MousePosition
        render={(mousePosition) => (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        )}
      />
    </div>
  );
};

export default App;
