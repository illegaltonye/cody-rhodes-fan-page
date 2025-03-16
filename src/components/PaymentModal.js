import React, { useState } from 'react';
import '../styles/PaymentModal.css';

function PaymentModal({ plan, onClose, onSuccess }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      onSuccess();
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Complete Purchase</h2>
        <p>Selected Plan: {plan.name}</p>
        <p>Price: ${plan.price}/month</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
            />
          </div>
          {/* Add more payment form fields */}
          <div className="modal-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Pay Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentModal;