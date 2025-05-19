import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RecipeInfo() {
  const [recpie, setRecipe] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${params.id}`)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    // <div className="card">
    //   <div className="card-header">{params.id}</div>
    //   <div className="card-body">
    //     <h5 className="card-title">{recpie.name}</h5>
    //     <p className="card-text">
    //       With supporting text below as a natural lead-in to additional content.
    //     </p>
    //     <a href="#" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>
    <div className="card mb-3">
      <img
        src={recpie.image}
        className="card-img-top"
        style={{ height: 500 }}
        alt={recpie.name}
      />
      <div className="card-body">
        <h5 className="card-title">{recpie.name}</h5>
        <p className="card-text">{recpie.instructions}</p>

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
