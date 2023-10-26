<<<<<<< HEAD
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    
    <div>
      <Header />
      <Carousel />
      <h1>Home Prueba</h1>
      <Footer/>
    </div>
    
=======
import Carousels from "../components/Carousels";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Carousels className="carousel" />
      <Products />
    </>
>>>>>>> 132a929a2869a527b1bcfc2945d6793c6ebc1bb0
  );
};

export default Home;
