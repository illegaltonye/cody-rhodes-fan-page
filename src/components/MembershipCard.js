import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumMembership from './PremiumMembership';
import PaymentModal from './PaymentModal';
import '../styles/MembershipCard.css';

function MembershipCard() {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    memberSince: new Date().toISOString().split('T')[0],
    customMessage: '',
    cardColor: '#000000',
    cardStyle: 'classic'
  });

  const [showPayment, setShowPayment] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const cardStyles = [
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'elite', name: 'Elite' }
  ];

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowPayment(true);
  };
  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCardDetails(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="membership-container"
      >
        <div className="card-editor">
          <h2>Customize Your Membership Card</h2>
          <div className="form-group">
            <label>Fan Name:</label>
            <input
              type="text"
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Custom Message:</label>
            <textarea
              name="customMessage"
              value={cardDetails.customMessage}
              onChange={handleInputChange}
              placeholder="Enter your message"
            />
          </div>
          <div className="form-group">
            <label>Card Color:</label>
            <input
              type="color"
              name="cardColor"
              value={cardDetails.cardColor}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Card Style:</label>
            <div className="style-selector">
              {cardStyles.map(style => (
                <button
                  key={style.id}
                  className={`style-btn ${cardDetails.cardStyle === style.id ? 'active' : ''}`}
                  onClick={() => setCardDetails({...cardDetails, cardStyle: style.id})}
                >
                  {style.name}
                </button>
              ))}
            </div>
          </div>
        </div>
  
        <motion.div 
          className={`card-preview ${cardDetails.cardStyle}`}
          style={{ backgroundColor: cardDetails.cardColor }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="card-content">
            <h3>AMERICAN NIGHTMARE FAN CLUB</h3>
            <p className="member-name">{cardDetails.name || 'Your Name'}</p>
            <p className="member-since">Member Since: {cardDetails.memberSince}</p>
            <p className="custom-message">{cardDetails.customMessage || 'Your Custom Message'}</p>
            <div className="card-footer">
              <img src="/cody-logo.png" alt="Cody Rhodes Logo" className="card-logo" />
            </div>
          </div>
        </motion.div>
        <PremiumMembership onSelectPlan={handlePlanSelect} />
        
        {showPayment && (
          <PaymentModal 
            plan={selectedPlan}
            onClose={() => setShowPayment(false)}
            onSuccess={() => {
              // Handle successful payment
            }}
          />
        )}
      </motion.div>
    );
  }

  export default MembershipCard;