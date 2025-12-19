// import React, { useState } from "react";
// import "../../components/modal.css";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const CheckoutPage = ({
//   isCartEmpty,
//   cartTotal = 0,
//   itemCount = 0,
//   cartItems,
// }) => {
//   const [show, setShow] = useState(false);
//   const [activeTab, setActiveTab] = useState("visa");

//   const [cardName, setCardName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expDate, setExpDate] = useState("");
//   const [cvv, setCvv] = useState("");

//   const [paypalEmail, setPaypalEmail] = useState("");
//   const [paypalName, setPaypalName] = useState("");

//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   const handleClose = () => setShow(false);

//   const displayedTotal = cartTotal;
//   const displayedItems = itemCount;

//   const isValidName = (name) => /^[A-Za-z ]+$/.test(name);

//   const isValidCardNumber = (num) => /^[0-9]{16}$/.test(num);

//   const isValidCVV = (cvv) => /^[0-9]{3,4}$/.test(cvv);

//   const isValidExpiry = (exp) => {
//     if (!/^\d{2}\/\d{2}$/.test(exp)) return false;

//     const [mm, yy] = exp.split("/").map(Number);

//     if (mm < 1 || mm > 12) return false;

//     const currentYear = Number(String(new Date().getFullYear()).slice(-2));
//     const currentMonth = new Date().getMonth() + 1;

//     // check expiry
//     if (yy < currentYear) return false;
//     if (yy === currentYear && mm < currentMonth) return false;

//     return true;
//   };

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleOrderConfirm = () => {
//     // VALIDATION
//     if (activeTab === "visa") {
//       if (!cardName || !cardNumber || !expDate || !cvv) {
//         toast.error("Please fill all card details ❌");
//         return;
//       }
//     } else {
//       if (!paypalEmail || !paypalName) {
//         toast.error("Please fill PayPal details ❌");
//         return;
//       }
//     }

//     if (activeTab === "visa") {
//       if (!isValidName(cardName)) {
//         toast.error("Invalid Name — only alphabets allowed ❌");
//         return;
//       }

//       if (!isValidCardNumber(cardNumber)) {
//         toast.error("Card Number must be exactly 16 digits ❌");
//         return;
//       }

//       if (!isValidExpiry(expDate)) {
//         toast.error("Enter a valid expiry date (MM/YY) ❌");
//         return;
//       }

//       if (!isValidCVV(cvv)) {
//         toast.error("CVV must be 3 or 4 digits ❌");
//         return;
//       }
//     }

//     if (activeTab === "paypal") {
//       if (!isValidEmail(paypalEmail)) {
//         toast.error("Enter a valid PayPal Email ❌");
//         return;
//       }

//       if (!isValidName(paypalName)) {
//         toast.error("Invalid PayPal Name — only alphabets allowed ❌");
//         return;
//       }
//     }

//     // GET CART
//     const cart = cartItems;

//     // CREATE ORDER
//     const newOrder = {
//       id: Date.now(),
//       items: cart,
//       amount: cart.reduce((t, i) => t + i.price * i.quantity, 0),
//       date: new Date().toLocaleString(),
//       paymentMethod: activeTab === "visa" ? "Credit Card" : "PayPal",
//     };

//     // SAVE ORDER IN LOCALSTORAGE
//     const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     existingOrders.push(newOrder);
//     localStorage.setItem("orders", JSON.stringify(existingOrders));

//     // SUCCESS TOAST
//     toast.success("Your order has been placed successfully! 🎉");

//     // CLEAR CART
//     localStorage.removeItem("cart");

//     // CLOSE MODAL
//     handleClose();

//     // REDIRECT
//     setTimeout(() => {
//       navigate("/order-history", { replace: true });
//     }, 300);
//   };

//   const handleCardNumberChange = (e) => {
//     let raw = e.target.value.replace(/\D/g, ""); // remove all non-digits

//     // allow typing up to 16 digits only
//     if (raw.length > 16) return;

//     // insert space every 4 digits: 1234 5678 9123 4567
//     let formatted = raw.replace(/(.{4})/g, "$1 ").trim();
//     setCardNumber(formatted);
//   };

//   return (
//     <div className="modalCard">
//       <Button
//         variant="primary"
//         onClick={() => setShow(true)}
//         disabled={isCartEmpty}
//         className="py-2"
//         style={{ opacity: isCartEmpty ? 0.5 : 1 }}
//       >
//         Proceed to Checkout
//       </Button>

//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Checkout</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           {/* Order Summary */}
//           <div
//             className="order-summary p-3 mb-3"
//             style={{ background: "#f8f9fa", borderRadius: "8px" }}
//           >
//             <h5 className="mb-2">Order Summary</h5>
//             <p>
//               Items: <strong>{itemCount}</strong>
//             </p>
//             <p>
//               Total Amount: <strong>${cartTotal.toFixed(2)}</strong>
//             </p>
//           </div>

//           {/* Tabs */}
//           <ul className="nav nav-tabs mb-3">
//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
//                 onClick={() => setActiveTab("visa")}
//               >
//                 Credit / Debit Card
//               </button>
//             </li>

//             <li className="nav-item">
//               <button
//                 className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
//                 onClick={() => setActiveTab("paypal")}
//               >
//                 PayPal
//               </button>
//             </li>
//           </ul>

//           {/* Visa Form */}
//           {activeTab === "visa" && (
//             <div>
//               <h6 className="mb-3">Card Details</h6>

//               <div className="inputbox">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Cardholder Name"
//                   value={cardName}
//                   onChange={(e) => setCardName(e.target.value)}
//                 />
//               </div>

//               <div className="inputbox mt-2">
//                 <input
//                   type="text"
//                   placeholder="card number"
//                   className="form-control"
//                   maxLength={19}
//                   value={cardNumber}
//                   onChange={handleCardNumberChange}
//                 />
//               </div>

//               <div className="d-flex gap-2 mt-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="MM/YY"
//                   value={expDate}
//                   onChange={(e) => {
//                     let value = e.target.value.replace(/\D/g, ""); // keep only digits

//                     if (value.length >= 3) {
//                       value = value.substring(0, 4); // limit to 4 digits
//                       value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2"); // insert slash
//                     }

//                     setExpDate(value);
//                   }}
//                 />
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="CVV"
//                   maxLength={4}
//                   value={cvv}
//                   onChange={(e) => setCvv(e.target.value)}
//                 />
//               </div>

//               <button
//                 className="btn btn-success w-100 mt-3"
//                 onClick={handleOrderConfirm}
//               >
//                 Pay ${cartTotal.toFixed(2)}
//               </button>
//             </div>
//           )}

//           {/* PayPal Form */}
//           {activeTab === "paypal" && (
//             <div>
//               <h6 className="mb-3">PayPal Information</h6>

//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="PayPal Email"
//                 value={paypalEmail}
//                 onChange={(e) => setPaypalEmail(e.target.value)}
//               />

//               <input
//                 type="text"
//                 className="form-control mt-2"
//                 placeholder="Account Name"
//                 value={paypalName}
//                 onChange={(e) => setPaypalName(e.target.value)}
//               />

//               <button
//                 className="btn btn-primary w-100 mt-3"
//                 onClick={handleOrderConfirm}
//               >
//                 Pay with PayPal
//               </button>
//             </div>
//           )}
//         </Modal.Body>

//         <p className="text-center text-muted small m-0 pb-3">
//           * Your payment is 100% secure and encrypted.
//         </p>
//       </Modal>
//     </div>
//   );
// };

// export default CheckoutPage;

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

  const handleClose = () => setShow(false);

  /* ---------------------- VALIDATORS ------------------------ */

  const isValidName = (name) => /^[A-Za-z ]+$/.test(name.trim());

  const getRawCard = (value) => value.replace(/\D/g, ""); // remove spaces for validation

  const isValidCardNumber = (num) => /^[0-9]{16}$/.test(getRawCard(num));

  const isValidCVV = (cvv) => /^[0-9]{3,4}$/.test(cvv);

  const isValidExpiry = (exp) => {
    if (!/^\d{2}\/\d{2}$/.test(exp)) return false;

    const [mm, yy] = exp.split("/").map(Number);

    if (mm < 1 || mm > 12) return false;

    const currYear = Number(String(new Date().getFullYear()).slice(-2));
    const currMonth = new Date().getMonth() + 1;

    if (yy < currYear) return false;
    if (yy === currYear && mm < currMonth) return false;

    return true;
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  /* ------------------ Input Auto Formatting ------------------ */

  const handleCardNumberChange = (e) => {
    let raw = e.target.value.replace(/\D/g, ""); // keep only digits

    if (raw.length > 16) raw = raw.slice(0, 16);

    const formatted = raw.replace(/(.{4})/g, "$1 ").trim();

    setCardNumber(formatted);
  };

  const handleExpChange = (e) => {
    let raw = e.target.value.replace(/\D/g, "");

    if (raw.length > 4) raw = raw.slice(0, 4);

    if (raw.length >= 3) {
      raw = raw.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    }

    setExpDate(raw);
  };

  /* ------------------ Confirm Order ------------------ */

  const handleOrderConfirm = () => {
    // Empty check
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

    // VISA validation
    if (activeTab === "visa") {
      if (!isValidName(cardName)) return toast.error("Invalid Name ❌");

      if (!isValidCardNumber(cardNumber))
        return toast.error("Card Number must be 16 digits ❌");

      if (!isValidExpiry(expDate))
        return toast.error("Enter a valid expiry date ❌ (MM/YY)");

      if (!isValidCVV(cvv)) return toast.error("CVV must be 3 or 4 digits ❌");
    }

    // PayPal validation
    if (activeTab === "paypal") {
      if (!isValidEmail(paypalEmail))
        return toast.error("Invalid PayPal Email ❌");

      if (!isValidName(paypalName))
        return toast.error("Name must contain alphabets only ❌");
    }

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      amount: cartTotal,
      date: new Date().toLocaleString(),
      paymentMethod: activeTab === "visa" ? "Credit Card" : "PayPal",
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    toast.success("Your order has been placed successfully! 🎉");

    localStorage.removeItem("cart");
    handleClose();

    setTimeout(() => navigate("/order-history", { replace: true }), 300);
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="modalCard">
      <Button
        variant="primary"
        onClick={() => setShow(true)}
        disabled={isCartEmpty}
        style={{ opacity: isCartEmpty ? 0.5 : 1 }}
      >
        Proceed to Checkout
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* Order Summary */}
          <div
            style={{
              background: "#f8f9fa",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h5>Order Summary</h5>
            <p>
              Items: <strong>{itemCount}</strong>
            </p>
            <p>
              Total Amount: <strong>${cartTotal.toFixed(2)}</strong>
            </p>
          </div>

          {/* Tabs */}
          <ul className="nav nav-tabs mt-3">
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

          {/* Card Payment */}
          {activeTab === "visa" && (
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Cardholder Name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />

              <input
                type="text"
                className="form-control mt-2"
                placeholder="Card Number"
                value={cardNumber}
                maxLength={19}
                onChange={handleCardNumberChange}
              />

              <div className="d-flex gap-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="MM/YY"
                  value={expDate}
                  maxLength={5}
                  onChange={handleExpChange}
                />

                <input
                  type="text"
                  className="form-control"
                  placeholder="CVV"
                  maxLength={4}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
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

          {/* PayPal */}
          {activeTab === "paypal" && (
            <div className="mt-3">
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

        <p className="text-center text-muted small mb-3">
          * Your payment is 100% secure and encrypted.
        </p>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
