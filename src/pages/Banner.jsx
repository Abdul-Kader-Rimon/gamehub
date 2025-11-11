import React, { useEffect, useState } from 'react';

const Banner = ({games}) => {
    const slides = games.slice(0, 6);
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);

        }, 5000);
        return () => clearInterval(interval);

    }, [slides.length])
    
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }

    return (
      <div className='w-full relative overflow-hidden my-5 rounded-lg'>
            <div className='carousel
         w-full'>
          {slides.map((game , index) => (
            <div key={game.id} className={`w-full transition-transform duration-900 ease-in-out ${
                  index === currentSlide ? "block" : "hidden"
                }`}>
              <img
                className="w-full h-64 md:h-[500px] object-center rounded-lg"
                src={game.coverPhoto}
                alt={game.title}
              />
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &#10094;
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          &#10095;
        </button>
      </div>
    );
};

export default Banner;