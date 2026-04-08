import { atom } from "recoil";

// Tạo global state cho notification
export const notificationState = atom({
    key: "notificationState",
    // key phải duy nhất trong toàn bộ app (Recoil dùng để quản lý)

    default: null,
    // ban đầu không có thông báo
    // khi có sẽ là object: { message, type }
});