import { atom } from "recoil";

const getInitialTheme = () => {
  const saved = localStorage.getItem("theme");
  return saved ? saved : "light";
};

export const themeState = atom({
  key: "themeState",
  default: getInitialTheme(),
});