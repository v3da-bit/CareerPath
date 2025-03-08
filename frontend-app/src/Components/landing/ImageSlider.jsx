import React, { useRef, useEffect } from "react";
import "./ImageSlider.css"; // Importing the CSS file for styling

const ImageSlider = () => {
  const containerRef = useRef(null);
  const boxesRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxes = boxesRef.current;

    const handleMouseMove = (e) => {
      const containerWidth = container.clientWidth;
      const scrollWidth = boxes.scrollWidth;
      const x = e.clientX;

      // Calculate the scroll position based on mouse movement
      const scrollPos = (x / containerWidth) * (scrollWidth - containerWidth);

      // Apply the calculated scroll position as a transform to the boxes
      boxes.style.transform = `translateX(-${scrollPos}px)`;
    };

    // Attach the event listener to the container
    container.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
   <>
   <h2 style={{fontSize:'45px', textAlign:'center', fontWeight:'700', margin:'50px', marginTop:'100px'}}>
    Explore Catageries
   </h2>
      <div className="image-slider-container" ref={containerRef}>
      <div className="boxes" ref={boxesRef}>
        <div className="box">
          <img src="images/51.jpeg" alt="Image 1" />
        </div>
        <div className="box">
          <img src="images/52.jpeg" alt="Image 2" />
        </div>
        <div className="box">
          <img src="images/53.jpeg" alt="Image 3" />
        </div>
        <div className="box">
          <img src="images/54.jpeg" alt="Image 4" />
        </div>
        <div className="box">
          <img src="images/55.jpeg" alt="Image 5" />
        </div>
        <div className="box">
          <img src="images/56.jpeg" alt="Image 6" />
        </div>
        <div className="box">
          <img src="images/58.jpeg" alt="Image 8" />
        </div>
        <div className="box">
          <img src="images/59.jpeg" alt="Image 9" />
        </div>
        <div className="box">
          <img src="images/60.jpeg" alt="Image 1" />
        </div>
        <div className="box">
          <img src="images/61.jpeg" alt="Image 2" />
        </div>
        <div className="box">
          <img src="images/62.jpeg" alt="Image 62" />
        </div>
        <div className="box">
          <img src="images/63.jpeg" alt="Image 4" />
        </div>
        <div className="box">
          <img src="images/64.jpeg" alt="Image 5" />
        </div>
        <div className="box">
          <img src="images/65.jpeg" alt="Image 5" />
        </div>
      </div>
    </div>
   </>
  );
};

export default ImageSlider;
