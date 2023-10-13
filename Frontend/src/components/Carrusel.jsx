import { useState, useEffect } from "react";
import "../styles/Carrusel.css";

const Carrusel = () => {
  const imagenes = [
    "https://res.cloudinary.com/dmiocpap8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1683944911/v982-d4-01_ksim6m.jpg",
    "https://res.cloudinary.com/dmiocpap8/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1683944911/v982-d4-01_ksim6m.jpg",
    "https://res.cloudinary.com/dmiocpap8/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1683944911/v982-d4-01_ksim6m.jpg",
    "https://res.cloudinary.com/dmiocpap8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1683937410/Programacion-1000x562_uvsvyd.jpg",
    "https://res.cloudinary.com/dcegmeb0b/image/upload/v1696558679/ojos_x97qyf.jpg",
  ];

  const [index, setIndex] = useState(0);

  const cambiarAnterior = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  const cambiarSiguiente = () => {
    setIndex((prevIndex) =>
      prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const cambiarAutomaticamente = () => {
    const interval = setInterval(() => {
      cambiarSiguiente();
    }, 5000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    cambiarAutomaticamente();
  }, []);

  return (
    <>
      <div className="carousel">
        <div
          id="imagen-principal"
          className="carousel-image"
          style={{ backgroundImage: `url(${imagenes[index]})` }}
        ></div>
        <div className="carousel-dots"></div>
        <button
          id="anterior"
          className="carousel-button"
          onClick={cambiarAnterior}
        >
          &#8249;
        </button>
        <button
          id="siguiente"
          className="carousel-button"
          onClick={cambiarSiguiente}
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default Carrusel;
