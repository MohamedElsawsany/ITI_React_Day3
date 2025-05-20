import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cart";

export default function ProductInfo() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch();
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm">
          <img
            src={product.images?.[0] || "https://via.placeholder.com/600x400"}
            className="card-img-top img-fluid"
            style={{ maxHeight: 450 ,objectFit: "cover" }}
            alt={product.title}
          />
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <h5 className="text-success">${product.price}</h5>
            <p className="card-text">{product.description}</p>

            <ul className="list-group list-group-flush my-3">
              <li className="list-group-item">
                <strong>Category:</strong> {product.category}
              </li>
              <li className="list-group-item">
                <strong>Brand:</strong> {product.brand}
              </li>
              <li className="list-group-item">
                <strong>Rating:</strong> {product.rating} / 5
              </li>
              <li className="list-group-item">
                <strong>Stock:</strong> {product.stock}
              </li>
            </ul>

            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
              <Link to="/products" className="btn btn-outline-secondary">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
