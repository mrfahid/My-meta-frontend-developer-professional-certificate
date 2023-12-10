import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = () => {
    // Call the toggleTheme function to change the theme
    toggleTheme();
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={handleChange} // Add the onChange prop with the callback function
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
