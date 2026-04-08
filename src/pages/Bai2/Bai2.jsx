import { useRecoilValue } from "recoil";
import { themeState } from "./state/themeState";
import ThemeToggle from "./components/ThemeToggle";
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
      <h1 style={{color: "green"}}>Bài 2: Theme Toggle (Dark / Light)</h1>
      <ThemeToggle />
      <p style={{ fontSize: "20px", padding:"10px"}}>Current theme: {theme}</p>
    </div>
  );
}