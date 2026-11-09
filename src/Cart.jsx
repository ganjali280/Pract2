import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);
    
    let total = 0;
    for (const item of cart) {
    total += Number(item.price);
    }

    return (
        <div>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
            <p>Корзина пуста</p>
        ) : (
            <div>
            {cart.map((item, index) => (
            <div key={index}>
                <span>{item.name}</span>
                <span> — {item.price} руб.</span>
                <button onClick={() => removeFromCart(index)}>Удалить</button>
            </div>
            ))}
            </div>
        )}
        <p>Итого: {total} рублей</p>
        </div>
    );
}

export default Cart;