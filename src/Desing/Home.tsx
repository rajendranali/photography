// HomePage.js
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// Import the Photo and ApiResponse interfaces
import './Home.css'; // Import your custom CSS file for HomePage styling
// types.ts
export interface Photo {
    id: number;
    imageUrl: string;
  }
  
  export interface ApiResponse {
    data: Photo[];
  }
  
const HomePage: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[][]>([[
        { id: 1, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },{ id: 1, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 1, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 1, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 1, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 2, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        { id: 3, imageUrl: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg' },
        // Add more photos here
      ]]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);



  

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={handleLoadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="grid-container">
        {/* Render the photos in the grid */}
        {photos[0].map((photo) => (
          <div key={photo.id} className="grid-item">
            <img src={photo.imageUrl} alt={`Photo ${photo.id}`} />
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default HomePage;
