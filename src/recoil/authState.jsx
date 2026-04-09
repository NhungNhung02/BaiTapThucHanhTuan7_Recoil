import { atom } from "recoil";

// Lấy token từ localStorage khi app load lần đầu
const savedToken = localStorage.getItem("token");

export const authState = atom({
    key: "authState",

    // default state
    default: {
        token: savedToken || null, // nếu có token thì dùng, không thì null
        isAuthenticated: !!savedToken, // chuyển token -> boolean (true/false)
    },
});