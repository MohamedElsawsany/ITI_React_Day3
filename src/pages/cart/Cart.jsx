import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../../store/slices/cart";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <h3>Your cart is empty 🛒</h3>;
  }

  return (
    <div className="container my-5">
      <h3 className="mb-4">Cart</h3>
      <table className="table align-middle borderless">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={item.images}
                    alt={item.title}
                    className="me-3"
                    width="80"
                    height="80"
                  />
                  <div>
                    <strong>{item.title}</strong>
                    <div className="text-muted">Product Code: {item.code || "N/A"}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-dark btn-sm me-2"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm ms-2"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  ×
                </button>
              </td>
              <td>
                <strong>£{item.price}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-end">
        <div className="border p-3" style={{ width: "200px" }}>
          <div className="d-flex justify-content-between">
            <span>Total</span>
            <strong>£{total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
