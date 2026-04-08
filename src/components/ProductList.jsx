import { useSetRecoilState } from "recoil";
import { cartState } from "../recoil/cartState";

const products = [
    { id: 1, name: "Iphone", price: 1000 },
    { id: 2, name: "Samsung", price: 800 },
    { id: 3, name: "Xiaomi", price: 500 },
];

export default function ProductList() {
    const setCart = useSetRecoilState(cartState);

    const addToCart = (product) => {
        setCart((oldCart) => {
            const exist = oldCart.find(item => item.id === product.id);

            if (exist) {
                return oldCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...oldCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <div>
            <h3 style={{ color: "blueviolet", fontSize: "28px" }}>Danh sách sản phẩm</h3>
            {products.map(p => (
                <div style={{ fontSize: "20px", padding: "8px" }} key={p.id}>
                    {p.name} - ${p.price}
                    <button style={{ fontSize: "20px", borderRadius: "5px", padding: "2px", marginLeft: "15px" }} onClick={() => addToCart(p)}>Thêm</button>
                </div>
            ))}
        </div>
    );
}