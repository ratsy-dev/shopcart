import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";
import { toast } from "react-toastify";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState("");

  const itemCount = cartItems.length;

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    const updatedCart = [...cartItems];
    setCartItems(updatedCart);
    // Update local storage with the new cart items
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      const updatedCart = [...cartItems];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  // Handle item removal
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Reset discount if cart becomes empty
    if (updatedCart.length === 0) {
      setDiscount(0);
    }
  };

  // Calculate the cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  const applyCoupon = (e) => {
    e.preventDefault();
    const code = e.target.coupon.value.trim().toUpperCase();

    if (!code) return;

    if (code === "SHOP10") {
      setDiscount(10);
      toast.success("10% Discount Applied! 🎉");
    } else if (code === "SHOP20") {
      setDiscount(20);
      toast.success("20% Discount Applied! 🎉");
    } else if (code === "SHOP50") {
      setDiscount(50);
      toast.success("50% Discount Applied! 🎉");
    } else {
      setDiscount(0);
      toast.error("Invalid Coupon Code ❌");
    }

    e.target.coupon.value = "";
  };

  const selectCoupon = (code) => {
    document.querySelector("input[name='coupon']").value = code;
    setSelectedCoupon(code);
  };

  const discountAmount = (cartSubtotal * discount) / 100;

  const finalTotal = cartSubtotal - discountAmount;

  const isCartEmpty = cartItems.length === 0;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <img src={`${item.img}`} alt={item.name} />
                        </div>
                        <div className="p-content">{item.name}</div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="btn btn-link p-0 border-0"
                        >
                          <img src={delImgUrl} alt="delete" />
                        </button>
                      </td>
                    </tr>
                  ))}

                  {isCartEmpty && (
                    <tr>
                      <td colSpan="5" className="text-center py-5">
                        <h4>Your cart is empty 🛒</h4>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div
                className={`cart-checkout-box ${
                  isCartEmpty ? "disabled-area" : ""
                }`}
              >
                <form className="coupon" onSubmit={applyCoupon}>
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                    disabled={isCartEmpty}
                  />
                  <input
                    type="submit"
                    value="Apply Coupon"
                    disabled={isCartEmpty}
                    style={{ opacity: isCartEmpty ? 0.5 : 1 }}
                  />
                </form>
                <form className="cart-checkout">
                  {/* <input type="submit" value="Update Cart" /> */}
                  <Link to="/shop">
                    <input type="submit" value="Update Cart" />
                  </Link>
                  <div>
                    <CheckoutPage
                      isCartEmpty={isCartEmpty}
                      cartTotal={finalTotal}
                      itemCount={itemCount}
                      cartItems={cartItems}
                    />
                  </div>
                </form>
              </div>
              {!isCartEmpty && (
                <div className="m-4">
                  <p style={{ fontWeight: 600, marginBottom: "8px" }}>
                    Available Coupons:
                  </p>

                  <div className="d-flex flex-row gap-2">
                    <button
                      type="button"
                      style={{
                        background:
                          selectedCoupon === "SHOP10" ? "#ffe9d6" : "#f5f5f5",
                        border:
                          selectedCoupon === "SHOP10"
                            ? "2px solid #ff7a00"
                            : "1px solid #ddd",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "fit-content",
                        fontWeight: 600,
                        transition: "0.2s",
                      }}
                      onClick={() => selectCoupon("SHOP10")}
                    >
                      SHOP10 – 10% OFF
                    </button>

                    <button
                      type="button"
                      style={{
                        background:
                          selectedCoupon === "SHOP20" ? "#ffe9d6" : "#f5f5f5",
                        border:
                          selectedCoupon === "SHOP20"
                            ? "2px solid #ff7a00"
                            : "1px solid #ddd",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "fit-content",
                        fontWeight: 600,
                        transition: "0.2s",
                      }}
                      onClick={() => selectCoupon("SHOP20")}
                    >
                      SHOP20 – 20% OFF
                    </button>

                    <button
                      type="button"
                      style={{
                        background:
                          selectedCoupon === "SHOP50" ? "#ffe9d6" : "#f5f5f5",
                        border:
                          selectedCoupon === "SHOP50"
                            ? "2px solid #ff7a00"
                            : "1px solid #ddd",
                        padding: "10px 15px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        width: "fit-content",
                        fontWeight: 600,
                        transition: "0.2s",
                      }}
                      onClick={() => selectCoupon("SHOP50")}
                    >
                      SHOP50 – 50% OFF
                    </button>
                  </div>

                  <p className="text-muted mt-2" style={{ fontSize: "14px" }}>
                    ⚠️ Only one coupon can be applied per order.
                  </p>
                </div>
              )}

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* shipping  */}

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">
                            ${cartSubtotal.toFixed(2)}
                          </p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Discount ({discount}%)
                          </span>
                          <p className="pull-right">
                            - ${discountAmount.toFixed(2)}
                          </p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">${finalTotal.toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
