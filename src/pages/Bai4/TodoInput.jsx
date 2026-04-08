import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/todoState";

export default function TodoInput() {
    const [inputValue, setInputValue] = useState("");
    // useSetRecoilState chỉ dùng để ghi, giúp component không bị render lại vô ích khi list thay đổi
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        if (!inputValue.trim()) return;
        setTodoList((oldList) => [
            ...oldList,
            { id: Date.now(), text: inputValue, isComplete: false },
        ]);
        setInputValue("");
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Thêm công việc mới..."
            />
            <button onClick={addItem} style={{ marginLeft: "10px", cursor: "pointer" }}>Thêm</button>
        </div>
    );
}