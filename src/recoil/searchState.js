import { atom } from "recoil";

// lưu keyword (text user nhập)
export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

// lưu kết quả từ API
export const searchResultState = atom({
    key: "searchResultState",
    default: [],
});