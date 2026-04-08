import { atom } from "recoil";

export const userState = atom({
    key: "userState", // Key này phải là duy nhất, không được trùng với key "themeState"
    default: null,  //null nay chx login
});