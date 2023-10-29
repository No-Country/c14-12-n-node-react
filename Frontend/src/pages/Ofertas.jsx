import { useState, useEffect } from "react";
import { getSales } from "../Services/productosServices";
import Product from "../components/Product";
import Spinner from "react-bootstrap/Spinner";

const Ofertas = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSales();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error GET products", error);
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
    //const limitedProducts = products.slice(0, 10);

    return (
      <>
        <h1
          style={{
            margin: "5rem auto 8rem",
            textAlign: "center",
            color: "black",
            fontSize: "5.5rem",
          }}
        >
          Ofertas Especiales
        </h1>
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            height: "auto",
            gap: "12rem",
            marginBottom: "4rem",
          }}
        >
          {products.map((product) => (
            <Product key={product?._id} {...product} />
          ))}
        </div>
      </>
    );
  }
};

export default Ofertas;
