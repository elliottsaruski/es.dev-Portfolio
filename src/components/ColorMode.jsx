import { useState } from "react";
import { RiMoonClearFill, RiSunLine } from "react-icons/ri";

function ColorMode() {
  const [colorTheme, setColorTheme] = useState("dark");

  function toggleColorTheme() {
    colorTheme === "dark" ? setColorTheme("light") : setColorTheme("dark");
  }

  return (
    <button className="colorThemeToggle" onClick={toggleColorTheme}>
      {colorTheme === "light" ? <RiSunLine /> : <RiMoonClearFill />}
    </button>
  );
}

export default ColorMode;
