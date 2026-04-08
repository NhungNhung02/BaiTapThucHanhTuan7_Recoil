import { atom, selector } from "recoil";

// state giỏ hàng
export const cartState = atom({
    key: "cartState",
    default: [],
});

// selector tính tổng tiền
export const totalPriceState = selector({
    key: "totalPriceState",
    get: ({ get }) => {
        const cart = get(cartState);
        return cart.reduce((total, item) =>
            total + item.price * item.quantity, 0
        );
    }
});