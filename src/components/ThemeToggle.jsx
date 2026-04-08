import { useRecoilState } from "recoil";
import { themeState } from "../recoil/themeState";

export default function ThemeToggle() {
    const [theme, setTheme] = useRecoilState(themeState);

    const toggleTheme = () => {

        const newTheme = theme == "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button style={{ borderRadius: "12px", fontSize: "20px", }} onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"}
        </button>
    );
}