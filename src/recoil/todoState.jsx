import { atom } from "recoil";

export default todoListState = atom({
    key: "toDoListState",
    default: [], // mảng chứa đối tượng id, text, isComplete
})