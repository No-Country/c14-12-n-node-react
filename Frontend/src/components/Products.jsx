import { useState, useEffect } from "react";
import { getAll } from "../Services/productosServices";
import Product from "../components/Product";
import Spinner from "react-bootstrap/Spinner";
import "../styles/cardStyle.css";

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
      <div className="d-flex align-items-center loading">
        <Spinner animation="grow" />
      </div>
    );
  } else {
    // limita la cantidad de tarjetas a 4
    const limitedProducts = products.slice(0, 4);

    return (
      <div className="container cont-products">
        {limitedProducts.map((product) => (
          <Product key={product?._id} {...product} />
        ))}
      </div>
    );
  }
}

export default Products;
