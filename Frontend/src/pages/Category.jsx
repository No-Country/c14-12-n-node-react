/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Product from "../components/Product";
import Spinner from "react-bootstrap/esm/Spinner";
import { getByCategory } from "../Services/productosServices";
import "../styles/CategoryAndSales.css";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, title } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getByCategory(category);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="d-flex align-items-center loading">
        <Spinner animation="grow" />
      </div>
    );
  } else {
    // limita la cantidad de tarjetas a 4
    //const limitedProducts = products.slice(0, 10);

    return (
      <>
        <h1 className="title-category">{title}</h1>
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

export default Category;
