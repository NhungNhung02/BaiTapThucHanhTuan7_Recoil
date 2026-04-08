import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { searchKeywordState, searchResultState } from "../recoil/searchState";

export default function SearchInput() {
    const [input, setInput] = useState(""); // state local để nhập
    const setKeyword = useSetRecoilState(searchKeywordState);
    const setResult = useSetRecoilState(searchResultState);

    useEffect(() => {
        // debounce: đợi 500ms sau khi user ngừng gõ
        const timer = setTimeout(() => {
            if (!input.trim()) {
                setResult([]); // nếu rỗng → clear kết quả
                return;
            }

            // cập nhật keyword global
            setKeyword(input);

            // gọi API (fake API)
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${input}`)
                .then(res => res.json())
                .then(data => {
                    setResult(data); // lưu vào global state
                })
                .catch(err => {
                    console.error("API error:", err);
                });

        }, 500);

        // cleanup: xóa timer cũ nếu user gõ tiếp
        return () => clearTimeout(timer);

    }, [input]);

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập tên để tìm..."
                style={{
                    padding: "8px",
                    fontSize: "16px",
                    width: "250px"
                }}
            />
        </div>
    );
}