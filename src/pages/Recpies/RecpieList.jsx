import { useEffect, useState } from "react";
import axios from 'axios';
import RecipeCard from "../../components/RecpieCard";

export default function RecipeList() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      axios.get('https://dummyjson.com/recipes')
      .then((res)=>setRecipes(res.data.recipes))
      .catch((err)=>console.log(err))
  },[]);

  const deleteRecpieFromTheList = (id) => {
    const recpiesFilter = recipes.filter((recipe) => recipe.id != id);
    setRecipes(recpiesFilter);
  };

  return (
    <>
      <h2>Recipes List</h2>
      <hr></hr>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe) => (
          <div className="col" key={recipe.id}>
            <RecipeCard data={recipe} onDelete={deleteRecpieFromTheList} />
          </div>
        ))}
      </div>
    </>
  );
}
