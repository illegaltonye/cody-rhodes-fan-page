import { useState } from 'react'
import './App.css'

function App() {
  const [membershipType, setMembershipType] = useState('basic')
  const [customizations, setCustomizations] = useState({
    theme: 'american-nightmare',
    notifications: true,
    favoriteMatches: []
  })

  return (
    <>
      <header className="hero-section">
        <h1>The American Nightmare - Cody Rhodes</h1>
        <p>Welcome to the official fan club</p>
      </header>

      <main>
        <section className="membership-section">
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
              <button onClick={() => setMembershipType('basic')}>Select Basic</button>
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
              <button onClick={() => setMembershipType('premium')}>Select Premium</button>
            </div>
          </div>
        </section>

        <section className="customization-section">
          <h2>Customize Your Experience</h2>
          <div className="customization-options">
            <div>
              <h3>Choose Your Theme</h3>
              <select 
                value={customizations.theme}
                onChange={(e) => setCustomizations({...customizations, theme: e.target.value})}
              >
                <option value="american-nightmare">American Nightmare</option>
                <option value="aew-legacy">AEW Legacy</option>
                <option value="wwe-star">WWE Star</option>
              </select>
            </div>

            <div>
              <h3>Notification Preferences</h3>
              <label>
                <input 
                  type="checkbox"
                  checked={customizations.notifications}
                  onChange={(e) => setCustomizations({...customizations, notifications: e.target.checked})}
                />
                Receive match alerts and updates
              </label>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2024 Cody Rhodes Fan Club</p>
      </footer>
    </>
  )
}

export default App
