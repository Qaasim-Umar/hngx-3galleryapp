import React from 'react'
import imglist from '../images.json'
import '../styles/Imagesgrid.css'
import { useState,  useEffect } from 'react';



const Imagesgrid = ({ searchQuery }) => {

   
      const [imageOrder, setImageOrder] = useState([]);
      const [filteredImages, setFilteredImages] = useState([]);
    
      // Event handlers
      const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
      };
    
      const handleDragOver = (e, index) => {
        e.preventDefault();
      };
    
      const handleDrop = (e, targetIndex) => {
        e.preventDefault();
        const draggedIndex = parseInt(e.dataTransfer.getData('index'));
    
        if (draggedIndex !== targetIndex) {
          const newImageOrder = [...imageOrder];
    
          // Swap positions of the dragged image and the target image
          [newImageOrder[draggedIndex], newImageOrder[targetIndex]] = [
            newImageOrder[targetIndex],
            newImageOrder[draggedIndex],
          ];
    
          setImageOrder(newImageOrder);
        }
      };
    
      useEffect(() => {
        // Filter the images based on the search query
        const filtered = imglist.filter((image) =>
          image.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setFilteredImages(filtered);
        setImageOrder(filtered.map((image, index) => index));
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
                       imageOrder.map((index)  => (
                            <div key={index} className='img-container'  draggable="true"
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                          >
                                <img src={filteredImages[index].src} alt={filteredImages[index].alt}  />
                                {/* <p>{image.tags + ""}</p> */}
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
export default Imagesgrid 