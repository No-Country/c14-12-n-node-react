import { useState, useEffect } from "react";
import Product from "../components/Product";
import { getAll } from "../Services/productosServices";
import Spinner from "react-bootstrap/Spinner";


function Products() {
 const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAll();
        setProduct(data);
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
      {<Spinner animation="grow" />}
     </div>
   );
  } else {
    return (
      <div>
        {product.map((product) => (
          <Product
             {...product}
            key={product?._id}
          />
        ))}
      </div>
    );
  }
 }

export default Products;
