import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #c41e3a;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`

function Navigation() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">CODY RHODES</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/matches">Matches</NavLink>
          <NavLink to="/membership">Join Club</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navigation