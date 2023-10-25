import { useState, useEffect } from "react";
import Product from "../components/Product";
import { getAll } from "../Services/productosServices";
import Spinner from "react-bootstrap/Spinner";
import "../styles/MostrarTodoMenu.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex align-items-center">
        <Spinner animation="grow" />
      </div>
    );
  } else {
    // limita la cantidad de tarjetas a 4
    const limitedProducts = products.slice(0, 4);

    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "639px",
          gap: "80px",
        }}
      >
        {limitedProducts.map((product) => (
          <Product key={product?._id} {...product} />
        ))}
      </div>
    );
  }
}

export default Products;
