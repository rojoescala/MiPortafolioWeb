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
    const intervalTime = 5000; // Cambia de slide cada 3 segundos

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalTime);
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
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
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
                Prev
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2">
                Next
            </button>
        </div>
    );
};

export default Carrusel;
