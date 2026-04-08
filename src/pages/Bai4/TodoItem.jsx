import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/todoState";

export default function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListState);

    // Hàm xóa: lọc bỏ item có id hiện tại
    const deleteItem = () => {
        setTodoList(todoList.filter((todo) => todo.id !== item.id));
    };

    // Hàm sửa: đơn giản là dùng prompt để lấy text mới
    const editItem = () => {
        const newText = prompt("Sửa công việc:", item.text);
        if (newText) {
            const newList = todoList.map((todo) =>
                todo.id === item.id ? { ...todo, text: newText } : todo
            );
            setTodoList(newList);
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "18px", minWidth: "150px" }}>• {item.text}</span>
            <button onClick={editItem} style={{ color: "blue" }}>Sửa</button>
            <button onClick={deleteItem} style={{ color: "red" }}>Xóa</button>
        </div>
    );
}