import { useState, useEffect } from 'react'
import styled from 'styled-components'

const heroImages = [
  'https://www.wwe.com/f/styles/wwe_16_9_l/public/all/2024/04/20240407_WM40_1860_CODY_ROMAN.jpg',
  'https://www.wwe.com/f/styles/gallery_img_l/public/all/2024/01/20240127_RR_3571_CODY_WINS.jpg',
  'https://www.wwe.com/f/styles/gallery_img_l/public/all/2024/02/20240202_SD_2789_CODY_ENTRANCE.jpg'
]

const HeroSection = styled.div`
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
              url(${props => props.image}) center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  transition: background-image 0.5s ease;
`

const SlideControls = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 10px;
`

const SlideButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#c41e3a' : 'white'};
  border: none;
  cursor: pointer;
`

const NewsSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const NewsCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ShareButton = styled.button`
  background: #c41e3a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #a01830;
  }
`

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
`

// Add these styled components after the existing styled components and before the Home function
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([
    {
      id: 1,
      title: "WrestleMania 40 Main Event",
      content: "Cody Rhodes finishes his story at the grandest stage of them all!",
      date: "April 7, 2024"
    },
    {
      id: 2,
      title: "Royal Rumble Victory",
      content: "The American Nightmare wins back-to-back Royal Rumbles!",
      date: "January 27, 2024"
    }
  ])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(current => (current + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleShare = (newsItem) => {
    if (navigator.share) {
      navigator.share({
        title: newsItem.title,
        text: newsItem.content,
        url: window.location.href
      })
    }
  }

  if (loading) {
    return <LoadingOverlay>Loading...</LoadingOverlay>
  }

  return (
    <>
      <HeroSection image={heroImages[currentSlide]}>
        <Title>The American Nightmare</Title>
        <Subtitle>
          Follow the journey of professional wrestling's most electrifying superstar
        </Subtitle>
        <SlideControls>
          {heroImages.map((_, index) => (
            <SlideButton 
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </SlideControls>
      </HeroSection>
      
      <NewsSection>
        <h2>Latest Updates</h2>
        <NewsGrid>
          {news.map(item => (
            <NewsCard key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <small>{item.date}</small>
              <ShareButton onClick={() => handleShare(item)}>
                Share This News
              </ShareButton>
            </NewsCard>
          ))}
        </NewsGrid>
      </NewsSection>
    </>
  )
}

export default Home