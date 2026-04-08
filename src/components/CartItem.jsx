import { useRecoilState } from "recoil";
import { cartState } from "../recoil/cartState";

export default function CartItem({ item }) {
    const [cart, setCart] = useRecoilState(cartState);

    const increase = () => {
        setCart(cart.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ));
    };

    const decrease = () => {
        if (item.quantity === 1) {
            setCart(cart.filter(i => i.id !== item.id));
        } else {
            setCart(cart.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
            ));
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "20px" }}>{item.name}</span>
            <span>x{item.quantity}</span>
            <button style={{ fontSize: "20", }} onClick={increase}>+</button>
            <button style={{ fontSize: "20" }} onClick={decrease}>-</button>
        </div>
    );
}