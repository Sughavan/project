import React from 'react'
import { useState,useEffect } from 'react'
import a1 from "../Images/1.jpeg"
import a2 from "../Images/2.png"
import a3 from "../Images/3.png"
import a4 from "../Images/4.jpeg"
import a5 from "../Images/5.jpeg"
const SlideShow = () => {
    const interval=5000;
    const images=[a1,a2,a3,a4,a5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, interval);

    return () => clearInterval(intervalId);
  }, [5, interval]);
 return (
    <div className="slideshow">
      <a><img style={{float:'left', borderRadius:'1px'}} height={"400cm"} width={"720cm"} src={images[currentIndex]}  /></a>
    </div>
  );
};

 export default SlideShow