import { useRecoilValue } from "recoil";
import { todoListState } from "../../recoil/todoState";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const list = useRecoilValue(todoListState);

    return (
        <div>
            {list.length === 0 ? <p>Danh sách trống</p> : (
                list.map((item) => <TodoItem key={item.id} item={item} />)
            )}
        </div>
    );
}