import { getElementById } from "../Services/productosServices";
import { useState, useEffect } from "react";
import Product from "../components/Product";
import Spinner from "react-bootstrap/esm/Spinner";
import { useParams } from "react-router-dom";
import "../styles/OnlyOneProduct.css";
import { useAuth } from "../context/AuthContext";

const OnlyOneProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { ShoppingCartContext } = useAuth();

  useEffect(() => {
    const fetchData = async (req) => {
      try {
        const data = await getElementById(id);
        setProduct(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex align-items-center loading">
        <Spinner animation="grow" />
      </div>
    );
  }
  return (
    <div className="container-onlyoneproduct">
      <div className="container-img-onlyoneproduct">
        <img src={product.image} alt="" className="img-onlyoneproduct" />
      </div>
      <div className="container-info-onlyoneproduct">
        <h2>{product.name}</h2>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Cantidad disponible: {product.quantity}</p>
        <button
          className="btn btn-success btn-lg text-body-light fs-3 fw-bold"
          onClick={ShoppingCartContext}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default OnlyOneProduct;
