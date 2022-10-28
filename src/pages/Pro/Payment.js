import React from "react";
import PaymentsPng from "../../Images/Payment.jpeg";

export default function Payment() {
  return (
    <div className="payment">
      <h1>Payment</h1>
      <img src={PaymentsPng} alt="Payment" width="300px" height="300px"/>
      <h1>150$</h1>
      <a className="payment-btn" href="/pro/ProLanding">Access Pro</a>
    </div>
  );
}