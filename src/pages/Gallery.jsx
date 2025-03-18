import styled from 'styled-components'
import { useState } from 'react'

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const PhotoCard = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover img {
    transform: scale(1.05);
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
`

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const images = [
    {
      id: 1,
      src: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2024/04/20240407_WM40_3998_CELEBRATION.jpg",
      alt: "WrestleMania 40 Championship Victory",
      category: "PPV"
    },
    {
      id: 2,
      src: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2024/01/20240127_RR_3571_CODY_WINS.jpg",
      alt: "Royal Rumble Victory",
      category: "PPV"
    },
    {
      id: 3,
      src: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2024/02/20240202_SD_2789_CODY_ENTRANCE.jpg",
      alt: "SmackDown Entrance",
      category: "Weekly Shows"
    }
    // Add more images as needed
  ]

  // Add category filtering
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'PPV', 'Weekly Shows', 'Fan Moments']

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <GalleryContainer>
      <h1>Photo Gallery</h1>
      
      <FilterContainer>
        {categories.map(category => (
          <FilterButton 
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <PhotoGrid>
        {filteredImages.map(image => (
          <PhotoCard key={image.id} onClick={() => setSelectedImage(image)}>
            <Photo src={image.src} alt={image.alt} loading="lazy" />
            <PhotoOverlay>
              <PhotoTitle>{image.alt}</PhotoTitle>
            </PhotoOverlay>
          </PhotoCard>
        ))}
      </PhotoGrid>

      {selectedImage && (
        <Modal onClick={() => setSelectedImage(null)}>
          <ModalImage src={selectedImage.src} alt={selectedImage.alt} />
          <CloseButton>&times;</CloseButton>
        </Modal>
      )}
    </GalleryContainer>
  )
}

// Add these new styled components
const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? '#c41e3a' : 'transparent'};
  color: ${props => props.active ? 'white' : '#c41e3a'};
  border: 2px solid #c41e3a;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c41e3a;
    color: white;
  }
`

const PhotoOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
`

const PhotoTitle = styled.p`
  color: white;
  margin: 0;
  font-size: 0.9rem;
`

export default Gallery