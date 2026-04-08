import { useRecoilValue } from "recoil";
import { searchResultState } from "../recoil/searchState";

export default function SearchResult() {
    const results = useRecoilValue(searchResultState);

    if (results.length === 0) {
        return <p>Không có kết quả</p>;
    }

    return (
        <div>
            {results.map(item => (
                <div
                    key={item.id}
                    style={{
                        padding: "8px",
                        borderBottom: "1px solid #ccc"
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
}