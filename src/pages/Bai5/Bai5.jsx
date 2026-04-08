import ProductList from "../../components/ProductList";
import CartList from "../../components/CartList";

export default function Bai5() {
    return (
        <div>
            <h2 style={{ color: "red", fontSize: "30px" }}>Bài 5 - Giỏ hàng</h2>
            <ProductList />
            <CartList />
        </div >
    );
}