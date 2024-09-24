// src/Carrusel.js
import { useState, useEffect } from 'react';
import img1 from "../assets/IMG_20220618_114604.jpg"
import img2 from "../assets/alerterror.png"
import img3 from "../assets/me.jpg"

const slides = [
    img1,
    img2,
    img3,
];

const Carrusel = () => {
    const [index, setIndex] = useState(0);
    const intervalTime = 5000;

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalTime);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-md overflow-hidden mx-auto">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
                {slides.map((slide, idx) => (
                    <div key={idx} className="min-w-full h-48 overflow-hidden"> {/* Establece la altura deseada */}
                        <img src={slide} alt={`Slide ${idx + 1}`} className="w-full h-full object-contain" /> {/* Asegura que la imagen cubra el contenedor */}
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full text-white p-2 hover:bg-white hover:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
                </svg>
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full text-white p-2 hover:bg-white hover:text-yellow-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                </svg>
            </button>
        </div>
    );
};

export default Carrusel;
