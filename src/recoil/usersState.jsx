import { atom } from "recoil";

// 👉 Global state cho bài 7 (fetch danh sách user)
export const usersState = atom({
    key: "usersState", //  phải khác userState

    default: {
        data: [],        // chứa danh sách user
        loading: false,  // trạng thái đang gọi API
        error: null,     //  lưu lỗi nếu có
    },
});