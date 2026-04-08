import { useRecoilState } from "recoil";
import { themeState } from "../state/themeState";

export default function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
   
    const newTheme =theme == "light" ? "dark": "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}