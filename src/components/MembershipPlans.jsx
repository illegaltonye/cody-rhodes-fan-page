import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('your_publishable_key')

function MembershipPlans() {
  const handleSubscription = async (priceId) => {
    const stripe = await stripePromise
    // Call your backend to create a checkout session
    // Redirect to Stripe checkout
  }

  return (
    <div className="membership-section">
      <h2>Choose Your Membership</h2>
      <div className="membership-options">
        <div className="membership-card">
          <h3>Basic Membership</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Access to exclusive content</li>
            <li>Monthly newsletter</li>
            <li>Fan community access</li>
          </ul>
          <button onClick={() => handleSubscription('basic_price_id')}>
            Subscribe Now
          </button>
        </div>

        <div className="membership-card">
          <h3>Premium Membership</h3>
          <p>$19.99/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Virtual meet & greets</li>
            <li>Exclusive merchandise</li>
            <li>Priority event access</li>
          </ul>
          <button onClick={() => handleSubscription('premium_price_id')}>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default MembershipPlans