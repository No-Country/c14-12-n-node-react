import Carousels from "../components/Carousels";
import Products from "../components/Products";
import MostrarTodoMenu from "../components/MostrarTodoMenu";

const Home = () => {
  return (
    <>
      <Carousels className="carousel" />
      <MostrarTodoMenu />
      <Products />
    </>
  );
};

export default Home;
