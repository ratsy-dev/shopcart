import React, { useState } from "react";
import "../../components/modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutPage = ({
  isCartEmpty,
  cartTotal = 0,
  itemCount = 0,
  cartItems,
}) => {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState("visa");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [paypalEmail, setPaypalEmail] = useState("");
  const [paypalName, setPaypalName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleClose = () => setShow(false);

  const displayedTotal = cartTotal;
  const displayedItems = itemCount;

  const handleOrderConfirm = () => {
    // VALIDATION
    if (activeTab === "visa") {
      if (!cardName || !cardNumber || !expDate || !cvv) {
        toast.error("Please fill all card details ❌");
        return;
      }
    } else {
      if (!paypalEmail || !paypalName) {
        toast.error("Please fill PayPal details ❌");
        return;
      }
    }

    // GET CART
    const cart = cartItems;

    // CREATE ORDER
    const newOrder = {
      id: Date.now(),
      items: cart,
      amount: cart.reduce((t, i) => t + i.price * i.quantity, 0),
      date: new Date().toLocaleString(),
      paymentMethod: activeTab === "visa" ? "Credit Card" : "PayPal",
    };

    // SAVE ORDER IN LOCALSTORAGE
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    // SUCCESS TOAST
    toast.success("Your order has been placed successfully! 🎉");

    // CLEAR CART
    localStorage.removeItem("cart");

    // CLOSE MODAL
    handleClose();

    // REDIRECT
    setTimeout(() => {
      navigate("/order-history", { replace: true });
    }, 300);
  };

  return (
    <div className="modalCard">
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        disabled={isCartEmpty}
        className="py-2"
        style={{ opacity: isCartEmpty ? 0.5 : 1 }}
      >
        Proceed to Checkout
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Order Summary */}
          <div
            className="order-summary p-3 mb-3"
            style={{ background: "#f8f9fa", borderRadius: "8px" }}
          >
            <h5 className="mb-2">Order Summary</h5>
            <p>
              Items: <strong>{itemCount}</strong>
            </p>
            <p>
              Total Amount: <strong>${cartTotal.toFixed(2)}</strong>
            </p>
          </div>

          {/* Tabs */}
          <ul className="nav nav-tabs mb-3">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                onClick={() => setActiveTab("visa")}
              >
                Credit / Debit Card
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                onClick={() => setActiveTab("paypal")}
              >
                PayPal
              </button>
            </li>
          </ul>

          {/* Visa Form */}
          {activeTab === "visa" && (
            <div>
              <h6 className="mb-3">Card Details</h6>

              <div className="inputbox">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Cardholder Name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>

              <div className="inputbox mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Card Number"
                  maxLength={16}
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>

              <div className="d-flex gap-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={expDate}
                  onChange={(e) => setExpDate(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>

              <button
                className="btn btn-success w-100 mt-3"
                onClick={handleOrderConfirm}
              >
                Pay ${cartTotal.toFixed(2)}
              </button>
            </div>
          )}

          {/* PayPal Form */}
          {activeTab === "paypal" && (
            <div>
              <h6 className="mb-3">PayPal Information</h6>

              <input
                type="email"
                className="form-control"
                placeholder="PayPal Email"
                value={paypalEmail}
                onChange={(e) => setPaypalEmail(e.target.value)}
              />

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Account Name"
                value={paypalName}
                onChange={(e) => setPaypalName(e.target.value)}
              />

              <button
                className="btn btn-primary w-100 mt-3"
                onClick={handleOrderConfirm}
              >
                Pay with PayPal
              </button>
            </div>
          )}
        </Modal.Body>

        <p className="text-center text-muted small m-0 pb-3">
          * Your payment is 100% secure and encrypted.
        </p>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
