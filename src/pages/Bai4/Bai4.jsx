import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Bai4() {
    return (
        <div style={{ padding: "40px", backgroundColor: "#f9f9f9", minHeight: "50vh" }}>
            <h1 style={{ color: "#333" }}>Bài 4: Quản lý Todo List (Global State)</h1>
            <hr style={{ marginBottom: "20px" }} />
            <TodoInput />
            <TodoList />
        </div>
    );
}