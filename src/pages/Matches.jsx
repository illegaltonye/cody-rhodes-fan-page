import styled from 'styled-components'
import { useState } from 'react'

const MatchesContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`

const MatchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const MatchCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`

const MatchImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const MatchInfo = styled.div`
  padding: 1.5rem;
`

const MatchResult = styled.span`
  background: ${props => props.victory ? '#4CAF50' : '#f44336'};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`

function Matches() {
  const [matches] = useState([
    {
      id: 1,
      event: "WrestleMania 40",
      date: "April 6, 2024",
      opponent: "Roman Reigns",
      result: "Victory",
      venue: "Lincoln Financial Field",
      image: "/images/wrestlemania40.jpg"
    },
    {
      id: 2,
      event: "Royal Rumble 2024",
      date: "January 27, 2024",
      opponent: "30-Man Royal Rumble",
      result: "Victory",
      venue: "Tropicana Field",
      image: "/images/royalrumble2024.jpg"
    },
    {
      id: 3,
      event: "WrestleMania 39",
      date: "April 2, 2023",
      opponent: "Roman Reigns",
      result: "Defeat",
      venue: "SoFi Stadium",
      image: "/images/wrestlemania39.jpg"
    }
  ])

  return (
    <MatchesContainer>
      <h1>Career Highlights</h1>
      <MatchGrid>
        {matches.map(match => (
          <MatchCard key={match.id}>
            <MatchImage src={match.image} alt={match.event} />
            <MatchInfo>
              <h3>{match.event}</h3>
              <p>{match.date}</p>
              <p>vs. {match.opponent}</p>
              <p>{match.venue}</p>
              <MatchResult victory={match.result === 'Victory'}>
                {match.result}
              </MatchResult>
            </MatchInfo>
          </MatchCard>
        ))}
      </MatchGrid>
    </MatchesContainer>
  )
}

export default Matches