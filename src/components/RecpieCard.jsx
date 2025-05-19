import { Link, useNavigate } from "react-router";

export default function RecipeCard(props) {
    const { data , onDelete} = props;
  const navigate = useNavigate();
  const redirectToViewRecpieInfo = (id) => {
    navigate(`/recipe-info/${id}`);
  };
  return (
    <>
      <div className="card h-100">
        <img
          src={data.image}
          className="card-img-top"
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.instructions}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-info"
            onClick={() => redirectToViewRecpieInfo(data.id)}
          >
            Info
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => onDelete(data.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
