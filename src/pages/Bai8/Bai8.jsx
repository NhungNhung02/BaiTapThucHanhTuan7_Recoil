import SearchInput from "../../components/SearchInput";
import SearchResult from "../../components/SearchResult";

export default function Bai8() {
    return (
        <div>
            <h1 style={{ color: "blueviolet", fontSize: "25px" }}>Bài 8 - Search + Debounce + API</h1>

            <SearchInput />
            <SearchResult />
        </div>
    );
}