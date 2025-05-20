import { Link, useNavigate } from "react-router";
import Badge from "react-bootstrap/Badge";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";

export default function ProductsCard(props) {
  const { data, onDelete } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  const redirectToViewProductInfo = (id) => {
    navigate(`/product-info/${id}`);
  };

  // Prepare stock badge
  const stockBadge =
    data.stock > 0 ? (
      <Badge bg="success">In Stock</Badge>
    ) : (
      <Badge bg="danger">Out of Stock</Badge>
    );

  return (
    <div className="card h-100">
      <img
        src={data.images?.[0] || "https://via.placeholder.com/300"}
        className="card-img-top"
        alt={data.title}
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.description}</p>

        <div className="d-flex justify-content-between align-items-center">
          {stockBadge}
          <span className="text-muted small">only {data.stock} left</span>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between align-items-center">
        <div>
          <button
            className="btn btn-outline-info"
            onClick={() => redirectToViewProductInfo(data.id)}
          >
            View
          </button>
          <button
            className="btn btn-outline-primary mx-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-outline-danger mx-1"
            onClick={() => onDelete(data.id)}
          >
            Delete
          </button>
        </div>
        <h3 className="mb-0">{data.price}$</h3>
      </div>
    </div>
  );
}
