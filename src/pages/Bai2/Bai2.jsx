import { useRecoilValue } from "recoil";
import { themeState } from "./state/themeState";
import ThemeToggle from "./components/ThemeToggle";
//import './App.css'
export default function Bai2() {
  const theme = useRecoilValue(themeState);

  return (
    <div
      style={{
        background: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",

      }}
    >
      <h1>Bài 2: Theme Toggle (Dark / Light)</h1>
      <ThemeToggle />
      <p>Current theme: {theme}</p>
    </div>
  );
}