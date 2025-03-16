import React from 'react';
import '../styles/PremiumMembership.css';

function PremiumMembership({ onSelectPlan }) {
  const plans = [
    {
      id: 'basic',
      name: 'Basic Membership',
      price: 9.99,
      features: ['Custom Digital Card', 'Monthly Newsletter', 'Fan Forum Access']
    },
    {
      id: 'premium',
      name: 'Premium Membership',
      price: 19.99,
      features: ['Custom Physical Card', 'Exclusive Content', 'Virtual Meet & Greets', 'Premium Discord Access']
    }
  ];

  return (
    <div className="plans-container">
      {plans.map(plan => (
        <div key={plan.id} className="plan-card">
          <h3>{plan.name}</h3>
          <p className="price">${plan.price}/month</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button 
            className="select-plan-btn"
            onClick={() => onSelectPlan(plan)}
          >
            Select Plan
          </button>
        </div>
      ))}
    </div>
  );
}

export default PremiumMembership;