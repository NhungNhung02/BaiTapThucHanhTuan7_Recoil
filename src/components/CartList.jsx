import { useRecoilValue } from "recoil";
import { cartState, totalPriceState } from "../recoil/cartState";
import CartItem from "./CartItem";

export default function CartList() {
    const cart = useRecoilValue(cartState);
    const total = useRecoilValue(totalPriceState);

    return (
        <div>
            <h2 style={{ padding: "10px", color: "blueviolet" }}>Giỏ hàng</h2>

            {cart.length === 0 ? (
                <p style={{ fontSize: "20px" }}>Giỏ hàng trống</p>
            ) : (
                <>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <h3 style={{ color: "red", fontSize: "20px" }}>Tổng tiền: ${total}</h3>
                </>
            )}
        </div>
    );
}