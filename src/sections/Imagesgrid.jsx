import React from 'react'
import imglist from '../images.json'
import '../styles/Imagesgrid.css'
import { useState, useRef, useEffect } from 'react';



const Imagesgrid = ({ searchQuery }) => {



  const [dragged, setDragged] = useState(false);
  const [filteredImages, setFilteredImages] = useState([]);

  const dragSection = useRef(null);
  const draggedOverSection = useRef(null);

  // Event handlers
  const handleDragStart = (index) => {
    setDragged(!dragged);
    dragSection.current = index;
  };

  const handleDragEnter = (index) => {
    setDragged(true);
    if (dragSection.current !== null) {
      draggedOverSection.current = index;
    }
  };

  const handleSort = () => {
    setDragged(!dragged);

    if (dragSection.current !== null && draggedOverSection.current !== null) {
      const searchResultsClone = [...filteredImages];
      const temp = searchResultsClone[dragSection.current];
      searchResultsClone[dragSection.current] =
        searchResultsClone[draggedOverSection.current];
      searchResultsClone[draggedOverSection.current] = temp;
      setFilteredImages(searchResultsClone);
      dragSection.current = null;
      draggedOverSection.current = null;
    }
  };

  const handleTouchStart = (event, index) => {
    event.preventDefault(); // Prevent the default behavior of touch events
    handleDragStart(index);
  };
  
  const handleTouchMove = (event, index) => {
    event.preventDefault(); // Prevent the default behavior of touch events
    handleDragEnter(index);
  };
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  
  const handleTouchEnd = (event) => {
    event.preventDefault(); // Prevent the default behavior of touch events
    handleSort();
  };
  

  useEffect(() => {
    // Filter the images based on the search query
    const filtered = imglist.filter((image) =>
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredImages(filtered);
    setDragged(filtered.map((image, index) => index));
  }, [searchQuery]);

  if (!filteredImages || filteredImages.length === 0) {
    return <p>No images found.</p>; // Handle the case when no images match the search query
  }

  return (
    <div>
      <div className="image-preview">
        <h1 className='grid-header'>Images Gallery</h1>

        <div className="row">

          {
            filteredImages.map((image, index) => (
              <div key={index} className='img-container'   draggable
              onDragStart={() => handleDragStart(index)}
              onDragEnter={() => handleDragEnter(index)}
              onDragEnd={handleSort}
              onTouchStart={(event) => handleTouchStart(event, index)}
              onTouchMove={(event) => handleTouchMove(event, index)}
              onTouchEnd={(event) => handleTouchEnd(event)}
              onContextMenu={handleContextMenu}
              >
                <img src={image.src} alt={image.alt} />

              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}
export default Imagesgrid 