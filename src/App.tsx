import { useState } from 'react';
import { popular_genius } from './data.tsx';
import './app.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < popular_genius.length - 1;
  const hasPrevious = index > 0;

  function handleNextClick() {
    setIndex(hasNext ? index + 1 : 0);
  }

  function handleBackClick() {
    setIndex(hasPrevious ? index - 1 : popular_genius.length - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = popular_genius[index];

  return (
    <div className="gallery-container">
      <h1 className="gallery-header">Mervie V. Isip</h1>
      <div className="gallery-buttons">
        <button onClick={handleBackClick} className="gallery-btn">Back</button>
        <button onClick={handleNextClick} className="gallery-btn">Next</button>
      </div>
      <div className="sculpture-details">
        <h2 className="sculpture-name">
          <i>{sculpture.name}</i>  {sculpture.artist}
        </h2>
        <h3 className="sculpture-index">({index + 1} of {popular_genius.length})</h3>
        <button onClick={handleMoreClick} className="show-details-btn">
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p className="sculpture-description">{sculpture.description}</p>}
        <div className="image-container">
          <img
            src={sculpture.url}
            alt={sculpture.alt}
            className="sculpture-image"
          />
        </div>
      </div>
    </div>
  );
}
