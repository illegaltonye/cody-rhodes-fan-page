import styled from 'styled-components'

const MembershipContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const PlanCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const Price = styled.div`
  font-size: 2.5rem;
  color: #c41e3a;
  margin: 1rem 0;
`

const Button = styled.button`
  background: #c41e3a;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #a01830;
  }
`

function Membership() {
  return (
    <MembershipContainer>
      <h1>Join The American Nightmare Club</h1>
      <PlanGrid>
        <PlanCard>
          <h3>Basic Membership</h3>
          <Price>$9.99/month</Price>
          <ul>
            <li>Exclusive Content Access</li>
            <li>Monthly Newsletter</li>
            <li>Fan Community Access</li>
            <li>Digital Wallpapers</li>
          </ul>
          <Button>Join Now</Button>
        </PlanCard>

        <PlanCard>
          <h3>Premium Membership</h3>
          <Price>$19.99/month</Price>
          <ul>
            <li>All Basic Features</li>
            <li>Virtual Meet & Greets</li>
            <li>Exclusive Merchandise</li>
            <li>Priority Event Access</li>
            <li>Personalized Birthday Message</li>
          </ul>
          <Button>Join Now</Button>
        </PlanCard>
      </PlanGrid>
    </MembershipContainer>
  )
}

export default Membership