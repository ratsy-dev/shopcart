// import React, { useEffect, useState } from "react";
// import PageHeader from "../../components/PageHeader";

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);
//   }, []);

//   return (
//     <div>
//       <PageHeader title="Your Orders" curPage="Orders" />

//       <div style={{ marginTop: "5rem" }} className="container py-4 text-center">
//         {orders.length === 0 ? (
//           <h4>No orders found.</h4>
//         ) : (
//           orders.map((order) => (
//             <div key={order.id} className="border p-3 mb-4 shadow-sm">
//               <h5>Order #{order.id}</h5>
//               <p>Date: {order.date}</p>
//               <p>
//                 Total Amount: <b>${order.amount}</b>
//               </p>

//               <h6 className="mt-3">Items:</h6>
//               <ul>
//                 {order.items.map((item, i) => (
//                   <li key={i}>
//                     {item.name} (x{item.quantity}) — $
//                     {item.price * item.quantity}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrdersPage;

import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse()); // newest first
  }, []);

  return (
    <div>
      <PageHeader title={"Your Orders"} curPage={"Orders"} />

      <div className="container py-5">
        {orders.length === 0 ? (
          <div className="text-center">
            <h3>No Orders Found</h3>
            <p className="text-muted">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div>
                    <h5>Order ID: #{order.id}</h5>
                    <p className="text-muted">{order.date}</p>
                  </div>
                  <span className="order-status">ORDER PLACED</span>
                </div>

                <div className="order-body">
                  <p>
                    <strong>Payment Method:</strong> {order.paymentMethod}
                  </p>

                  <div className="order-items">
                    {order.items.map((item, i) => (
                      <div key={i} className="order-item">
                        <img src={item.img} alt="" className="order-thumb" />
                        <div>
                          <h6>{item.name}</h6>
                          <p className="text-muted">
                            Quantity: {item.quantity}
                          </p>
                          <p>${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-total">
                    <strong>Total Amount:</strong>{" "}
                    <span className="amount">${order.amount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inline Styling for quick preview */}
      <style>{`
        .order-card {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          margin-bottom: 25px;
        }
        .order-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
          padding-bottom: 12px;
          margin-bottom: 15px;
        }
        .order-status {
          background: #28a745;
          padding: 4px 12px;
          border-radius: 20px;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
        }
        .order-body {
          padding: 10px 0;
        }
        .order-items {
          margin-top: 10px;
        }
        .order-item {
          display: flex;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid #f1f1f1;
        }
        .order-item:last-child {
          border-bottom: none;
        }
        .order-thumb {
          width: 70px;
          height: 70px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid #ddd;
        }
        .order-total {
          margin-top: 20px;
          font-size: 18px;
        }
        .amount {
          color: #e63946;
          font-weight: bold;
          margin-left: 8px;
        }
      `}</style>
    </div>
  );
};

export default Orders;
