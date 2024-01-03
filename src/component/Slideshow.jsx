import React, { useState, useEffect } from 'react';
import '../css/SlidShow.css';
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (newIndex > slides.length) {
      newIndex = 1;
    }
    if (newIndex < 1) {
      newIndex = slides.length;
    }

    setSlideIndex(newIndex);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  };

  return (
    <div>
      <h2>Automatic Slideshow</h2>
      <p>Change image every 3 seconds:</p>

      <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img src="uploads/images/img_nature_wide.jpeg" style={{ width: '100%' }} alt="Nature" />
                <div className="text">Caption Text</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">2 / 3</div>
                <img src="uploads/images/img_snow_wide.jpeg" style={{ width: '100%' }} alt="Snow" />
                <div className="text">Caption Two</div>
            </div>

            <div className="mySlides fade">
                <div className="numbertext">3 / 3</div>
                <img src="uploads/images/img_mountains_wide.jpeg" style={{ width: '100%' }} alt="Mountains" />
                <div className="text">Caption Three</div>
            </div>
        </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
